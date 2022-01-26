import React, { Component } from 'react';
import {  Row , Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import BsHeart from "react-icons/bs"
const RetrieveJobs = ({data}) =>{
      return(
    <Row className="mx-0 mt-3 p-3"
        style={{ border: '1px solid black', borderRadius: 4 }}
    >
        <Col xs={3}>
             <BsHeart size={20} />
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
             <Col xs={9}>
             <a href={data.url} target='_blank' rel="noreferrer">{data.title}</a>
             </Col>
    </Row>
      )
             
    }


export default RetrieveJobs;