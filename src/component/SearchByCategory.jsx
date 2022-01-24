import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RetrieveJobs from './RetrieveJobs';
import uniqid from "uniqid"
import { Container, Row, Col } from 'react-bootstrap';

const SearchByCategory =()=> {
    const [jobs, setJobs] = useState([])
    const params = useParams()

    useEffect(() => {
       getByCategory()
    }, [])

    const url = 'https://strive-jobs-api.herokuapp.com/jobs?category='
     const  getByCategory = async()=>{
    try {
        const response = await fetch(url+params.category) 
        if(response.ok){
                const { data } = await response.json()
            console.log(data)
            setJobs(data)
        }
    } catch (error) {
        
    }

}
  return (
    <Container>
    <Row>
        <Col>
            {
            jobs.map(data => <RetrieveJobs key={uniqid()} data={data} />)
            }
        </Col>
    </Row>
</Container>
)
  
}
export default SearchByCategory;