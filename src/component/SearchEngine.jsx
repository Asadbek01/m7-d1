import React, { Component } from 'react';
import {Container, Row, Form, Col} from "react-bootstrap"
import RetrieveJobs from './RetrieveJobs';
import uniqid from "uniqid"

class SearchEngine extends Component {
 state ={
     jobs: [],
     query: ""

    }
    url = 'https://strive-jobs-api.herokuapp.com/jobs?search='
 changeValue =(e)=>{
     this.setState({query : e.target.value})
 }
     GetWithQuery = async (e)=>{
     e.preventDefault()
     try {
      const response = await fetch(this.url + this.state.query + '&limit=5')
      if(response.ok){

          const {data} = await response.json()
          console.log(data)

          this.setState({jobs:data})
      }else{
          alert('Error while fetching')
      }
  } catch (error) {
      
  }
 }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xl={8} className='mx-auto my-5'>
                            <h1>Remote Jobs</h1>
                        </Col>

                        <Col xl={8} className='mx-auto'>
                        <Form onSubmit={this.GetWithQuery}>
                            <Form.Control type='search' value={this.state.query} onChange={this.changeValue} placeholder='Try to type here' />
                        </Form>
                        </Col>

                        <Col xl={8}  className='mx-auto mb-5'>
                        
                        {this.state.jobs.map(data=> <RetrieveJobs key={uniqid()} data={data} /> )}
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SearchEngine;