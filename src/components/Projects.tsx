"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects: React.FC = () => {
  const showMessage = () => {
    alert("По требованию заказчика проект закрыт для публичного доступа. \n\nAt the request of the customer, the project is closed to public access.");
  };
  return (
    
    <h2 id="second">
      <main className="section">
        <div className="container">
          <h2 className="title1">Projects</h2>
          <ul className="projects">


            <li className="project">
              <Image alt="" src="/images/electgen.jpg" className="project__img" width={500} height={500} style={{ objectFit: 'cover', width: '100%' }} />
              
              <h4 className="project__title">ElectGen</h4>

              <h5 className="project__description">
                Automatic placement of students from different courses into
                their chosen summer electives based on their GPA and personal
                priorities
              </h5>
              <a href='https://gitlab.pg.innopolis.university/d.tolmeneva/elective-generator' className='button' style={{ '--clr': '#ffd600', alignSelf: 'center' } as React.CSSProperties}>
                <span>Available now</span><i></i>
              </a>
            </li>

            <li className="project">
              <Image alt="" src="/images/CM.png" className="project__img" width={500} height={500} style={{ objectFit: 'cover', width: '100%' }} />
              
              <h4 className="project__title">Chess Master</h4>

              <h5 className="project__description">
              Discord bot that allows you to simulate a chess session. Based on Stockfish - the Free Chess Engine with UCI support.
              </h5>
              <a href='https://github.com/dorley174/Chess-Master' className='button' style={{ '--clr': '#ff0047', alignSelf: 'center' } as React.CSSProperties}>
                <span>Available now</span><i></i>
              </a>
            </li>

            <li className="project">
              <Image alt="" src="/images/MT.jpg" className="project__img" width={500} height={500} style={{ objectFit: 'cover', width: '100%' }} />
              
              <h4 className="project__title">MeeTime</h4>

              <h5 className="project__description">
              A convenient website that allows the team to choose a convenient time for calls.
              </h5>
              <a onClick={showMessage} className='button' style={{ '--clr': '#39ff14', alignSelf: 'center' } as React.CSSProperties}>
                <span>private access</span><i></i>
              </a>
            </li>

            <li className="project">
              <Image alt="" src="/images/GITCGDT.jpg" className="project__img" width={500} height={500} style={{ objectFit: 'cover', width: '100%' }}/>
              <h4 className="project__title">Genshin Impact TCG DeckTracker</h4>
              <h5 className="project__description">
                An extension that allows you to track and save data from matches
                played in the Cats Tail tavern. The matches will also develop a
                winning strategy.
              </h5>
              
              <a href='https://github.com/dorley174/GITCGDT' className='button' style={{ '--clr': '#fe00ff', alignSelf: 'center' } as React.CSSProperties}>
                <span>soon</span><i></i>
              </a>
            </li>

            {/* <li className="project">
              <Image alt="" src="/images/MG.jpg" className="project__img" width={500} height={500} style={{ objectFit: 'cover', width: '100%' }} />
              <h4 className="project__title">Mind Games</h4>
              <h5 className="project__description">
                An indie game with different tasks and solutions in the same
                location, based on human ingenuity
              </h5>
              <a className='button' style={{ '--clr': '#39ff14', alignSelf: 'center' } as React.CSSProperties}>
                <span>Soon</span><i></i>
              </a>
            </li> */}


          </ul>
        </div>
      </main>
      
    </h2>
  );
};

export default Projects;
