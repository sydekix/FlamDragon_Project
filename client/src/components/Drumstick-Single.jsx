import React, { useState, useEffect } from 'react'
// import React, { useState, useEffect } from 'react'
// import TopNav from './TopNav'
import Card from 'react-bootstrap/Card';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
// import React, { useState, useEffect, useParams } from 'react'

import Card from 'react-bootstrap/Card';
// import ProductCard from 'react-bootstrap/ProductCard'
import ListGroup from 'react-bootstrap/ListGroup';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import SingleProduct from './SingleProduct'
import ProductCard from './ProductCard';
import DrumstickDetails from './DrumstickDetails';

export default function Drumstick() {
    //*** TRYING TO USE VARIABLE FOR fetching db info  BEGINNING */
    // const url = 'http://localhost:3002/api/drumsticks'
    //*** TRYING TO USE VARIABLE FOR fetching db info  END II */

    // const {id, model, price, image_path} = useParams();
    // const {image_path} = useParams();
    const {id, model, price, company, image_path} = useParams();


    const [drumstickData, setDrumstickData] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:3002/api/drumsticks')
    //     // fetch(url)
    //         .then(response => response.json())
    //         .then(drumstickData => setDrumstickData(drumstickData));
    // }, []);

    //*** END */
    // const [drumstickData, setDrumstickData] = useState([]);
    // const fetchDbData = fetch('http://localhost:3002/api/drumsticks')
    // .then(response => response.json())
    // .then(drumstickData => setDrumstickData(drumstickData));
    // useEffect(() => {
    //     // fetch('http://localhost:3002/api')
    //     fetchDbData 
    // }, []);

    // const handleProductsClick = ()=> {
    //     <Link to="/single-product"></Link>
    // }

    // return (
       

        // <div>
        //     {data.map(item => (
        //     <Card style={{ width: '18rem' }} onClick={handleProductsClick}>
        //         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        //         <Card.Body>
        //             <Card.Title>{item.model}</Card.Title>
        //         </Card.Body>
        //         <ListGroup className="list-group-flush">
        //             <ListGroup.Item>{item.model}</ListGroup.Item>
        //             <ListGroup.Item>{item.price}</ListGroup.Item>
        //         </ListGroup>
        //     </Card>
        //     ))}
        // </div>

        // SECOND TRY

    //     <>
    //         {data.map(item => (
    //         <ProductCard />
    //         ))}
    //     </>
    // );


        // THIRD TRY
    // return (
    //     <div>
    //         <h1>Drumsticks</h1>
            /* {data.map(product => (
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    </Card>
                    <Link to={`/products/${product.id}`}></Link>
                </div>
            ))} */
            /* {drumstickData.map(product => (
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    </Card>
                    <Link to={`/products/${product.id}`}></Link>
                </div>
            ))}
                <Routes>
                    <Route
                        path="product/:id" 
                        render={({ match }) => (
                            <DrumstickDetails
                                product={data.find(
                                    (product) => String(product.id) === match.params.id
                                )}
                            />
                        )}
                    />
                </Routes>
        </div>
    );
    // } */

    

    //   FOURTH TRY

    return (
        <div className="row text-center">
            <Card className="card">
                <Card.Img variant="top" src={require(`../media/${product.image_path}`)} alt="test image" />
                <Card.Body>
                    {/* <Card.Title className="text-center">{model}</Card.Title> */}
                            {/* <Card.Title>{item.model}</Card.Title> */}
                    <ListGroup variant="flush">
                        <ListGroup.Item>Model: {model}</ListGroup.Item>
                        <ListGroup.Item>Company: {company}</ListGroup.Item>
                        <ListGroup.Item>Price: ${price}</ListGroup.Item> 
                                {/* <ListGroup.Item>
                                    <Card.Text>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo</Card.Text>
                                </ListGroup.Item>  */}
                    </ListGroup>
                </Card.Body>
                        {/* <img src={require(`../media/${product.image_path}`)} alt="test image" /> */}
            </Card>

                    {/* <img src={(`../media/${image_path}`)} alt="test image" /> */}
                    {/* <Link to={`/products/${product.id}/${product.company}/${product.price}`} key={product.id}>{product.model}</Link> */}



                    {/* <Link to={`/products/${product.id}/${product.model}/${product.company}/${product.price}/${product.image_path}`} key={product.id}>{product.model}</Link> */}



                    {/* <Link to={`/products/${product.id}/${product.model}/${product.price}/${product.image_path}`} key={product.id}>{product.model}</Link> */}
                    
        </div>
            // ))}
        // </div>
    )
}
