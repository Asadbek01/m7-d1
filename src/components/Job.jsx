import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Job({ data }) {
    return (
        <Row >
            <Col xs={3}><Link to={`/${data.company_name}`}>{data.company_name}</Link></Col>
            <Col xs={9}><Link to={{ pathname: data.url }} target='_blank'>{data.title}</Link></Col>
        </Row>
    )
}