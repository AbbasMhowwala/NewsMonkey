import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'genral'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes,
        category: PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state =  {
            articles: [],
            loading: true,
            page:1,
            totalResults: 0        
        }
        document.title = `${this.capitalizeFirstletter(this.props.category)} | NewsMonkey`
    }
    capitalizeFirstletter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    async updateNews(){
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data =  await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json()
        this.props.setProgress(70);
        this.setState({articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100);

    }
    async componentDidMount(){
        this.updateNews();
    }
    handlePrevClick = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data =  await fetch(url);
        // let parseData = await data.json()
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parseData.articles,
       // })
        this.setState({page: this.state.page - 1});
        this.updateNews();
        
    }
    handleNextClick = async ()=>{
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data =  await fetch(url);
        let parseData = await data.json()
        this.setState({articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults
        })
    }
    
    render() {
        return (
            <>
                <h1 className="newshead">News Monkey - Top {this.capitalizeFirstletter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}
                >
                <div className="container">
                    <div className="row">
                    {this.state.articles.map((element)=>
                        <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title?element.title.slice(0, 45): ""} description={element.description?element.description.slice(0, 88): ""} imageUrl={element.urlToImage?element.urlToImage: ""} 
                            url={element.url?element.url: ""} author={element.author?element.author: ""} date={element.publishedAt?element.publishedAt: ""} source={element.source.name} />   
                        </div>
                    )}  
                    </div>
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">                    
                    <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>                              */}
            </>
        )
    }
}

export default News
