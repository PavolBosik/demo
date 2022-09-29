using Demo.DataAccess.Repositories;
using Demo.Domain;
using Demo.Web.Controllers;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;

namespace Demo.UnitTests;

public class FooControllerTests
{
    private readonly FooController _controller;
    private readonly IRepository<Foo> _fooRepository;

    public FooControllerTests()
    {
        _fooRepository = Substitute.For<IRepository<Foo>>();
        _controller = new FooController(_fooRepository);
    }

    [Fact]
    public async Task EmptyRepository_GetAction_ReturnsOk()
    {
        _fooRepository.GetAll().Returns(AsyncEnumerable.Empty<Foo>());
        var result = _controller.Test();
        var objectResult = Assert.IsType<OkObjectResult>(result.Result);
        var dataCollection = Assert.IsAssignableFrom<IAsyncEnumerable<Foo>>(objectResult.Value);
        Assert.False(await dataCollection.AnyAsync());
    }
}