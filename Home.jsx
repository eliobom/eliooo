import React from 'react';
import { Container, Row, Col } from 'reactstrap';
function Home() {
    console.log('Home component renderizado');
  return 
  <>
  <Container>
        
        <Row>
          <Col xs="4" className='bg-primary'>columna 1</Col>
          <Col xs="4" className='bg-warning'>col</Col>
          <Col xs="4" className='bg-danger'>col</Col>
        </Row>
      </Container>
  </>
}

export default Home;
