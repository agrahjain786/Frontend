import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png';
import { FloatingDiv } from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'
import { Link } from "react-scroll";

export const Intro = () => {

  const transition = {duration: 2, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style={{ color: darkMode ? "white" : "" }}>Hey! I am</span>
                <span>Agrah Jain</span>
                <span>
                    FullStack Developer with high level of experience in web designing and development, productioning the Quality work
                </span>
            </div>
            <Link to="contact" smooth={true} spy={true}>
                <button className="button i-button">Hire me</button>
            </Link>
            <div className='i-icons'>

              <a href='https://github.com/agrahjain786'><img src={Github} alt="" /></a>
              <a href='https://www.linkedin.com/in/agrah-jain-326409252/'><img src={Linkedin} alt="" /></a>
              <a href='https://www.instagram.com/aagrah.jain/'><img src={Instagram} alt="" /></a>

            </div>

        </div>
        <div className='i-right'>
          <img src={Vector1} alt=''/>
          <img src={Vector2} alt=''/>
          <img src={boy} alt=''/>
          <motion.img initial={{ left: "-36%" }} whileInView={{ left: "-24%" }} transition={transition} src={glassesimoji} alt="" />
          <motion.div initial={{ top: "-4%", left: "74%" }} whileInView={{ left: "68%" }} transition={transition} className="floating-div">
            <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
          </motion.div>
          <motion.div initial={{ left: "9rem", top: "18rem" }} whileInView={{ left: "0rem" }} transition={transition} className="floating-div">
            <FloatingDiv image={thumbup} txt1='Competetive' txt2='Programmer'/>
          </motion.div>

          <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
          <div className="blur" style={{ background: "#C1F5FF",top: "17rem",width: "21rem", height: "11rem", left: "-9rem"}}></div>
        </div>
    </div>
  )
}