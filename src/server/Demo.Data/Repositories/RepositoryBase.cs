namespace Demo.DataAccess.Repositories
{
    public abstract class RepositoryBase<T> : IRepository<T>
        where T : class
    {
        //TODO: Implement later when real DB data access is needed
        public virtual IEnumerable<T> GetAll()
        {
            throw new NotImplementedException();
        }

    }
}