using Demo.DataAccess.Repositories;
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
        public async Task<ActionResult<IEnumerable<Foo>>> Test()
        {
            try
            {
                var result = await _fooRepository.GetAll();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Problem(ex.Message, null, 500);
            }
        }
    }
}
