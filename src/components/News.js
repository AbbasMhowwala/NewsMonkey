import React from 'react'
import { useEffect, useState } from 'react';
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
//import newsContext from '../context/newsContext';

const News = (props)=> {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)    
    const capitalizeFirstletter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews =  async ()=>{
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}`;
        setLoading(true)
        let data =  await fetch(url);
        props.setProgress(30);
        let parseData = await data.json()
        props.setProgress(70);
        setArticles(parseData.articles)
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstletter(props.category)} | NewsMonkey`
        updateNews();
        //eslint-disable-next-line
    }, [])
    const fetchMoreData = async () => {        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}`;
        setPage(page+1)
        let data =  await fetch(url);
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults)
    }    
    return (
        <>
            <h1 className="newshead">News Monkey - Top {capitalizeFirstletter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
            >
            <div className="container">
                <div className="row">
                {articles.map((element)=>
                    <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title?element.title.slice(0, 45): ""} description={element.description?element.description.slice(0, 88): ""} imageUrl={element.urlToImage?element.urlToImage: ""} 
                        url={element.url?element.url: ""} author={element.author?element.author: ""} date={element.publishedAt?element.publishedAt: ""} source={element.source.name} />   
                    </div>
                )}  
                </div>
            </div>
            </InfiniteScroll>
        </>
        )
}
News.defaultProps = {
    country: 'in',
    //pageSize: 8,
    category: 'genral'
}
News.propTypes = {
    country: PropTypes.string,
    //pageSize: PropTypes,
    category: PropTypes.string,
}
export default News
