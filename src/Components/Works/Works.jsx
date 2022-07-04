import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/Fiverr.png"
import Amazon from "../../img/Amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

const Works = () => {
  return (
    <div className='works'>
        {/* left side */}
        <div className='awesome'>
            <span>Works for All these</span>
            <span>주요 내용</span>
            <span>주요 내용
                <br /> 주요 내용
                <br /> 주요 내용
                <br /> 주요 내용
                
            </span>

            {/* resume는 a태그로 감싸자*/}
            <button className='button s-button'>Download CV</button>
            <div className='blur s-blurl' style= {{background: "#ABF1GG94"}}></div>
        </div>
    
        {/* right side */}
        <div className='right-side'>
            
        </div>
    </div>
  )
}

export default Works