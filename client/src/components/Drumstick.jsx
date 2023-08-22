import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Drumstick() {

    const [drumstickData, setDrumstickData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3002/api/drumsticks')
        // fetch(url)
            .then(response => response.json())
            .then(drumstickData => setDrumstickData(drumstickData));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row text-center">
            {drumstickData.map(product => (
                    <div className="col-lg-4 col-md-6">
                        <Link className="card-body-link" to={`/products/${product.id}/${product.model}/${product.company}/${product.price.toFixed(2)}/${product.image_path}`} key={product.id}>
                        <Card className="card">
                            <Card.Img variant="top" src={require(`../media/${product.image_path}`)} alt="test image" />
                            <Card.Body>
                                <Card.Title className="text-center product-model">{product.model}</Card.Title>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
