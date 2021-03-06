import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Job({ data }) {
    return (
        <Row >
            <Col md={4}><Link to={`/${data.company_name}`}>{data.company_name}</Link></Col>
            <Col md={4}><Link to={{ pathname: data.url }} target='_blank'>{data.title}</Link></Col>
        </Row>
    )
}