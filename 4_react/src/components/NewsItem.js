import React from 'react'

function NewsItem(props){
    return (
        <div className={"card"}>
            <h2 className={"card-title"}>{props.item.title}</h2>
            <p className={"card-body"}>{props.item.content}</p>
        </div>
    );
}

export default NewsItem
