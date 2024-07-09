import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { skillImages } from '../dataArray'

function Skill() {

  return (
    <>
        <Container className="custom-skill">
            <Row lg={12} xs={12} className="text-center">
                <h1>Skills</h1>
            </Row>
            <Row className="py-3">
                {skillImages.map((item) => {
                    if (item.id == 1 || item.id % 6 == 0) {
                        return(
                            <Col lg={{ span: 2, offset: 1 }} sm={6} xs={6} key={item.id} className="mb-lg-3 text-center">
                                <img src={item.url} alt="skill image"/>
                                <p><span>{item.label}</span></p>
                            </Col>
                        )
                    }else{
                        return(
                            <Col lg={2} sm={6} xs={6} key={item.id} className="mb-lg-3 text-center">
                                <img src={item.url} alt="skill image"/>
                                <p><span>{item.label}</span></p>
                            </Col>
                        )
                    }
                })}
            </Row>
        </Container>
    </>
  );
}

export default Skill;