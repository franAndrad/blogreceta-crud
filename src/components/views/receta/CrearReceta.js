import React, { useState } from 'react';
import { Form , Button , Card} from 'react-bootstrap';

const CrearReceta = () => {

    const [titulo,setTitulo] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [imagen,setImagen] = useState('');
    const [ingredientes,setIngredientes] = ('');

    const URL = "http://localhost:3005/recetas";

    const handleSubmit = async (e) =>{
        e.preventDefault();
        //validaciones
        const nuevaReceta = {
            titulo,
            ingredientes,
            descripcion,
            imagen
        }
        try {
            const parametrosPeticion = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevaReceta)
            }
            const respuesta = await fetch(URL,parametrosPeticion)
            if(respuesta.status === 201){
                console.log("el producto se creo correctamente");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Card className='w-75 ms-auto me-auto my-5 bg-light border rounded'>
            <Card.Header className='bg-dark'>
                <h1 className='fs-4 fw-light text-center text-light'>Agrega una receta</h1>
            </Card.Header>
            <Form className='m-3' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>Nombre *</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Ej: Chocotorta" />
                    onChange ={(e)=>setTitulo(e.target.value)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>URL Imagen</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Ej: https://media.istockphoto.com/photos/homemade-chocotorta-picture-id1327623325?s=612x612"/>
                    onChange = {(e)=>setImagen(e.target.value)}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>Descripcion *</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Ingrese una descripcion de  5 a 500 caracteres" 
                    onChange={(e)=>setDescripcion(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTitulo">
                    <Form.Label>Ingredientes *</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="ingrediente 1, ingrediente 2, ingrediente 3, etc" />
                    onChange={(e)=>setIngredientes(e.target.value)}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </Card>
    );
};

export default CrearReceta;