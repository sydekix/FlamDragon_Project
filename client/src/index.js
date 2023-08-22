import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// npm start for client 
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
        <div className="container-fluid index-container">
            <App />
        </div>
    </BrowserRouter>
    </>
);
