using Demo.Web.Controllers;

namespace Demo.Web.GraphQL;

public partial class Query
{
    public IAsyncEnumerable<WeatherForecast> GetWeatherForecast() => WeatherForecastController.GetForecast();
}