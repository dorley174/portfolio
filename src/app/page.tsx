'use client';
import Image from 'next/image';
import '../css/main.css';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

const projects = [
  <li key="innohassle" className="project">
    <Image
      alt=""
      src="/images/innohassle.png"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: 'cover', width: '100%' }}
    />
    <h4 className="project__title">InnoHassle</h4>
    <h5 className="project__description">
      An ecosystem of Innopolis University students. A huge number <br /> of
      integrations with student options - schedules of classes and sports
      <br />
      sections, calendars, timers and much more.
    </h5>
    <a
      href="https://innohassle.ru"
      className="button"
      style={{ '--clr': '#9fee00' } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,
  <li key="cluster" className="project">
    <Image
      alt=""
      src="/images/MoodleCluster.jpg"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: 'cover', width: '100%' }}
    />
    <h4 className="project__title">Moodle Cluster</h4>
    <h5 className="project__description">
      Linux-based analyzing system of the most popular stydying <br />
      website - Moodle - which collects statistics of any site load.
      <br />
      It is based on the interaction between the collection
      <br /> of information using Node Exporter and Prometheus, <br />
      as well as their visualization using Grafana.
    </h5>
    <a
      href="https://github.com/dorley174/MoodleCluster"
      className="button"
      style={{ '--clr': '#9fee00' } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,
  <li key="electgen" className="project">
    <Image
      alt=""
      src="/images/electgen.jpg"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: 'cover', width: '100%' }}
    />
    <h4 className="project__title">ElectGen</h4>
    <h5 className="project__description">
      Automatic placement of students from different courses into their chosen{' '}
      <br />
      summer electives based on their GPA and personal priorities
    </h5>
    <a
      href="https://gitlab.pg.innopolis.university/d.tolmeneva/elective-generator"
      className="button"
      style={{ '--clr': '#9fee00' } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,

  <li key="dnp" className="project">
    <Image
      alt=""
      src="/images/Dnp.jpg"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: 'cover', width: '100%' }}
    />
    <h4 className="project__title">
      Distributed Text Mining & <br />
      Sentiment Analysis
    </h4>
    <h5 className="project__description">
      The command project, which implements a distributed system for <br />
      processing and analyzing texts with a focus on tonality analysis.
    </h5>
    <a
      href="https://github.com/oELYAo/DNP_project"
      className="button"
      style={{ '--clr': '#9fee00' } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,
  <li key="psychoai" className="project">
    <Image
      alt=""
      src="/images/ai.jpg"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: 'cover', width: '100%' }}
    />
    <h4 className="project__title">PsychoAI Chatbot</h4>
    <h5 className="project__description">
      An AI assistent that can help you with any problem you say. <br /> Uses
      YandexGPT and combines with special prompt-building system.
    </h5>
    <a
      href="https://github.com/dorley174/ai_chatbot"
      className="button"
      style={{ '--clr': '#7e07a9' } as React.CSSProperties}
    >
      <span>on beta testing</span>
      <i></i>
    </a>
  </li>,
  <li key="chessmaster" className="project">
    <Image
      alt=""
      src="/images/CM.png"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: 'cover', width: '100%' }}
    />
    <h4 className="project__title">Chess Master</h4>
    <h5 className="project__description">
      Discord bot that allows you to simulate a chess session. <br /> Based on
      Stockfish - the Free Chess Engine with UCI support.
    </h5>
    <a
      href="https://github.com/dorley174/Chess-Master"
      className="button"
      style={{ '--clr': '#9fee00' } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,

  <li key="solutions" className="project">
    <Image
      alt=""
      src="/images/contests.png"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: 'cover', width: '100%' }}
    />
    <h4 className="project__title">Contest solutions</h4>
    <h5 className="project__description">
      My solutions to various tasks collected from all over the Internet. <br />{' '}
      Here you can find solutions to both Olympiad problems <br /> and test
      tasks from interviews and various courses taken.
    </h5>
    <a
      href="https://github.com/dorley174/"
      className="button"
      style={{ '--clr': '#ffd600' } as React.CSSProperties}
    >
      <span>See my GitHub</span>
      <i></i>
    </a>
  </li>,
  <li key="meetime" className="project">
    <Image
      alt=""
      src="/images/MT.jpg"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: 'cover', width: '100%' }}
    />
    <h4 className="project__title">MeeTime</h4>
    <h5 className="project__description">
      A convenient website that allows the team to choose a convenient time for
      calls.
    </h5>
    <a
      onClick={() =>
        alert(
          'По требованию заказчика, этот проект сейчас закрыт для публичного доступа. \n\nAt the request of the customer, it is currently closed to public access.'
        )
      }
      className="button"
      style={{ '--clr': '#ff0000' } as React.CSSProperties}
    >
      <span>private access</span>
      <i></i>
    </a>
  </li>,
];

const App: React.FC = () => {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=network_intelligence"
      />
      <Header />
      <Skills />
      <Slider projects={projects} />
      <Footer />
    </div>
  );
};

export default App;
