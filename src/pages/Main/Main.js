import React from 'react'
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import styles from "./Main.module.scss"

const Main = (props) =>  {
  
    const [bookmarks, setBookmarks] = useState()

    const deleteBookmark = async bookmarkId => {
        try {            
            const response = await fetch(`/api/bookmarks/${bookmarkId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }            
            })   
            if (response.ok) getBookmarks()
        } catch(error) {
            console.error(error)
        }   
    }
    
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
                <table className={styles.bookmarkTable}>
                    <thead>
                        <tr>
                            <th colSpan={3}>Bookmark</th>
                        </tr>                        
                    </thead>
                    <tbody>
                    {
                        bookmarks.map((bookmark, index) => {
                            const { title, url, _id } = bookmark
                            return (
                                <tr key={title}>
                                    <td><a href={url} target="_blank">{title}</a></td>
                                    <td><Link to={`/controllers/${bookmark._id}/edit`} rel="noopener noreferrer">Edit</Link></td>
                                    <td><button onClick={() => deleteBookmark(bookmark._id)}>Delete</button></td>                                                                    
                                </tr>
                                
                            )
                        })
                    }

                    </tbody>
                </table>    
                <Link to='/new'>Add a bookmark</Link>                        
            </>
        )
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }
    
    return bookmarks ? loaded() : loading()
}

export default Main