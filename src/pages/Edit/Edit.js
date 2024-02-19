import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import EditForm from '../../components/forms/EditForm/EditForm'

export default function Edit (props) {
  const params = useParams()
  const url = `/api/bookmarks/${params.id}`

  const [bookmark, setBookmark] = useState()

  const getBookmark = async () => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        setBookmark(data)
    }catch(error){
        console.error(error)
    }   
  }
  
  useEffect(() => {
    getBookmark()
  }, [])
  
  const loaded = () => {
    return (
      <div>
        <h1>
          {bookmark.title}
        </h1>       
        <EditForm
            bookmark={bookmark}
        />
        
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