using Demo.Domain;

namespace Demo.Web.GraphQL;

public partial class Query
{
    public IAsyncEnumerable<Foo> GetAll() => _fooRepository.GetAll();
}