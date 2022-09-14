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
        public async void TestController_GetAction_MustReturnOkObjectResult()
        {
            _fooRepository.GetAll().Returns(Enumerable.Empty<Foo>());
            var result = await _controller.Test();
            var actionResult = Assert.IsType<ActionResult<IEnumerable<Foo>>>(result);
            Assert.IsType<OkObjectResult>(actionResult.Result);
        }
    }
}