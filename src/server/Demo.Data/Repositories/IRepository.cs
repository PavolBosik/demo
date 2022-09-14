namespace Demo.DataAccess.Repositories
{
    public interface IRepository<T>
    {
        Task<IEnumerable<T>> GetAll();
    }
}
