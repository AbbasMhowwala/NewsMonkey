import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let{title, description, imageUrl, url, author, date, source} = this.props;
        return (
            <div className="my-3">
                <div className="card card-news">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{source}</span>
                    <img className="card-img-top" src={!imageUrl?"https://i.stack.imgur.com/y9DpT.jpg": imageUrl} alt="Image" />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p ClassName="card-text"><small ClassName="text-muted">By {!author?"Unknown": author} On {new Date(date).toGMTString()}</small></p>
                        <a href={url} className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
