using RestSharp;
using SportsData.Rest.Models;

namespace SportsData.Rest;

public class SportsDataClient
{
    private readonly string _apiKey;

    private readonly RestClient _client;

    /// <summary>
    ///     Initializes a new instance of the <see cref="SportsDataClient" /> class.
    /// </summary>
    /// <param name="apiKey">The API key.</param>
    /// <exception cref="ArgumentNullException"><paramref name="apiKey" /> is null, empty or whitespace.</exception>
    public SportsDataClient(string apiKey)
    {
        if (string.IsNullOrWhiteSpace(apiKey))
        {
            throw new ArgumentNullException(nameof(apiKey));
        }

        _apiKey = apiKey;

        _client = new RestClient("https://api.sportsdata.io/");
    }

    /// <summary>
    ///     Gets team season stats.
    /// </summary>
    /// <param name="season">Year of the season.</param>
    /// <returns></returns>
    public Task<ICollection<TeamSeason>?> GetTeamSeasonStatsAsync(int season = 2021)
    {
        var request = new RestRequest($"v3/nba/scores/json/TeamSeasonStats/{season}?key={_apiKey}");
        return _client.GetAsync<ICollection<TeamSeason>>(request);
    }
}
