import React from "react";
import { Link } from "react-router-dom"
import styles from "./Form.module.scss"

const Form = (props) =>  {

    return (
        <form action={props.action}>
            <label for="title">Title</label>
            <input 
                type="text"
                name="title" 
                value={props.bookmark ? props.bookmark.title : ''}
            />
            <label for="url">URL</label>
            <input 
                type="text"
                name="url" 
                value={props.bookmark ? props.bookmark.url: ''}
            />
            <button type="submit">{props.submitLabel}</button>
        </form>        
    )
}

export default Form