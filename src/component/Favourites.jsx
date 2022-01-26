// import React, { Component } from 'react';
// import { Container, Col, Row, ListGroupItem} from 'react-bootstrap';
// import { connect } from "react-redux";
// import BsHeartFill from "react-icons/bs"

// const mapStateToProps = state => ({
//  company: state.company.favourites
// }) 

// class Favourites extends Component {
//     render() {
//         return (
//          <Container>
//              <Row className="mx-0 mt-3 p-3"
//         style={{ border: '1px solid black', borderRadius: 4 }}>
//             <Col xs={9}>
//             <ListGroup>
//                {
//               company.map(data=> {
//                   <ListGroupItem>
//               <BsHeartFill />
//               <a href={data.url} target='_blank' rel="noreferrer">{data.title}</a>
//               </ListGroupItem>
//               })     
//             } 
//             </ListGroup>
//             </Col>
//              </Row>
//          </Container>
//         );
//     }
// }

// export default connect(mapStateToProps)(Favourites)