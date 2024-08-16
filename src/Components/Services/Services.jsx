import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { Card } from '../Card/Card';
import Resume from './Agrah_Jain_Resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";

export const Services = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration: 1,type: "spring",};
  return (
    <div className='services' id='services'>
        <div className='awesome'> 
        <span style={{ color: darkMode ? "white" : "" }}> My Awesome</span>
        <span>Services </span>
        <spane>
        I specialize in delivering top-notch solutions and I build robust and scalable applications.
          <br />
          Explore my work and experience below,
           <br />
          and feel free to download my CV to learn more about my journey.
        </spane>
        <a href={Resume} download><button className="button s-button">Download CV</button></a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        <div className='cards'> 
        <motion.div initial={{ left: "25rem" }} whileInView={{ left: "14rem" }} transition={transition}>
                <Card
                    emoji={HeartEmoji}
                    heading={"Backend Developer"}
                    detail={"Java, Spring boot, Hibernate, Postman, Swagger"}
                />
             </motion.div>

             <motion.div initial={{ left: "-11rem", top: "12rem" }} whileInView={{ left: "-4rem" }} transition={transition}>
                <Card
                    emoji={Glasses}
                    heading={"FrontEnd Developer"}
                    detail={"HTML, CSS, Javascript, React.js, Next.js"}
                />

                </motion.div>

                <motion.div initial={{ top: "19rem", left: "25rem" }} whileInView={{ left: "12rem" }} transition={transition}>
                <Card
                    emoji={Humble}
                    heading={"Problem Solving"}
                    detail={"Leetcode, Codechef, Codeforces"}
                />

                </motion.div>
            <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>

    </div>
  )
}
