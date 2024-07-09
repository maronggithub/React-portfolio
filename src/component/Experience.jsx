import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import school from '../assets/school.svg';
import group from '../assets/group.svg';

function Experience() {

  return (
    <>
        <Container>
            <Row lg={12} xs={12} className="text-center">
                <h1>Experience</h1>
            </Row>
            <Row className="py-3">
                <Col lg={5} xs={12}>
                    <Col lg={10} xs={12}>
                        <h2 className="exp-title mb-4 text-center">Work History</h2>
                    </Col>
                    <Col sm={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 1 }} className="timeline">
                        <div className="timeline-wrapper custom-left-line">
                            <div className="timeline-yr">
                                <img src={group} className="img-fluid" alt="about group"/>
                            </div>
                            <div className="timeline-info">
                                <h3><span>Frontend developer</span></h3>
                                <h4><small>2023 July ~ 2024 April</small></h4>
                                <p>Utlizing HTML, CSS, JS, JSP, PHP, and PostgreSQL for web development and CMS system creation.</p>
                            </div>
                        </div>
                        <div className="timeline-wrapper custom-left-line">
                            <div className="timeline-yr">
                                <img src={group} className="img-fluid" alt="about group"/>
                            </div>
                            <div className="timeline-info">
                                <h3><span>Database Engineer</span></h3>
                                <h4><small>2021 April ~ 2023 July</small></h4>
                                <p>Using OracleSQL and PL/SQL for database development.</p>
                            </div>
                        </div>
                        <div className="timeline-wrapper custom-left-line">
                            <div className="timeline-yr">
                                <img src={group} className="img-fluid" alt="about group"/>
                            </div>
                            <div className="timeline-info">
                                <h3><span>Test Engineer</span></h3>
                                <h4><small>2015 July ~ 2016 January</small></h4>
                                <p>Utlizing HTML, CSS, JS, JSP, PHP, and PostgreSQL for web development and CMS system creation.</p>
                            </div>
                        </div>
                    </Col>
                </Col>
                <Col lg={{ span: 5, offset: 2 }} xs={12}>
                    <Col lg={9} xs={12}>
                        <h2 className="exp-title mb-4 text-center">Education</h2>
                    </Col>
                    <Col sm={{ span: 10, offset: 2 }} xs={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 0 }} className="timeline">
                        <div className="timeline-wrapper custom-right-line">
                            <div className="timeline-yr">
                                <img src={school} className="img-fluid" alt="about school"/>
                            </div>
                            <div className="timeline-info">
                                <h3><span>Master of Information Science</span></h3>
                                <h4><small>Yokohama National University</small></h4>
                                <p>Completed computer-related courses and also developed a facial modulation system to research the effects of modulated facial expressions on taste perception.</p>
                            </div>
                        </div>
                        <div className="timeline-wrapper custom-right-line">
                            <div className="timeline-yr">
                                <img src={school} className="img-fluid" alt="about school"/>
                            </div>
                            <div className="timeline-info">
                                <h3><span>Bachelor of Engineering in Mechanical and Electrical Science</span></h3>
                                <h4><small>Nanjing Forest University</small></h4>
                                <p>Completed courses related to electronics, mechanics, and computers, designed and constructed a temperature alarm system by welding electronic boards.</p>
                            </div>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Experience;