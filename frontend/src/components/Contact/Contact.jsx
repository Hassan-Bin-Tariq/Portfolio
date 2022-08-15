import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import React from 'react'
import "./Contact.css"

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  return (
    <div className='contact'>
        <div className="contactRightBar"></div>
        <div className="contactContainer">
            <form className="contactContainerForm" onSubmit={contactFormHandler}>
                <Typography variant="h4">Cotact Us</Typography>
                <input 
                  type="text" 
                  placeholder='Name' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                <input 
                    type="email" 
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                 />
                <textarea 
                    placeholder='Message' 
                    cols="30" 
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <Button variant="contained" type="submit">
                    Send
                </Button>
            </form>
        </div>
    </div>
  )
}

export default Contact