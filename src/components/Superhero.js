import {Card, Col, Container,Row,Image} from 'react-bootstrap'
import antImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"
const Superharo = () =>{
    return(
        <div>
    <Container  >
        <br>
        </br>
        <br></br>
        <h1 className='text-white text-center'>SUPERHERO</h1>
        <Row>
            <Col md={4} className=' movieWrapper ' id='superhero'>
        <Card className=" text-white  bg-white movieImage" >
                <Image src={antImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>ANTMAN</Card.Title>
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
                <Image src={avengerImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>AVENGER</Card.Title>
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
                <Image src={batmanImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>BATMAN</Card.Title>
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
                <Image src={robinhoodImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>ROBINHOOD</Card.Title>
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
                <Image src={spidermanImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>SPIDERMAN</Card.Title>
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
                <Image src={supermanImage}alt="Dune Movie" 
                className='images'
               />
               <div className='bg-dark text-center'>
                <Card.Title className='text-center'>SUPERMAN</Card.Title>
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
 
export default Superharo