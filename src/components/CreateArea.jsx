import React, { useState,useEffect } from 'react'

function CreateArea(props) {
  const [input, setInput] = useState({ title: '', content: '' })
  // useEffect(() => {
  //   console.log(input);
    
  // }, []);
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={input.title}
          onChange={(event) => {
            let { name, value } = event.target
            if (name == 'title') {
              setInput((previousValues) => {
                return { ...previousValues, title: value }
              })
            }
          }}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
          onChange={(event) => {
            let { name, value } = event.target
            if (name == 'content') {
              setInput((previousValues) => {
                return { ...previousValues, content: value }
              })
            }
          }}
        />
        <button onClick={(event)=>{
          event.preventDefault()
          return props.Add(input)}}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea
