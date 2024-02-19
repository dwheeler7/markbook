import React from "react"
import {useState, useEffect} from "react"
import styles from "./BookmarkList.module.scss"


const bookmarkList = (props) =>  {
  
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

    const loaded = () => {
        return (           
            <div>   
                <ul>
                    {
                        bookmarks.map((bookmark, index) => {
                            const { title, url } = bookmark
                            return (
                                <li key={index}>
                                    <a href={url} target="_blank">{title}</a>
                                </li>
                            )
                        })
                    }
                </ul>             
            </div>
        )
    }

    const loading = () => {
        return <p>Loading bookmarks...</p>
    }

    return bookmarks ? loaded() : loading()
    
}

export default bookmarkList