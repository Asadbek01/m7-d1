import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { addToFav, removeFromFav } from '../store/actions'
import { connect } from 'react-redux'

const mapStateToProps = s => s

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (company) => dispatch(addToFav(company)),
    removeFromFavourites: (company) => dispatch(removeFromFav(company))
})


function JobResult({ data, favourites, addToFavourites, removeFromFavourites }) {

    const isFav = favourites.includes(data.company_name)
    console.log(isFav, favourites)
    const toggleFavourite = () => {
        isFav 
            ? removeFromFavourites(data.company_name) 
            : addToFavourites(data.company_name) 
    }

    return (
    <>                   
 <Card className='mt-3'>
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#"><Link to={`/${data.company_name}`}>{data.company_name}</Link></Card.Link>
    <Card.Link href="#"><Link to={{ pathname: data.url }} target='_blank'>{data.title}</Link></Card.Link>
    { isFav
                        ? <HeartFill color="red" size={20} className='mx-3' onClick={toggleFavourite}/>
                        : <Heart color="red" size={20} className='mx-3' onClick={toggleFavourite} />
                   }
  </Card.Body>
</Card>
                
</>     
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(JobResult)