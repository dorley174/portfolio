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

/*const projects = [
  
<li style={{justifyContent: 'center'}}>
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
        </li>,

        <li>
          <Image alt="" src="/images/CM.png" className="project__img" width={500} height={500} style={{ objectFit: 'cover', width: '100%' }} />
          
          <h4 className="project__title">Chess Master</h4>

          <h5 className="project__description">
          Discord bot that allows you to simulate a chess session. Based on Stockfish - the Free Chess Engine with UCI support.
          </h5>
          <a href='https://github.com/dorley174/Chess-Master' className='button' style={{ '--clr': '#ff0047', alignSelf: 'center' } as React.CSSProperties}>
            <span>Available now</span><i></i>
          </a>
        </li>,

        <li>
          <Image alt="" src="/images/MT.jpg" className="project__img" width={500} height={500} style={{ objectFit: 'cover', width: '100%' }} />
          
          <h4 className="project__title">MeeTime</h4>

          <h5 className="project__description">
          A convenient website that allows the team to choose a convenient time for calls.
          </h5>
          <a onClick={showMessage} className='button' style={{ '--clr': '#39ff14', alignSelf: 'center' } as React.CSSProperties}>
            <span>private access</span><i></i>
          </a>
        </li>,

        <li>
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
        </li>,
  // Добавьте другие проекты
];*/

/* const projects = [
  <li className='project'>
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
      Automatic placement of students from different courses into their chosen
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

  <li className='project'>
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
      Discord bot that allows you to simulate a chess session. Based on
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

  <li className='project'>
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
      onClick={() => alert("Private access only")}
      className="button"
      style={{ "--clr": "#39ff14" } as React.CSSProperties}
    >
      <span>private access</span>
      <i></i>
    </a>
  </li>,

  <li className='project'>
    <Image
      alt=""
      src="/images/GITCGDT.jpg"
      className="project__img"
      width={500}
      height={500}
      style={{ objectFit: "cover", width: "100%" }}
    />
    <h4 className="project__title">Genshin Impact TCG DeckTracker</h4>
    <h5 className="project__description">
      An extension that allows you to track and save data from matches played
      in the Cats Tail tavern. The matches will also develop a winning strategy.
    </h5>
    <a
      href="https://github.com/dorley174/GITCGDT"
      className="button"
      style={{ "--clr": "#fe00ff" } as React.CSSProperties}
    >
      <span>soon</span>
      <i></i>
    </a>
  </li>,
];*/

const projects = [
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
      Automatic placement of students from different courses into their chosen
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
      Discord bot that allows you to simulate a chess session. Based on
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
      onClick={() => alert("Private access only")}
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
      <Header />
      
      <Slider projects={projects} />
      <Footer />
    </div>
  );
};

export default App;
