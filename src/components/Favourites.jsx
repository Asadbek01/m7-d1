import React from 'react'
import { Container, Row, Col, Card, Jumbotron, } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFav } from '../redux/actions'

const Favourites = () => {
    const dispatch = useDispatch()
    const favourites = useSelector(state => state.favourites.likes)

    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <Jumbotron>
                        <h1>Welcome to Favourites Page</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Link to="/" className="btn btn-primary">Back to Main</Link>
                        </p>
                    </Jumbotron>



                    {
                        favourites.map(f => (
                            <div>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Trash color='red' size={20} className='mx-2' onClick={() => dispatch(removeFromFav(f))} style={{ cursor: "pointer" }} />
                                        <span className="h5" >{f}</span>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))

                    }

                </Col>
            </Row>
        </Container>
    )
}


export default Favourites