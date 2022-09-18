import React, { useState , useEffect} from 'react';
import CardReceta from './receta/CardReceta';

const Home = () => {

    const [listaRecetas, setListaRecetas] = useState([]);
    const URL = "http://localhost:3005/recetas";

    useEffect(()=>{
        consultarAPI();
    },[]);

    const consultarAPI = async () =>{
        try {
            const respuesta = await fetch(URL);
            const obtenerRecetas = await respuesta.json();
            setListaRecetas(obtenerRecetas);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
          <h1 className='display-5 mt-5 text-center'>Encuentra tus recetas favoritas</h1>
          <hr />  
          <div className='row mx-2'>
            {
            listaRecetas.map((receta) =>
            <CardReceta key={receta.id} receta={receta}></CardReceta>
            )
            }
          </div>
        </div>
    );
};

export default Home;