import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const CardReceta = (props) => {

    const URL = "http://localhost:3005/recetas";

    return (
        <div className='col-4 card-group mt-4'>
            <Card>
                <Card.Img variant="top" src={props.receta.imagen}/>
                <Card.Body>
                    <Card.Title>{props.receta.titulo}</Card.Title>
                    <Card.Text>{props.receta.descripcion}</Card.Text>
                    <Link to={'/detalle/'+props.receta.id} className="btn btn-primary" >Ver mas</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardReceta;