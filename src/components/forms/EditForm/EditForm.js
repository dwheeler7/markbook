const EditForm = props => {  
  
  async function handleForm(event) {    
    event.preventDefault()
    const formData = Object.fromEntries(new FormData(event.target))
    try {
      const response = await fetch(`/api/bookmarks/${props.bookmark._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })   
      if (response.ok) {       
        window.location.href = '/'
      } else {
        const errorData = await response.json()
        console.log(errorData.msg)
      }

    } catch (error) {
      console.error('Network error:', error.message)
    }
  }

  return (
  <form onSubmit={handleForm}>
    <input type="text" name="title" defaultValue={props.bookmark.title} />
    <input type="urk" name="url" defaultValue={props.bookmark.url} />
    <button type="submit">Edit</button>
  </form>
  )
}

export default EditForm