import { Container, Row,Col, Button } from 'react-bootstrap';

const Intro = () =>{
return(

    
    <div className=' intro'>
        <Container className='text-white d-flex justify-content-center align-items-center text-center '>
          <Row>
            <Col>
              <div className='title'>Nonton Gratis </div>
              <div className='title'>Gak Pake Karcis</div>
              <div className='introButton mt-4 text-center'>
                <Button variant='dark' href='#trending'>
                    Lihat Semua List
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
        )
}

export default Intro