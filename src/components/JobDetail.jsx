import { Component, useEffect, useState } from "react";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";


const mapStateToProps = (state) =>({
  
isLoading: state.elements.isLoading,
isError:  state.elements.isError
})

const  JobDetail = ({jobSelected}) => {
  const [job, setJob] = useState(null)
 
const isLoading = useSelector(state=> state.elements.isLoading)
const isError = useSelector(state=> state.elements.isError)

  // componentDidUpdate(prevProps) {
  //   if (prevProps.jobSelected !== this.props.jobSelected) {
  //     this.setState({
  //       job: this.props.jobSelected,
  //     });
  //   }
  // }
  useEffect(()=>{
setJob(jobSelected)
  }, [jobSelected])
  

 
    return (
      <div className="mt-3">
        {job ? (
          <>
          <Container>
            <Row>
              <Col sm={12}>
                <h1>{job.title}</h1>
              </Col>
            </Row>
            <Row className="mt-3">
              
              <Col className="mx-5" sm={8}>
                <div>
                  <span className="font-weight-bold">Description:</span>
                  <p dangerouslySetInnerHTML={{ __html: job.description }} />
                </div>
              </Col>
            </Row>
          </Container>
          </>
        ) : (
          <Row>
            <Col sm={12}>
            {isLoading ? ( 
              
              <h3>Loading... <Spinner variant='dark' animation='border' /></h3> 
            ) :  isError ? (
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


export default JobDetail
