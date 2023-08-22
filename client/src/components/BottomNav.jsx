import React from 'react'

export default function BottomNav() {
    return(
        <>
        <footer className="container footer">
            <div className="row footer justify-content-between fixed-bottom">
                <div className="col-md-4 col-sm-6 footer-content d-flex justify-content-center align-items-center text-center">
                    <p className="contact nav-link"><a href="mailto:sydekix@gmail.com">Contact Us</a></p>
                </div>
                <div className="col-md-4 col-sm-6 footer-content d-flex justify-content-center align-items-center text-center">
                    <p className="colophon">&copy; 2023 by sydekix industries</p>
                </div>
            </div>
        </footer>
        </>
    )
}