namespace Demo.DataAccess.Repositories
{
    public interface IRepository<T>
    {
        IEnumerable<T> GetAll();
    }
}
