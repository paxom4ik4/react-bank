import React, { useState, useEffect } from 'react';
import NewsApi from '../../services/NewsApi/NewsApi';
import './News.css';

const News = () => {
    // interface INewsObject {
    //     title: string,
    //     description: string,
    // }

    // interface INews {
    //     news: Array<INewsObject>
    // }

    const newsApi = new NewsApi();
    const [isLoading, setLoading] = useState<boolean>(true);
    const [news, setNews] = useState<any>([]);

    useEffect(() => {
        const data = newsApi.getData();
        data.then((res: { json: () => Promise<any>; }) => res.json().then((res: any) => setNews(res.articles)));
        setLoading(!isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div className="news-content">
            <div className="news-title">Financial News:</div>
            <div className="news">
                {news.map((item: any, index: number) => {
                    return (
                        <div className="news-item" key={index.toString()}>
                            <img src={item.urlToImage} alt="news-icon" className="news-img"/>
                            <div className="news-body">
                                <div className="news-title">{item.title}</div>
                                <div className="news-author">{item.author}</div>
                                <div className="news-description">{item.description}</div>
                                <a href={item.url} className="news-link">Full article</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default News;