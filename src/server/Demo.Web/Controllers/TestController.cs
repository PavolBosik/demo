﻿using Demo.DataAccess.Repositories;
using Demo.Domain;
using Microsoft.AspNetCore.Mvc;

namespace demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly IRepository<Foo> _fooRepository;

        public TestController(IRepository<Foo> fooRepository)
        {
            _fooRepository = fooRepository;
        }

        [HttpGet]
        public IActionResult Test()
        {
            try
            {
                var result = _fooRepository.GetAll();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message, null, 500);
            }
        }
    }
}
