import React from 'react'

function NewsItem(props){
    return (
        <div>
            <h2>{props.item.title}</h2>
            <p>{props.item.content}</p>
        </div>
    );
}

export default NewsItem
