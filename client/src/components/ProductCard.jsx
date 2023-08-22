import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import useParams from 'react'

export default function ProductCard() {
       
const handleProductsClick = () => {
        <Link to="/single-product"></Link>
    }
const { model, price } = useParams();

    return (
    <>
    <Card style={{ width: '18rem' }} onClick={handleProductsClick}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
            <Card.Title>{model}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>{model}</ListGroup.Item>
            <ListGroup.Item>{price}</ListGroup.Item>
        </ListGroup>
    </Card>     
</>
    )
}