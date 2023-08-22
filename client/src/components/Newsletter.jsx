// import React from 'react'
import { useState } from "react"
import Axios from 'axios'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

export default function Newsletter() {

    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const submitReview = () => {
    Axios.post("http://localhost:3002/newsletter", {
        lastName: lastName, 
        firstName: firstName, 
        emailAddress: emailAddress
    }).then(() => {
        alert('successful insert')
    })

  }

    const resetForm = () => {
      setFirstName('');
      setLastName('');
      setEmailAddress('');
    }

  // })
  return(
    <>
      <TopNav />
        <main className="container"> 
          <h1 className="newsletter-header">Subscribe to our newsletter!</h1>
          <p className="newsletter-supporting-text">Want to stay up to date with the latest featured products and seasonal deals? You've come to the right place.</p> 
          <form className="form">
            <input className="newsletter-input" type="text" name="firstName" value={firstName} placeholder="First Name" onChange={(e)=> {
              setFirstName(e.target.value)
            }} />
            <input className="newsletter-input" type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={(e)=> {
              setLastName(e.target.value)
            }} />
            <input className="newsletter-input" type="text" name="emailAddress" value={emailAddress} placeholder="Email Address" onChange={(e)=> {
              setEmailAddress(e.target.value)
            }} />
            <button className="subscribe-button" onClick={() => {
              submitReview();
              resetForm();
            }} >Subscribe</button>
          </form>
        </main>
      <BottomNav />
    </>
  )
}

