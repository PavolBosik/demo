using Demo.Domain;

namespace Demo.DataAccess.Repositories;

public class FooRepository : RepositoryBase<Foo>
{
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
    public override async IAsyncEnumerable<Foo> GetAll()
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
    {
        for (int i = 1; i <= 2; i++)
        {
            yield return new Foo { Id = i, Name = $"test{i}" };
        }
    }
}