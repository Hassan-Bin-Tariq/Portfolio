import { Typography } from '@mui/material'
import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='about'>
        <div className="aboutContainer">
            <Typography> THis is  a sample quote</Typography>
        </div>
        <div className="aboutContainer2">
            <div>
                <img src = "https://avatars.githubusercontent.com/u/58106042?s=400&u=0fabc16ef2f4eab9827404b4e96ec901ec99c719&v=4"
                 alt="hassan"
                 className='aboutAvatar'
                 />
                <Typography variant="h4" style={{margin:"1vmax 0",color:"black"}}>Hassan</Typography> 
                <Typography >Full Stack Developer</Typography> 
                <Typography style={{margin:"1vmax 0"}}>I am a student</Typography> 
            </div>
            <div>
                <Typography style={{
                    wordSpacing: "5px",
                    lineHeight: "50px",
                    letterSpacing: "5px",
                    textAlign: "right",
                    }}
                >
                    This is description Lorem ipsum,
                     dolor sit amet consectetur adipisicing elit. 
                     Magni similique in harum blanditiis amet voluptates vitae,
                     esse sit animi, nobis cum.
                </Typography>
            </div>
        </div>
    </div>
  )
}

export default About