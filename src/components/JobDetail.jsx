import { Component } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
const mapStateToProps = (state) =>({
  
isLoading: state.elements.isLoading,
isError:  state.elements.isError
})

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
            {this.props.isLoading ? ( 
              
              <h3>Loading... <Spinner variant='dark' animation='border' /></h3> 
            ) :  this.props.isError ? (
              <Alert variant='danger'>Fetch error, try again</Alert>
            ) :
              <h3> Select a Job!</h3>
            }
            </Col>
          </Row>
          )}
      </div>
      );
  }
}

export default connect(mapStateToProps)(JobDetail);
