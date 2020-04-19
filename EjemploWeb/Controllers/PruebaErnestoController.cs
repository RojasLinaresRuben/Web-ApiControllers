using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace EjemploWeb.Controllers
{
    public class PruebaErnestoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}