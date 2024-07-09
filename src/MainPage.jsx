import Headroom from 'react-headroom';
import OffcanvasPro from './component/Offcanvas';
import About from './component/About';
import Skill from './component/Skill';
import Project from './component/Project';
import Experience from './component/Experience';
import Email from './component/Email';

function MainPage() {

  return (
    <>
      <section className="nav-top" id="nav-top">
        <Headroom>
          <OffcanvasPro/>
        </Headroom>
      </section>

      <section className="about full-screen" id="about">
        <About/>
      </section>

      <section className="skill py-5" id="skill">
        <Skill/>
      </section>

      <section className="project py-5" id="project">
        <Project/>
      </section>

      <section className="experience py-5" id="experience">
        <Experience/>
      </section>

      <section className="contact py-5" id="contact">
        <Email/>
      </section>
    </>
  )
}

export default MainPage;
