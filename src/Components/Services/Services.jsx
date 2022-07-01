import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card'

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className='awesome'>
            <span>My Awesome</span>
            <span>services</span>
            <span>내용 적기</span>

            {/* resume는 a태그로 감싸자*/}
            <button className='button s-button'>Download CV</button>
            <div className='blur s-blurl' style= {{background: "#ABF1GG94"}}></div>
        </div>
    
        {/* right side */}
        <div className='cards'>
            <div style={{left: '14rem'}}>
              <Card
                emoji = {HeartEmoji}
                heading = {'Developer'}
                detail = {'stack'}
              />
            </div>

            {/* Second card */}
            <div style={{top : '10rem', left: '-4rem'}}>
              <Card
                emoji = {Glasses}
                heading = {'프로젝트?'}
                detail = {'stack'}
              />
            </div>

            {/* Third card */}
            <div style={{top: '19rem', left: '11rem'}}>
              <Card
                emoji = {Humble}
                heading = {'그 외 경험'}
                detail = {'stack'}
              />
            </div>
        </div>
    </div>
  )
}

export default Services