using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SportsData.Rest;

public static class DependencyInjection
{
    public static IServiceCollection AddSportsData(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddTransient(x => new SportsDataClient(configuration["SportsData:ApiKey"]));

        return services;
    }
}
