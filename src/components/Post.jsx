import React from 'react'
import { Card, Carousel, Image } from 'react-bootstrap'

export default function Post({post}) {




  return (
    <Card  className='bg-secondary'>
        {
            post.img.length >= 2 && (
                <Carousel style={{height: '200px'}}>
            {post.img.map(img => {
                <Carousel.Item>
                    <img src={img} />
                </Carousel.Item>
            })}
        </Carousel>
            )
        }
        {
            post.img.length === 1 && <Card.Img variant='top'  src={post.img[0]} />
        }
        
        <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Title>{post.author}</Card.Title>
            <Card.Text>{post.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <p className='text-right'>{post.date}</p>
        </Card.Footer>
    </Card>
  )
}
