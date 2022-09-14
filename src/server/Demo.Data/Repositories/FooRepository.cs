using Demo.Domain;

namespace Demo.DataAccess.Repositories
{
    public class FooRepository : RepositoryBase<Foo>
    {
        public override Task<IEnumerable<Foo>> GetAll()
        {
            IEnumerable<Foo> output = new List<Foo>
            {
                new Foo {Id = 1, Name = "test1"},
                new Foo {Id = 2, Name = "test2"}
            };
            return Task.FromResult(output);
        }
    }
}
