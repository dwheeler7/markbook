import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import BookmarkList from '../../components/BookmarkList/BookmarkList'


export default function Main(props){
    return(
            
        <div>
            <h1>Bookmarks</h1>
            <BookmarkList/>
        </div>        
    )
}