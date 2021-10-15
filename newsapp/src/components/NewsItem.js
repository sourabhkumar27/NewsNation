import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, urlToImage, url} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!urlToImage?"https://smartcdn.prod.postmedia.digital/montrealgazette/wp-content/uploads/2021/08/0809-city-bars.jpg":urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={url} rel="noreferrer" className="btn btn-sm btn-info">Read More</a>
                    </div>
                    </div>
            </div>
        )
    }
}

export default NewsItem