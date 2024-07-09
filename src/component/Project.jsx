import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ReactSVG } from 'react-svg';
import { Carousel } from 'react-bootstrap';
import { projectImages } from '../dataArray'
import browser from '../assets/browser-frose-glass.svg';
import prev from '../assets/btn-left.svg';
import next from '../assets/btn-right.svg';

function Skill() {

  return (
    <>
        <Container>
            <Row lg={12} xs={12} className="text-center">
                <h1>Projects</h1>
            </Row>
            <Row className="py-3">
                <div className="custom-frame text-center"><img src={browser} /></div>
                <div className="perv-circle"><div className="left-circle"/></div>
                <Carousel
                    className="custom-carousel custom-grid"
                    indicators={false}
                    prevIcon={<div className="control-prev"><ReactSVG src={prev} alt="prev"/></div>}
                    nextIcon={<div className="control-next"><ReactSVG src={next} alt="next"/></div>}
                    fade
                >
                    {projectImages.map((item) => (
                        <Carousel.Item key={item.id}>
                            <a href={item.link}>
                                <img className="project-img d-block w-100" src={item.url} alt="Third slide"/>
                            </a>
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="next-circle"><div className="right-circle"/></div>
            </Row>
        </Container>
    </>
  );
}

export default Skill;