"use client";
import Image from "next/image";
import "../css/main.css";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const projects = [
  <li key="innohassle" className="project">
    <Image
      alt=""
      src="/assets/innohassle.png"
      className="project__img"
      width={400}
      height={400}
      
    />
    <h4 className="project__title">InnoHassle</h4>
    <h5 className="project__description">
      An ecosystem of Innopolis University students. A huge number of
      integrations with student options - schedules of classes and sports
      
      sections, calendars, timers and much more.
    </h5>
    <a
      href="https://innohassle.ru"
      className="button"
      style={{ "--clr": "#9fee00" } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,

  <li key="signgame" className="project">
    <img
      alt=""
      src="/assets/MainMenu.gif"
      className="project__img"
      width={400}
      height={400}
      
    />
    <h4 className="project__title">Sign Game <span className="project__badge">NEW</span></h4>
    <h5 className="project__description">
      A 2D Unity platformer about a mysterious wizard, seeking to defeat{" "} all evil in his world by his power - magical runes. 
      
    </h5>
    <a
      href="https://github.com/IU-Capstone-Project-2025/SignGame/tree/main"
      className="button"
      style={{ "--clr": "#9fee00" } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,

  <li key="cluster" className="project">
    <Image
      alt=""
      src="/assets/MoodleCluster.jpg"
      className="project__img"
      width={400}
      height={400}
      
    />
    <h4 className="project__title">Moodle Cluster</h4>
    <h5 className="project__description">
      Linux-based analyzing system of the most popular stydying 
      website - Moodle - which collects statistics of any site load.
      
      
    </h5>
    <a
      href="https://github.com/dorley174/MoodleCluster"
      className="button"
      style={{ "--clr": "#9fee00" } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,

  <li key="electgen" className="project">
    <Image
      alt=""
      src="/assets/electgen.jpg"
      className="project__img"
      width={400}
      height={400}
      
    />
    <h4 className="project__title">Elective Generator</h4>
    <h5 className="project__description">
      Automatic placement of students from different courses into their chosen{" "}
      
      summer electives based on their GPA and personal priorities
    </h5>
    <a
      href="https://gitlab.pg.innopolis.university/d.tolmeneva/elective-generator"
      className="button"
      style={{ "--clr": "#9fee00" } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,

  <li key="dnp" className="project">
    <Image
      alt=""
      src="/assets/Dnp.jpg"
      className="project__img"
      width={400}
      height={400}
      
    />
    <h4 className="project__title">
      Distributed Text Mining & 
      Sentiment Analysis
    </h4>
    <h5 className="project__description">
      An utility which implements a distributed system for 
      processing and analyzing texts with a focus on tonality analysis.
    </h5>
    <a
      href="https://github.com/oELYAo/DNP_project"
      className="button"
      style={{ "--clr": "#9fee00" } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,
  <li key="psychoai" className="project">
    <Image
      alt=""
      src="/assets/ai.jpg"
      className="project__img"
      width={400}
      height={400}
      
    />
    <h4 className="project__title">PsychoAI Chatbot</h4>
    <h5 className="project__description">
      An AI assistent that can help you with any problem you say.  Uses
      YandexGPT and combines with special prompt-building system.
    </h5>
    <a
      href="https://github.com/dorley174/ai_chatbot"
      className="button"
      style={{ "--clr": "#7e07a9" } as React.CSSProperties}
    >
      <span>on beta testing</span>
      <i></i>
    </a>
  </li>,
  <li key="chessmaster" className="project">
    <Image
      alt=""
      src="/assets/CM.png"
      className="project__img"
      width={400}
      height={400}
      
    />
    <h4 className="project__title">Chess Master</h4>
    <h5 className="project__description">
      A simple Discord bot that allows you to simulate a chess session. {" "}
      Based on Stockfish - the Free Chess Engine with UCI support.
    </h5>
    <a
      href="https://github.com/dorley174/Chess-Master"
      className="button"
      style={{ "--clr": "#9fee00" } as React.CSSProperties}
    >
      <span>Available now</span>
      <i></i>
    </a>
  </li>,

  <li key="GameOfLife" className="project">
    <Image
      alt=""
      src="/assets/gol.gif"
      className="project__img"
      width={400}
      height={400}
      
    />
    <h4 className="project__title">Game of Life</h4>
    <h5 className="project__description">
      A cellular machine that implements the same name
       about the life of the created colonies for the implementation
      
      of the Turing machine. 
    </h5>
    <a
      href="https://github.com/dorley174/Game-of-life"
      className="button"
      style={{ "--clr": "#7e07a9" } as React.CSSProperties}
    >
      <span>on BETA testing</span>
      <i></i>
    </a>
  </li>,

  <li key="solutions" className="project">
    <Image
      alt=""
      src="/assets/contests.png"
      className="project__img"
      width={400}
      height={400}
      
    />
    <h4 className="project__title">Contest solutions</h4>
    <h5 className="project__description">
      My solutions to various tasks collected from all over the Internet. {" "}
      Here you can find solutions to both Olympiad problems  and test
      tasks from interviews and various courses taken.
    </h5>
    <a
      href="https://github.com/dorley174/"
      className="button"
      style={{ "--clr": "#ffd600" } as React.CSSProperties}
    >
      <span>See my GitHub</span>
      <i></i>
    </a>
  </li>,
  <li key="meetime" className="project">
    <Image
      alt=""
      src="/assets/MT.jpg"
      className="project__img"
      width={400}
      height={400}
      
    />
    <h4 className="project__title">MeeTime</h4>
    <h5 className="project__description">
      A convenient website that allows the team to choose a convenient time for
      calls.
    </h5>
    <a
      onClick={() =>
        alert(
          "По требованию заказчика, этот проект сейчас закрыт для публичного доступа. \n\nAt the request of the customer, it is currently closed to public access.",
        )
      }
      className="button"
      style={{ "--clr": "#ff0000" } as React.CSSProperties}
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
      <link rel="icon" href="/favicon.ico" />
      <Header />
      <Skills />
      <Slider projects={projects} />
      <Footer />
    </div>
  );
};

export default App;
