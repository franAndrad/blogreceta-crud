import React, {useEffect, useState} from 'react';
import { Table, Container } from 'react-bootstrap';
import ItemReceta from './ItemReceta';

const AdministrarReceta = () => {

    const [listaRecetas,setListaRecetas] = useState([]);
    const URL = "http://localhost:3005/recetas";

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
            <h1 className='display-5 mt-5 text-center'>Administra tus recetas</h1>
            <hr />  
            <Container>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
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
                    <ItemReceta key={receta.id} receta={receta} consultarAPI={consultarAPI}></ItemReceta>
                    )
                }
                </tbody>
            </Table>
            </Container>

        </div>
    );
};

export default AdministrarReceta;