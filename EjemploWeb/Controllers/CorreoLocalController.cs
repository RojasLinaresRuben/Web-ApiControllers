using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EjemploWeb.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EjemploWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CorreoLocalController : ControllerBase
    {
        [HttpGet]
        public object GetPersona()
        {

            Persona persona = new Persona
            {
                Apellido = "Rojas",
                Edad = 32,
                Nombre = "Ruben"
            };
            return persona;
        }


    }
}