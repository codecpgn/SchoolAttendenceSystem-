import React from 'react'
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div>
      <section className=' mb-32'>
      <div className='cls'>
        <div className='' style={{"height":"590px" ,"text-align":"center"
        }}>
          <h1>MLMS Platform <br />Non profit <br /> transparent business</h1>
          <p className='text-sm'>
          Bharatpur-11, Muktinagar Chowk,
          Chitwan, Nepal, 44200
          </p>
        </div>
        <div className='max-w-sm '>
          <img src="/img/Logo.jpg" alt="loading" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default HeroSection
