import React from 'react';
import Image from 'next/image';

const Skills: React.FC = () => {
  return (
    <h1 id="third" className="header3">
      <main className="section">
        <div className="container">
          <h2 className="title2">Skills</h2>

          <div className="page3-container">
            <div className="list-container">
              <ul className="skills">
                <h3 className="skill">
                  <strong>
                    <em> Programming language:</em>{' '}
                  </strong>{' '}
                  <br />
                  C++ <br />
                  Java <br />
                  Python{' '}
                </h3>
                <h3 className="skill">
                  {' '}
                  <strong>
                    <em>Language:</em>
                  </strong>{' '}
                  <br />
                  Russian <br />
                  English <br />
                  German
                </h3>
                <h3 className="skill">
                  {' '}
                  <strong>
                    <em>Education:</em>
                  </strong>{' '}
                  <br /> Liceum №148, Chelyabinsk, 2012-2016 <br /> Liceum
                  №97, Chelyabinsk, 2017-2023 <br /> Innopolis University,
                  Innopolis, 2023 - now{' '}
                </h3>
                <h3 className="skill">
                  {' '}
                  <strong>
                    <em>Hobbies:</em>
                  </strong>{' '}
                  <br />
                  Programming <br />
                  Design <br />
                  Chess <br />
                  Speedcubing{' '}
                </h3>
              </ul>
            </div>
            <div className="photo-container">
              <div className="container">
              <Image alt="" src="/images/photo.jpg"  width={500} height={500} style={{ objectFit: 'cover', width: '100%', borderRadius: '10px'}} />
              </div>
              <div className="photo-text">
                {' '}
                <em>
                  <strong>«With great power comes great responsibility»</strong>{' '}
                </em>{' '}
                <br /> I can translate as <br />{' '}
                <em>
                  <strong>«With great photo-slider comes overdue deadline»</strong>{' '}
                </em>
              </div>
            </div>
          </div>
        </div>
      </main>
    </h1>
  );
};

export default Skills;
