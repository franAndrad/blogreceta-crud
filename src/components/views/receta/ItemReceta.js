import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./itemReceta.css";

const ItemReceta = (props) => {
    const URL = process.env.REACT_APP_API_RECETAS;
    const handleDelete = async () => {
        try {
            const parametrosPeticion = {
                method: 'DELETE'
            }
            const respuesta = await fetch(URL + '/' + props.receta._id, parametrosPeticion);
            if (respuesta.status === 200) {
                console.log('Producto Eliminado')
            }
            props.consultarAPI();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <tr className='bg-white'>
            <td>
                <div className='textOverflow'>{props.receta._id}
                </div>
            </td>
            <td>
                <div className='textOverflow'>{props.receta.titulo}
                </div>
            </td>
            <td>
                <div className='textOverflow'>{props.receta.imagen}</div>
            </td>
            <td>
                <div className='textOverflow'>{props.receta.descripcion}
                </div>
            </td>
            <td>
                <div className='textOverflow'>{props.receta.ingredientes.toString()}
                </div>
            </td>
            <td>
                <Link to={`/administrar/editar/${props.receta._id}`} className='btn btn-warning'>Editar</Link>
                <Button variant='danger' onClick={handleDelete}>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemReceta;