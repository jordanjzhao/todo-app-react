import React, { useState } from "react";

export default function AddTodo(props) {
    // state setup
    const [todo, setTodo] = useState("") // empty state for input

    // adding todo via form input
    // update state using onChange setting the value of todo state to input value entered

    // need to handle the inputs via onSubmit
    const handleSubmit = (e) => {
        // prevent form from refreshing page since this is default behaviour and clears form
        e.preventDefault()

        // addCallback prop
        props.addCallback(todo)

        // clear form
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            className="addTodoInput"
            placeholder="Add new task todo..."
            type="text" 
            value={todo} 
            onChange={e => setTodo(e.target.value)}
            />
        </form>
    )
}