import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactSVG } from 'react-svg';
import githubImg from '../assets/github-fill.svg';
import portfolio from "../assets/portfolio/marong_cv.zip";

function About() {

    const aboutImg = new URL('../assets/joy.png', import.meta.url).href

  return (
    <>
      <Container>
        <Row md={4}>
          <Col lg={7} md={12} xs={12} className="custom-text">
            <div className="about-text">
              <h1 className="animated animated-text">
                <span className="mr-2 animated-info">
                  HELLO,I AM <span className="animated-item">MA RONG</span>.
                </span>
              </h1>
              <h2 className="animated animated-text">
                <span className="mr-2 animated-info">I AM FRONTEND</span>
                <br />
                <span className="mr-2 animated-career">DEVELOPER.</span>
              </h2>

              <p className="animated">
                I have deep passion for creating user-friendly and visually
                appealing websites. In my freetime, I enjoy exploring new
                technologies and staying up to date with the latest industry
                trends. I demand of myself in my career:{" "}
                <span className="animated-item">
                  Think big, Be professional, Be creative!
                </span>
              </p>
            </div>
          </Col>
          <Col lg={5} md={12} xs={12} className="custom-image">
            <div className="about-image svg">
              <img src={aboutImg} className="img-fluid" alt="about image" />
            </div>
          </Col>
          <Col lg={4} md={12} xs={12} className="custom-btn-group">
            <a
              href={portfolio}
              download="marong_cv.zip"
              className="btn custom-btn custom-btn-bg custom-btn-link"
            >
              Download Resume
            </a>
            <a href="https://github.com/maronggithub" className="btn svg-btn">
              <ReactSVG src={githubImg} alt="github-fill" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
