import React from 'react'
import { Card, Carousel, Image, Button } from 'react-bootstrap'

export default function Post({post}) {




  return (
    <Card  className='bg-dark'>
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
            <Card.Title className='text-light'>{post.title}</Card.Title>
            <Card.Title className='text-light'>{post.author}</Card.Title>
            <Card.Text className='text-light'>{post.text}</Card.Text>
        </Card.Body>
        <Card.Footer className='justify-content-between'>
            <p className='text-light'>{post.date}</p>
            {post.categories.map(category => {
                return <Button className='mx-2' variant='outline-secondary'>{category}</Button>
            })}
        </Card.Footer>
    </Card>
  )
}
