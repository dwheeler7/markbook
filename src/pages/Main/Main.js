import React from "react"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"

const Main = (props) =>  {
  
    const [bookmarks, setBookmarks] = useState()
    
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

    const loaded = () => { 
        return (           
            <>
            <Link to='/new'>Add a bookmark</Link>   
                <ul>
                    {
                        bookmarks.map((bookmark, index) => {
                            const { title, url, _id } = bookmark
                            return (
                                <li key={title}>
                                    <a href={url} target="_blank">{title}</a>
                                    <Link to={`/controllers/${bookmark._id}/edit`}>Edit</Link>
                                </li>
                            )
                        })
                    }
                </ul>             
            </>
        )
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }
    
    return bookmarks ? loaded() : loading()
}

export default Main