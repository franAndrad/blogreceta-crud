import React, {useEffect, useState} from 'react';
import { Table, Container } from 'react-bootstrap';
import ItemReceta from './ItemReceta';
import { Link } from 'react-router-dom';
import "./administrarReceta.css"

const AdministrarReceta = () => {

    const [listaRecetas,setListaRecetas] = useState([]);
    const URL = process.env.REACT_APP_API_RECETAS;

    useEffect(()=>{
        consultarAPI();
    },[])

    const consultarAPI = async () =>{
        const respuesta = await fetch(URL);
        const obtenerRecetas = await respuesta.json();
        setListaRecetas(obtenerRecetas);
    }
    return (
        <div>
            <Container>
                <h1 className='display-5 mt-5 text-center'>Administra tus recetas</h1>
                <hr />  
                <div className='d-flex justify-content-end'>
                    <Link to={`/administrar/crear`} className="btn btn-secondary mb-2">Agregar</Link>
                </div>

                <Table bordered hover responsive>
                    <thead className='bg-color text-light'>
                        <tr>
                            <th># id</th>
                            <th>Titulo</th>
                            <th>Imagen</th>
                            <th>Descripcion</th>
                            <th>Ingredientes</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        listaRecetas.map((receta)=>
                        <ItemReceta key={receta._id} receta={receta} consultarAPI={consultarAPI}></ItemReceta>
                        )
                    }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default AdministrarReceta;