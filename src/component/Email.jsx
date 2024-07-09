import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { ReactSVG } from 'react-svg';
import githubImg from '../assets/github-fill.svg';
import mailImg from '../assets/mail.svg';
import portfolio from "../assets/portfolio/marong_cv.zip";

function Email() {
  return (
    <Container className="custom-skill">
      <Row className="py-3">
        <Col lg={5} xs={12} className="mr-lg-5">
          <div className="bottom-text text-center">
            <h1>Let's get in touch</h1>
          </div>
          <div className="contact-info py-3">
            <div className="contact-info-item text-center">
              <p>
                <img src={mailImg} alt="mail" />
                <span className="mail">marongreceive@gmail.com</span>
              </p>
              <div className="custom-btn-bottom">
                <a
                  href={portfolio}
                  download="marong_cv.zip"
                  className="btn custom-btn custom-btn-bg custom-btn-link"
                >
                  Download Resume
                </a>
                <a
                  href="https://github.com/maronggithub"
                  className="btn svg-btn"
                >
                  <ReactSVG src={githubImg} alt="github-fill" />
                </a>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 6, offset: 1 }} xs={12}>
          <div className="contact-form">
            <Form action="mailto:marongreceive@gmail.com">
              <Row>
                <Form.Group className="col-lg-7 col-12">
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    id="subject"
                  />
                </Form.Group>
                <Form.Group className="col-lg-5 col-12">
                  <Form.Control
                    type="mail"
                    className="form-control"
                    name="cc"
                    placeholder="Carbon Copy"
                    id="cc"
                  />
                </Form.Group>
                <Form.Group className="col-12">
                  <Form.Control
                    name="body"
                    as="textarea"
                    rows={6}
                    className="form-control"
                    id="message"
                    placeholder="Message"
                  />
                </Form.Group>
                <Form.Group className="ml-lg-auto offset-lg-8 col-lg-4 offset-lg-3 offset-md-3 col-md-6 offset-sm-3 col-sm-6 offset-2 col-8">
                  <Form.Control
                    type="submit"
                    className="form-control submit-btn"
                    value="Send Message"
                  />
                </Form.Group>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Email;
