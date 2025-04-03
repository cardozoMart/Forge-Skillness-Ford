var edadUsuario=20;

function puedoObtenerLicencia(){

    if (edadUsuario > 17) {
        console.log("¡Listo para obtener la licencia de conducir!");
    }else{
        console.log("Disculpa, debes esperar más años para conseguir tu licencia");
    }
}

puedoObtenerLicencia();