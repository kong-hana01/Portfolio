import React from "react";
import Achievement from '../Achievement/Achievement'
import './Experience.css'
const Experience = () => {
  return (
    <div className="experience">
      <Achievement circle = '5+' txt1 = 'years' txt2 = 'Experience' />
      <Achievement circle = '5+' txt1 = 'completed' txt2 = 'Projects' />
      <Achievement circle = '5+' txt1 = 'companies' txt2 = 'word' />
    </div>
  );
};

export default Experience;
