import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Intagram from '../../img/instagram.png';

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
        <div className='i-right'>rrrr</div>
    </div>
            )
}

export default Intro