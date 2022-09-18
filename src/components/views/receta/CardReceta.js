import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CardReceta = (props) => {
    return (
        <div className='col-4 card-group mt-4'>
            <Card>
                <Card.Img variant="top" src={props.receta.imagen}/>
                <Card.Body>
                    <Card.Title>{props.receta.titulo}</Card.Title>
                    <Card.Text>{props.receta.descripcion}</Card.Text>
                    <Button variant="primary">Ver mas</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardReceta;