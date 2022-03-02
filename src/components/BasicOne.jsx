import React from 'react'
import { Container, Row, Col, Form, Button, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import AllJobs from './AllJobs'

export default class BasicOne extends React.Component {


    state = {
        query: '',
        jobs: [],
        jobSelected: null
    }

    baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search=' 


    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(this.baseEndpoint + this.state.query +  '&limit=20')
        if (!response.ok) {
            alert('Error fetching results')
            return
        }

        const { data } = await response.json()

        this.setState({ jobs: data })

    }
    changeJobs = (job) => this.setState({jobSelected : job})

    render() {
        return (
                <Row>
                    <Col xs={12} className='mx-auto my-3'>

                    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Remote Jobs</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          value={this.state.query}
          placeholder="Search"
          onChange={this.handleChange}
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success"
        className='mx-2'
         type="search" 
          placeholder="type and press Enter" 
         onClick={this.handleSubmit}
        >Search</Button>
          <Button variant="outline-danger">
          <Link className='btn' to="/favourites"> 

          
              Favourites
              </Link>
          </Button>                   

      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>              
                    </Col>
                    <Col xs={4} className=' mb-5'>
                        {
                            this.state.jobs.map(jobData => <AllJobs key={uniqid()} data={jobData}
                            changeJobs={this.changeJobs}
                         jobSelected={this.state.jobSelected}
                            />)
                            
                        }
                    </Col>
                    <Col md={8}>
                    <JobDetail
                    jobSelected={this.state.jobSelected} />
                    </Col>
                    </Row>
   
        )
    }
}