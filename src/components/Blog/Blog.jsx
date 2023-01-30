import React from 'react'
import "../Blog/Blog.css"

const Blog = () => {
  async function fetchApi(){
    let events = await fetch('http://localhost:8080/posts')
    events = await events.json()
    console.log(events)
  }
  fetchApi()
  return (
    <div className='Blog' id='blog'>
      <div className='contenedor_titulo'>
      <div className='blob2'></div>
        <h2 className='titulo_filo'>Blog</h2>
      </div>

      </div>
  )
}

export default Blog