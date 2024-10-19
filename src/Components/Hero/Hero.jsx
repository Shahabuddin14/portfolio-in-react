import React from 'react'
import './Hero.css'
import profile_img from '../../assets/hero.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Shahabuddin,</span> fullstack developer based in BD</h1>
        <p>I am a fullstack developer from Dhaka, Bangladesh with 4 years of experience in multiple projects and companies.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero