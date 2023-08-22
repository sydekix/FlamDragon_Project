import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Spin as Hamburger } from 'hamburger-react';

export default function TopNav() {
    const [isOpen, setOpen] = useState(false)
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-sm row d-flex top-nav justify-content-between fixed-top">
                <div className="col-md-4 nav-left text-start">
                    <ul>
                        <li className="nav-link nav-section nav-left store-name"><Link to="/" className="text-decoration-none">FLAM DRAGON</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 nav-right justify-content-between text-end navbar-expand{-sm|-md|-lg|-xl}">
                    <ul>
                        <li className="nav-link nav-link-right nav-section"><Link to="/about" className="text-decoration-none">ABOUT</Link></li>
                        <li className="nav-link nav-link-right nav-section nav-right"><Link to="/products" className="text-decoration-none">PRODUCTS</Link></li>
                        <li className="nav-link nav-link-right nav-section nav-right"><Link to="/newsletter" className="text-decoration-none">NEWSLETTER</Link></li>
                        {/* <li></li> */}
                    </ul>
                    <style jsx> {`
                        @media (max-width: 980px){
                            .nav-right {
                                display: ${isOpen ? 'inline-flex' : 'none'};
                            }
                            div.hamburger-react {
                                 
                                  padding: 0;
                                  text-align: center;
                                  display: inline-flex;
                                  align-items: justify-content-end;
                            }
                        }
                        @media (max-width: 766px){
                            div.hamburger-react {
                                align-items: center;
                                margin-left: 20px;
                            }
                        }                        
                    `}
                    </style> 
                </div>
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} rounded distance="lg" color="var(--accent-color)" direction="left" />
            </nav>
        </div>
    )
}