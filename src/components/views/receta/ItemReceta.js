import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ItemReceta = (props) => {
    return (
        <tr>
            <td>{props.receta.id}</td>
            <td>{props.receta.titulo}</td>
            <td>{props.receta.imagen}</td>
            <td>{props.receta.descripcion}</td>
            <td>{props.receta.ingredientes}</td>
            <td>
                <Link to={`/administrar/editar/${props.receta.id}`} className='btn btn-warning'>Editar</Link>
                <Button variant='danger'>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemReceta;