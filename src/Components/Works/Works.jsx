import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import SecCircle from '../SecCircle/SecCircle'

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
        <div className='work-right'>
            <div className='work-mainCircle'>
                <SecCircle secCircle = {Upwork}/>
                <SecCircle secCircle = {Fiverr}/>
                <SecCircle secCircle = {Amazon}/>
                <SecCircle secCircle = {Shopify}/>
                <SecCircle secCircle = {Facebook}/>
            </div>
        {/* background Circles */}
        <div className='work-backCircle blueCircle'></div>
        <div className='work-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}

export default Works