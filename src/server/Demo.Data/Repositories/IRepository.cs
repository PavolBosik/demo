namespace Demo.DataAccess.Repositories
{
    public interface IRepository<T>
    {
        IAsyncEnumerable<T> GetAll();
    }
}
