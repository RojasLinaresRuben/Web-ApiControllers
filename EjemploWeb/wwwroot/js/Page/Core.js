var $path = "https://localhost:44307/"; // agregar el puerto

var $ServicioRest = new $.RestClient($path + 'api/');

$ServicioRest.add("Correo");// mismo nombre que el api controlador 

var $pathApisLocales = "https://localhost:44379/";// agregar el puerto

var $ServicioRestLocal = new $.RestClient($pathApisLocales + 'api/');

$ServicioRestLocal.add("CorreoLocal");// mismo nombre que el api controlador
