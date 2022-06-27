import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Intagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import Profile from '../../img/profile.png';

const Intro = () => {
    return (
    <div className="intro">
        <div className='i-left'>
            <div className='i-name'>
                <span>Hi! I am</span>
                <span>HanBin Choi</span>
                <span>주요 내용</span>
            </div>

            <button className='button i-button'>Hire me</button>
            <div className='i-icons'>
                <a href='https://github.com/kong-hana01'>
                    <img src= {Github} alt = "" />
                </a>
                {/* 링크 처리 필요 */}
                <img src= {Linkedin} alt = "" /> 
                <img src= {Intagram} alt = "" />
            </div>
        </div>
        <div className='i-right'>
            <img src= {Vector1} alt = "" /> 
            <img src= {Vector2} alt = "" />
            <img src= {Profile} alt = "" /> 
            
        </div>
    </div>
            )
}

export default Intro