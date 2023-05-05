import {Card, Col, Container,Row,Image} from 'react-bootstrap'
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"
const Trending = () =>{
    return(
        <div>
    <Container  >
        <br>
        </br>
        <br></br>
        <h1 className='text-white text-center'>TRENDING MOVIE</h1>
        <Row>
            <Col md={4} className=' movieWrapper ' id='trending'>
        <Card className=" text-white  bg-white movieImage" >
                <Image src={duneImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>DUNE</Card.Title>
            <Card.Text >
                 This is a wider card with supporting 
                to additional content. 
            </Card.Text>
            <Card.Text className='text-left '>Last updated 3 mins ago</Card.Text>
            </div>
        </Card>
            </Col>
            <Col md={4} className=' movieWrapper '>
        <Card className=" text-white  bg-white movieImage" >
                <Image src={everythingImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>EVERYTHING</Card.Title>
            <Card.Text >
                 This is a wider card with supporting 
                to additional content. 
            </Card.Text>
            <Card.Text className='text-left '>Last updated 3 mins ago</Card.Text>
            </div>
        </Card>
            </Col>
            <Col md={4} className=' movieWrapper '>
        <Card className=" text-white  bg-white movieImage" >
                <Image src={infiniteImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>INFINITE</Card.Title>
            <Card.Text >
                 This is a wider card with supporting 
                to additional content. 
            </Card.Text>
            <Card.Text className='text-left '>Last updated 3 mins ago</Card.Text>
            </div>
        </Card>
            </Col>
            <Col md={4} className=' movieWrapper '>
        <Card className=" text-white  bg-white movieImage" >
                <Image src={jokerImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>JOKER</Card.Title>
            <Card.Text >
                 This is a wider card with supporting 
                to additional content. 
            </Card.Text>
            <Card.Text className='text-left '>Last updated 3 mins ago</Card.Text>
            </div>
        </Card>
            </Col>
            <Col md={4} className=' movieWrapper '>
        <Card className=" text-white  bg-white movieImage" >
                <Image src={lightyearImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>LIGHTYEAR</Card.Title>
            <Card.Text >
                 This is a wider card with supporting 
                to additional content. 
            </Card.Text>
            <Card.Text className='text-left '>Last updated 3 mins ago</Card.Text>
            </div>
        </Card>
            </Col>
            <Col md={4} className=' movieWrapper '>
        <Card className=" text-white  bg-white movieImage" >
                <Image src={morbiusImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>MORBIUS</Card.Title>
            <Card.Text >
                 This is a wider card with supporting 
                to additional content. 
            </Card.Text>
            <Card.Text className='text-left '>Last updated 3 mins ago</Card.Text>
            </div>
        </Card>
            </Col>
        </Row>
    </Container>
      
        </div>
    )
}
 
export default Trending