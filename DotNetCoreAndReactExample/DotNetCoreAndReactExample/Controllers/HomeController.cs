using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IO;

namespace DotNetCoreAndReactExample.Controllers
{
    public class HomeController : Controller
    {
        [Route("{*url}")]
        public IActionResult Index()
        {
            var test = JsonConvert.DeserializeObject<Dictionary<string,string>>(
                System.IO.File.ReadAllText("wwwroot/asset-manifest.json"));

            ViewData["css"] = test["main.css"];
            ViewData["js"] = test["main.js"];
            return View();
        }
    }
}
