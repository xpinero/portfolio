import React from 'react'
import './intro.css'
import Me from '../../img/Me-bg.png'
import { BsArrowDownUp } from "react-icons/bs";

const intro = () => {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='intro-intro'>Hello, my name is</h2>
          <h1 className='intro-name'>Xaver Pinero</h1>
          <div className='intro-title'>
            <div className='intro-title-wrapper'>
              <div className='intro-title-item'>Web Developer</div>
              <div className='intro-title-item'>UI/UX Designer</div>
              <div className='intro-title-item'>Longboarder</div>
              <div className='intro-title-item'>I.T. Specialist</div>
              <div className='intro-title-item'>Mechanic</div>
            </div>
          </div>
          <p className='intro-description'>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and online stores.
          </p>
        </div>
        <BsArrowDownUp className='intro-scroll'/>
      </div>
      <div className='intro-right'>
        <div className='intro-background'></div>
        <img src={Me} alt='' className='intro-image' />
      </div>
    </div>
  )
}

export default intro
