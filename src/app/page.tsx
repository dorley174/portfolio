'use client';
import Image from 'next/image';
import '../css/main.css';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Slider from '../components/Slider copy';
const showMessage = () => {
  alert("По требованию заказчика проект закрыт для публичного доступа. \n\nAt the request of the customer, the project is closed to public access.");
};

const projects = [
  <li key="innohassle" className='project'>
    <Image
      alt=""
      src="/images/innohassle.png"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: "cover", width: "100%" }}
    />
    <h4 className="project__title">InnoHassle</h4>
    <h5 className="project__description">
    A huge ecosystem of Innopolis University students. <br /> A huge number of integrations with student options - <br /> schedules of classes and sports sections, calendars, timers and much more.
    </h5>
    <a
      href="https://innohassle.ru"
      className="button"
      style={{ "--clr": "#ffd600" } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,
  <li key="electgen" className='project'>
    <Image
      alt=""
      src="/images/electgen.jpg"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: "cover", width: "100%" }}
    />
    <h4 className="project__title">ElectGen</h4>
    <h5 className="project__description">
      Automatic placement of students from different courses into their chosen <br />
      summer electives based on their GPA and personal priorities
    </h5>
    <a
      href="https://gitlab.pg.innopolis.university/d.tolmeneva/elective-generator"
      className="button"
      style={{ "--clr": "#ffd600" } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,
  <li key="chessmaster" className='project'>
    <Image
      alt=""
      src="/images/CM.png"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: "cover", width: "100%" }}
    />
    <h4 className="project__title">Chess Master</h4>
    <h5 className="project__description">
      Discord bot that allows you to simulate a chess session. <br /> Based on
      Stockfish - the Free Chess Engine with UCI support.
    </h5>
    <a
      href="https://github.com/dorley174/Chess-Master"
      className="button"
      style={{ "--clr": "#ff0047" } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,
  <li key="meetime" className='project'>
    <Image
      alt=""
      src="/images/MT.jpg"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: "cover", width: "100%" }}
    />
    <h4 className="project__title">MeeTime</h4>
    <h5 className="project__description">
      A convenient website that allows the team to choose a convenient time for
      calls.
    </h5>
    <a
      onClick={() => alert("At the request of the customer, it is currently closed to public access.")}
      className="button"
      style={{ "--clr": "#39ff14" } as React.CSSProperties}
    >
      <span>private access</span>
      <i></i>
    </a>
  </li>,
];

const App: React.FC = () => {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=network_intelligence" />
      <Header />
      <Skills />
      <Slider projects={projects} />
      <Footer />
    </div>
  );
};

export default App;
