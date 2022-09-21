export const cantidadCaracteres = (input,min,max) => {
    if (input.length >= min && input.length <= max) {
        return true; //dato correcto
    } else {
        return false;
    }
}

export const validarURL = (input) => {
    if(input.length > 0){
        let expRegular = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        if (expRegular.test(input.trim())) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

export const validarIngredientes = (input,min,max) =>{
    let verdaderos = 0;
    input.forEach(element => {
            if (element.length>= min && element.length<= max)
                verdaderos++;  
    });
    if (input.length === verdaderos && input.length > 0) {
        return true;
    } else {
        return false;
    }
}

export const validarContraseña = (input) =>{
    let expRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    if(expRegular.test()){
        return true;
    }
    else{
        return false;
    }
}
// Minimo 8 caracteres
// Maximo 15
// Al menos una letra mayúscula
// Al menos una letra minucula
// Al menos un dígito
// No espacios en blanco
// Al menos 1 caracter especial