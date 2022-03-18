import React from 'react';
import "../index.css";

// todo component to display each item task
export default function TodoItem(props) {
    return (
        <div className="todoItem" 
        onClick={props.deleteCallback}>
            <p>{props.name}</p>
        </div>
    )
}