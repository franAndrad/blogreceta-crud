import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
          <h1 className='display-5 mt-5 text-center'>Encuentra tus recetas favoritas</h1>
          <hr />  
          <div className='row mx-2'>
            <div className='col-4 card-group mt-4'>
                <Card>
                    <Card.Img variant="top" src="https://www.pexels.com/es-es/foto/tacos-con-lima-461198/"/>
                    <Card.Body>
                        <Card.Title>Chocotorta</Card.Title>
                        <Card.Text>
                            2 Queso crema 250g
                            3 Paquetes Galleta Chocolina
                        </Card.Text>
                        <Button variant="primary">Ver mas</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-4 card-group mt-4'>
                <Card>
                    <Card.Img variant="top" src="https://www.pexels.com/es-es/foto/tacos-con-lima-461198/"/>
                    <Card.Body>
                        <Card.Title>Chocotorta</Card.Title>
                        <Card.Text>
                            2 Queso crema 250g
                            3 Paquetes Galleta Chocolina
                        </Card.Text>
                        <Button variant="primary">Ver mas</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='col-4 card-group mt-4'>
                <Card>
                    <Card.Img variant="top" src="https://www.pexels.com/es-es/foto/tacos-con-lima-461198/"/>
                    <Card.Body>
                        <Card.Title>Chocotorta</Card.Title>
                        <Card.Text>
                            2 Queso crema 250g
                            3 Paquetes Galleta Chocolina
                        </Card.Text>
                        <Button variant="primary">Ver mas</Button>
                    </Card.Body>
                </Card>
            </div>
          </div>
        </div>
    );
};

export default Home;