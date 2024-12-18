"use client";

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import '../css/main.css';

const Header: React.FC = () => {
  const scrollToFirst = () => {
    const fe = document.getElementById('first');
    if(fe) {
      fe.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSecond = () => {
    const fe1 = document.getElementById('second');
    if(fe1) {
      fe1.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToThird = () => {
    const fe = document.getElementById('third');
    if(fe) {
      fe.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFourth = () => {
    const fe = document.getElementById('fourth');
    if(fe) {
      fe.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    
    <header>

      
      
    <h1 className="nav">
      <div className="container">
        <div className="nav-row">
          <button className='nav-list__item'  onClick={scrollToFirst}><a className='nav-list__link' style={{marginRight: "150px"}}>EN</a></button>
          <button className='nav-list__item' onClick={scrollToFirst}><a className='nav-list__link'>About me</a></button>
          <button className='nav-list__item' onClick={scrollToSecond}><a className='nav-list__link'>Projects</a></button>
          <button className='nav-list__item' onClick={scrollToThird}><a className='nav-list__link'>Skills</a></button>
          <button className='nav-list__item' onClick={scrollToFourth}><a className='nav-list__link'>Contacts</a></button>
          <button className='nav-list__item' ><a className='nav-list__link' style={{marginLeft: "150px"}}></a></button>
        </div>

      </div>
    </h1>

    <h2 className="header" id="first">   
    <div className="header_wrapper">
        <h1 className="header__title">
            <strong>Danil Valiev <em>  </em></strong> <br/>
            
        </h1> 
        <div className="header__text">
            <a style={{color:"#fff"} as React.CSSProperties} href="https://www.google.com/maps/place/Иннополис" target="_blank" rel="noopener noreferrer" title="Местоположение">
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> Innopolis, Russia
                </a> <br/> <br/>
            <p>An Entrepreneur who works in Software, <br/> Game Dev and Content Creation.</p>
            
        </div>

        <hr className="styled-line"></hr>

        <a href='https://drive.google.com/file/d/1PwJ-SEh6M_7wtmgvxb867SSprXoWpjux/view?usp=sharing' className='button' style={{ '--clr': '#00ffa1' } as React.CSSProperties}>
          <span>Download CV</span><i></i>
        </a>

    </div>

    <div className="header_wrapper__photo">
    <Image alt="" src="/images/headerphoto.jpg" className="home__img" width={600} height={600} style={{ objectFit: 'cover', width: '100%' }} />

    </div>


    </h2>
    
    </header>
  );
};

export default Header;
