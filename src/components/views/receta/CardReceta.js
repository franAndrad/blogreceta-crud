import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardReceta = () => {
    return (
        <div className='col-4 card-group mt-4'>
            <Card>
                <Card.Img variant="top" src="https://www.pexels.com/es-es/foto/tacos-con-lima-461198/" />
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
    );
};

export default CardReceta;