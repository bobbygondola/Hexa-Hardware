import React from 'react'
import heroImg from '../assets/hax.jpg'

const Hero = () => {
    return (
        <div>
            <div className="heroContainer" style={{width: "100%", margin: "0 auto"}}>
            <img src={heroImg} alt="Technology" style={{maxWidth: "100%", height: "auto"}} />
            </div>
        </div>
    )
}

export default Hero
