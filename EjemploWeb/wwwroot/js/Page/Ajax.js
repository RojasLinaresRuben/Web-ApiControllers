﻿
//read es para lectura
    //create es para insertar uno nuevo
    //Post es para guardar
    //Update es para actualizar un objeto  

function ajaxObtenerServicioRest() {
    console.log("mostrar datos ajax");

    $ServicioRest.Correo.read({}).done(function (response) {
        
        console.log("se hizo correcta la peticion con servicio rest desde jquery");
    });
}

function ajaxObtenerServicioRestLocal() {
    console.log("se agrega el servicio local rest");
    $ServicioRestLocal.CorreoLocal.read({}).done(function (response) {
        console.log("se hizo correcta la peticion con servicio rest desde jquery local");
        console.log(response);
    });
}