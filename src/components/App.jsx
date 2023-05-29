import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [data, setData] = useState([])

  function handleAdd(input) {
    let uniqueId = uuidv4()
    try {
      setData((previousValues) => {
        return [
          ...previousValues,
          {
            key: uniqueId,
            id: uniqueId,
            ...input,
          },
        ]
      })
    } catch (error) {
      console.log(error)
    }
  }

  function handleChange(event) {}

  function TestFunction() {
    // console.log(data)
  }
  useEffect(() => {
    console.log
  }, [data])

  return (
    <div>
      <Header />
      <CreateArea Add={handleAdd} onInputChange={handleChange} />
      {/* {notesList.map((note) => {
        return (
          <Note
            key={uuid}
            id={uuid}
            title={note.title}
            content={note.content}
          />
        )
      })} */}
      {/* <Note key={1} id={1} title="1st title" content="1st content" /> */}
      <button
        onClick={() => {
          console.log('hello')
        }}
      >
        {' '}
        Test Button
      </button>
      <Footer />
    </div>
  )
}

export default App
