using Demo.Controllers;
using Demo.DataAccess.Repositories;
using Demo.Domain;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;

namespace Demo.UnitTests
{
    public class TestControllerTests
    {
        private readonly TestController _controller;
        private readonly IRepository<Foo> _fooRepository;

        public TestControllerTests()
        {
            _fooRepository = Substitute.For<IRepository<Foo>>();
            _controller = new TestController(_fooRepository);
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
}