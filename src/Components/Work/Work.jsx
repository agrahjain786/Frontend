import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";


export const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='work' id="works">
      <div className="w-left">
      <div className='awesome'> 
        <span style={{ color: darkMode ? "white" : "" }}> Works For all these</span>
        <span>Brands and Clients</span>
        <spane>
        I've had the privilege of working with a diverse range of brands and clients, including
          <br />
          1. Monocept - Software Enginner Intern
          <br />
          2. Remotebase - Software Engineer
          <br />
          3. ShapeMySkills - Java Developer Intern
        </spane>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        </div>

        <div className='w-right'>
        <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 3.5, type: "spring" }} className="w-mainCircle">
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>{" "}
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
            </motion.div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}
