import React from "react"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import styles from "./BookmarkList.module.scss"


const BookmarkList = (props) =>  {
  
    const [bookmarks, setBookmarks] = useState([])
    
    // Save bookmarks array
    async function getBookmarks() {
        try {            
            const response = await fetch('/api/bookmarks')
            const data = await response.json()
            setBookmarks(data)
        } catch(error) {
            console.error(error)
        }   
    }
    
    useEffect(() => {
        getBookmarks()
    }, [])

    return (           
        <div>   
            <ul>
                {
                    bookmarks.map((bookmark, index) => {
                        const { title, url, _id } = bookmark
                        return (
                            <li key={title}>
                                <a href={url} target="_blank">{title}</a>
                                <Link to={`/controllers/edit/${bookmark._id}`}>Edit</Link>
                            </li>
                        )
                    })
                }
            </ul>             
        </div>
    )
}

export default BookmarkList