using Microsoft.AspNetCore.Mvc;

namespace WebAppTypeScript.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult _Calculator()
        {
            return PartialView();
        }

        public IActionResult _TemperatureConverter()
        {
            return PartialView();
        }

        public IActionResult _About()
        {           
            return PartialView();
        }             
    }
}