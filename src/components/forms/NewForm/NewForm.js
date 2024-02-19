const NewForm = () => {

    async function handleForm(event) {    
        event.preventDefault()
        const formData = Object.fromEntries(new FormData(event.target))
        try {
          const response = await fetch(`/api/bookmarks`, {
            method: 'POST',
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
          <input type="text" name="title" placeholder="Title" />
          <input type="urk" name="url" placeholder="URL" />
          <button type="submit">Add</button>
        </form>
    )

}

export default NewForm