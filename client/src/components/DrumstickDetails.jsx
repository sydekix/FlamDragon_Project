import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import TopNav from './TopNav';
import BottomNav from './BottomNav';

export default function DrumstickDetails() {

    const {id, model, price, image_path, company} = useParams();
    const [drumstickData, setDrumstickData] = useState([]);
    
    useEffect(() => {

        fetch('http://localhost:3002/api/drumsticks')
            .then(response => response.json())
            .then(drumstickData => setDrumstickData(drumstickData));
    }, []);

return (
    <>
        <TopNav />
        <div className="drumstick-details row text-center justify-content-center">
                <Card className="product-details">
                    <Card.Img variant="top" src={require(`../media/${image_path}`)} alt="test image" />
                    <Card.Body>
                        <Card.Title className="text-center list-group-item">{model}</Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="border border-warning">Company: {company}</ListGroup.Item>
                            <ListGroup.Item className="border border-warning">Price: ${price}</ListGroup.Item>                           
                        </ListGroup>
                    </Card.Body>                 
                </Card>        
        </div>
        <BottomNav />
    </>
)
}