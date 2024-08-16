import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';

export const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience'>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>1+</div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>15+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className='achievement'>
            <div className='circle' style={{color: darkMode?'var(--orange)':''}}>3+</div>
            <span>Companies</span>
            <span>Work</span>
        </div>
    </div>
  )
}
