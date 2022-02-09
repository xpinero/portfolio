import React from 'react'
import './intro.css'

const intro = () => {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='intro-intro'>Hello, my name is</h2>
          <h1 className='intro-name'>Xaver (Zavar)</h1>
          <div className='intro-title'>
            <div className='intro-title-wrapper'>
              <div className='intro-title-item'>Web Developer</div>
              <div className='intro-title-item'>UI/UX Designer</div>
              <div className='intro-title-item'>Photographer</div>
              <div className='intro-title-item'>I.T. Specialist</div>
              <div className='intro-title-item'>Mechanic</div>
            </div>
          </div>
        </div>
      </div>
      <div className='intro-right'>right</div>
    </div>
  )
}

export default intro