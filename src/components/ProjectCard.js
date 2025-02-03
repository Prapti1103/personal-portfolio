/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";
// import React,{useState} from 'react';
// const texturl1="https://github.com/Prapti1103/Dormitory_Booking"
export const ProjectCard = ({ title, description, imgUrl ,texturl}) => {
  
  // const texturl1="https://github.com/Prapti1103/Dormitory_Booking";
  const myfun = ()=> {
     window.open("https://github.com/Prapti1103/")
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx" >
          <h4>{title}</h4>
          <span>{description}</span>
         <p onClick={myfun}>{texturl}</p>
        
           </div>
      </div>
    </Col>
  )
}
