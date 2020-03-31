import React from 'react'

class NewsFeed extends React.Component{

    newsItems = [];

    constructor(props){
        super(props);
        this.newsItems.push({ title : "News #0", content : "lorem ipsum ..."});
        this.newsItems.push({ title : "News #1", content : "lorem ipsum ..."});
        this.newsItems.push({ title : "News #2", content : "lorem ipsum ..."});
        this.newsItems.push({ title : "News #3", content : "lorem ipsum ..."});
    }

    render(){
        return (
            <div><h1>News Feed</h1>
                {this.newsItems.map((newsItem)=>{
                    return (
                        <div>
                            <h2>{newsItem.title}</h2>
                            <p>{newsItem.content}</p>
                        </div>
                    );
                })}
            </div>

        );
    }
}

export default NewsFeed;
