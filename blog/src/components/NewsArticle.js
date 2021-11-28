import React from "react";
import './NewsArticle.css'
const NewsArticle = ({title, description, url, urlToImage}) => {

    return (
        <div className={"article"}>
            <img className={"articleImage"} src={urlToImage} alt={"Article Image"}/>
            <h3><a href={url} target={"_blank"}>{title}</a> </h3>
            <p>{description}</p>
        </div>
    )
}
export default NewsArticle;