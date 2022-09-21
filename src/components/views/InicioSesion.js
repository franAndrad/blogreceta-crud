import React, { useEffect, useState } from 'react';
import { Card, Form , Alert} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InicioSesion = () => {

    const [listaAdmin, setListaAdmin] = useState([]);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msjError, setMsjError] = useState(false);

    const URL = process.env.REACT_APP_API_USUARIOS;
    const navegacion = useNavigate();

    useEffect(()=>{
        consultarAPI();
    },[]);

    const consultarAPI = async () =>{
        try {
            const respuesta = await fetch(URL);
            const obtenerAdmins = await respuesta.json();
            setListaAdmin(obtenerAdmins);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMsjError(false);
        const encontrado = listaAdmin.find((element)=> element.email === email);
        if (encontrado != undefined && nombre === encontrado.nombre && email === encontrado.email && password === encontrado.password ){
            navegacion('/administrar');
        }else{
            console.log('usuario invalido')
            setMsjError(true);
        }
    }



    return (
        <Card className='container ms-auto me-auto my-5 bg-light border rounded px-0 w-50'>
            <div className='bg-color border rounded py-2'>
                <h1 className='fs-4 fw-light text-center text-light'>Inicia Sesion</h1>
            </div>
            <Form className='m-3' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Francisco"
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: francisco@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Debe tener al menos una letra mayúscula, al menos una letra minucula, no espacios en blanco ,al menos 1 caracter especial y entre 8 a 15 caracteres"
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <button className='btn btn-secondary my-2' type="submit">
                    Continuar
                </button>
            </Form>
            {
                (msjError) ? (<Alert variant='danger' className=' mx-3'>El usuario no se encontro, verifique los datos ingresados!</Alert>) : null
            }
        </Card>
    );
};

export default InicioSesion;