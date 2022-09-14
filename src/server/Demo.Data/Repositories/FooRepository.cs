using Demo.Domain;

namespace Demo.DataAccess.Repositories
{
    public class FooRepository : RepositoryBase<Foo>
    {
        public override IEnumerable<Foo> GetAll()
        {
            return new List<Foo>
            {
                new Foo {Id = 1, Name = "test1"},
                new Foo {Id = 2, Name = "test2"}
            };
        }
    }
}
