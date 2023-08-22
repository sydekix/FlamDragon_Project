import React from 'react';

export default function Reviews() {
    return(
        <>
            <div className="row justify-content-around">
                <div className="col-md-6 review review-block text-center">
                    <div className="review-announcement">
                        <h1>A REVIEW!</h1>
                    </div>
                    <div className="slide-from-left">
                        <div className="review-chunk">
                            <span className="review-quote-left"><svg className="icon"><use xlinkHref="#icon-quotes-left"></use></svg></span>
                            <p className="review-text">I love being able to get the gear I need </p>
                        </div>
                        <div className="review-chunk">
                            <p className="review-text">while supporting local shops!</p>
                            <span className="review-quote-right"><svg className="icon"><use xlinkHref="#icon-quotes-right"></use></svg></span>
                        </div>
                    </div>
                    <div className="slide-from-right">
                        <p>- Gill McGillicuddy</p>
                    </div>           
                </div>
            </div> 
        </>
    )
}

