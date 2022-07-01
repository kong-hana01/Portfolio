import React from 'react'
import './Achievement.css'

const Achievement = ({circle, txt1, txt2}) => {
  return (
    <div className="achievement">
        <div className="circle">{circle}</div>
        <span>{txt1}</span>
        <span>{txt2}</span>
    </div>
  )
}

export default Achievement