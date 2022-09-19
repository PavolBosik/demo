using Demo.Domain;

namespace Demo.DataAccess.Repositories
{
    public class FooRepository : RepositoryBase<Foo>
    {
        public override async IAsyncEnumerable<Foo> GetAll()
        {
            for(int i = 1; i <= 2; i++)
            {
                yield return new Foo { Id = i, Name = $"test{i}"};
            }
            await Task.CompletedTask;
        }
    }
}
