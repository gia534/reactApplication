import React, {useEffect, useState} from "react";
import Axios from "axios";
import NewsArticle from "./NewsArticle";

const ListNewsItems = () =>{
    const [news, setNews] = useState([]);
   useEffect(() => {
       const getArticles = async () => {
           const res = await Axios.get(
               "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=5&apiKey=b4dba80fde6c4e3da3d5acdbcae2e7fa"
           );
           setNews(res.data.articles)
           console.log(res);
       };
       // setInterval(()=>
       //     {
       //         getArticles().then(res => console.log(res)).catch(err => console.error(err));
       //     }, 5000
       // )
       getArticles().then(res => console.log(res)).catch(err => console.error(err));

   }, []);
    return (
        <div>
            {news.map(({description, url,title, urlToImage}) => (
                <NewsArticle title={title} description={description} url={url} urlToImage={urlToImage}/>
            ))}
        </div>
    )
}

export default ListNewsItems;

// axios({
//     method: 'get',
//     url:"https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=c11c00d2a4f64b9381d31569344bb3fa"
// }).then(res => showOutput(res.data)).catch(err => console.error(err));