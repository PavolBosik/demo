using Demo.DataAccess.Repositories;
using Demo.Domain;

namespace Demo.Web.GraphQL;

public partial class Query
{
    private readonly IRepository<Foo> _fooRepository;

    public Query(IRepository<Foo> fooRepository)
    {
        _fooRepository = fooRepository;
    }
}