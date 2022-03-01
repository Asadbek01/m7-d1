import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class JobDetail extends Component {
  state = {
    job: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.jobSelected !== this.props.jobSelected) {
      this.setState({
        job: this.props.jobSelected,
      });
    }
  }
  

  render() {
    return (
      <div className="mt-3">
        {this.state.job ? (
          <>
          <Container>
            <Row>
              <Col sm={12}>
                <h1>{this.state.job.title}</h1>
              </Col>
            </Row>
            <Row className="mt-3">
              
              <Col className="mx-5" sm={8}>
                <div>
                  <span className="font-weight-bold">Description:</span>
                  <p dangerouslySetInnerHTML={{ __html: this.state.job.description }} />
                </div>
              </Col>
            </Row>
          </Container>
          </>
        ) : (
          <Row>
            <Col sm={12}>
              <h3> Select a Job!</h3>
            </Col>
          </Row>
          )}
      </div>
      );
  }
}

export default JobDetail;
