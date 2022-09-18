import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ItemReceta = (props) => {
    const URL = "http://localhost:3005/recetas";
    const handleDelete = async () =>{
        try {
            const parametrosPeticion = {
                method : 'DELETE'
            }
            const respuesta = await fetch(URL+'/'+props.receta.id,parametrosPeticion);
            if(respuesta.status === 200){
                console.log('Producto Eliminado')
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <tr>
            <td>{props.receta.id}</td>
            <td>{props.receta.titulo}</td>
            <td>{props.receta.imagen}</td>
            <td>{props.receta.descripcion}</td>
            <td>{props.receta.ingredientes}</td>
            <td>
                <Link to={`/administrar/editar/${props.receta.id}`} className='btn btn-warning'>Editar</Link>
                <Button variant='danger' onClick={handleDelete}>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemReceta;