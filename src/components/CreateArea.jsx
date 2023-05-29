import React, { useState,useEffect } from 'react'

function CreateArea(props) {
  const [input, setInput] = useState({ title: '', content: '' })
  useEffect(() => {
    console.log(input);
    
  }, [input]);
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
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
          onChange={(event) => {
            let { name, value } = event.target
            if (name == 'content') {
              setInput((previousValues) => {
                return { ...previousValues, content: value }
              })
            }
          }}
        />
        <button onClick={()=>{props.Add(input)}}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea
