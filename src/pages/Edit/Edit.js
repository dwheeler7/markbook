import {useState, useEffect} from "react"
import {Form, useParams} from "react-router-dom"

export default function Edit (props) {
  const params = useParams()
//   const symbol = params.symbol.toUpperCase()
  // Using the other two variables to create our URL
  const url = `/api/bookmarks/${params.id}`

  //state to hold the bookmark data
  const [bookmark, setBookmark] = useState()

  //function to fetch coin data
  const getBookmark = async () => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        setBookmark(data)
    }catch(error){
        console.error(error)
    }   
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getBookmark()
  }, [])

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {bookmark.title}
        </h1>                
      </div>
    )
  }

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>
  }

  // if coin has data, run the loaded function, otherwise, run loading
  return bookmark ? loaded() : loading()
}