import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Navbar, Nav, NavDropdown, FormControl } from 'react-bootstrap'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'
import JobDetail from './JobDetail'
import AllJobs from './AllJobs'
import {useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../redux/actions'


// const mapStateToProps = state => ({
//   alljobs: state.elements.jobs

// })
// console.log(this.props.alljobs)

// const mapDispatchToProps = (dispatch)=>({
//   getJobs: (query) =>{
    
//   }
// })


 const  BasicOne = () => {
  const alljobs = useSelector(state=> state.elements.jobs)
  const dispatch = useDispatch()

  const [ query, setQuery] = useState('')
  const [ jobSelected, setJobSelected] = useState(null)



    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(getJobs(query))
    }
   useEffect(()=> {

    dispatch(getJobs())
   },
    [])
   const changeJobs = (job) => setJobSelected(job)

    
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
          value={query}
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-success"
        className='mx-2'
         type="search" 
          placeholder="type and press Enter" 
         onClick={handleSubmit}
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
                            alljobs.map(jobData => <AllJobs key={uniqid()} data={jobData}
                            changeJobs={changeJobs}
                         jobSelected={jobSelected}
                            />)
                            
                        }
                    </Col>
                    <Col md={8}>
                    <JobDetail
                    jobSelected={jobSelected} />
                    </Col>
                    </Row>
   
        )
    }

export default BasicOne