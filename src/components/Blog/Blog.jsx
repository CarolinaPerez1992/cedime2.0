import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { notiData } from './notiData'
import "../Blog/Blog.css"

const Blog = () => {
//   async function fetchApi(){
//     let events = await fetch('http://localhost:8080/posts')
//     events = await events.json()
//     console.log(events)
//   }
//   fetchApi()
  return (
    <div className='Blog' id='blog'>
      <div className='contenedor_titulo'>
      <div className='blob2'></div>
        <h2 className='titulo_filo'>Blog</h2>
      </div>
      <div className="contenedor_noticias">
      {notiData.map((item)=>(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imagen} />
      <Card.Body>
        <Card.Title>{item.titulo}</Card.Title>
        <Card.Text className="text15">
          {item.cuerpo}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
      ))}
      </div>
      </div>
  )
}

export default Blog