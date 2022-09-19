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
    let contador = 0;
    input.forEach(element => {
        while(contador < input.length ){
            if (element.length>= min && element.length<= max){
                verdaderos++;
            }    
            contador++;
        }
    });
    if (input.length === verdaderos && input.lengh>0) {
        return true;
    } else {
        return false;
    }
}