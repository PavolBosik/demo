using Demo.DataAccess.Repositories;
using Demo.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Web.Controllers;

[Route("api/[controller]")]
[ApiController]
public class FooController : ControllerBase
{
    private readonly IRepository<Foo> _fooRepository;

    public FooController(IRepository<Foo> fooRepository)
    {
        _fooRepository = fooRepository;
    }

    [HttpGet]
    public ActionResult<IAsyncEnumerable<Foo>> Test()
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