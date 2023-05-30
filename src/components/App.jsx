import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Title',
      content: 'Content',
    },
  ])

  function handleAdd(input) {
    const uniqueId = uuidv4()
    setData((previousValues) => [
      ...previousValues,
      {
        id: uniqueId,
        ...input,
      },
    ])
  }

  function handleDel(ID) {
    setData((previousValues) =>
      previousValues.filter((dataPoint) => dataPoint.id !== ID),
    )
  }

  return (
    <div>
      <Header />
      <CreateArea Add={handleAdd} />
      {data.map((data) => (
        <Note
          key={data.id}
          id={data.id}
          title={data.title}
          content={data.content}
          delFunction={handleDel}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
