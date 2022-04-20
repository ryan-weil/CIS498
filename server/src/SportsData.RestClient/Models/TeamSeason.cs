namespace SportsData.Rest.Models;

public record TeamSeason
{
    /// <summary>
    ///     The unique ID of the stat.
    /// </summary>
    public int StatId { get; init; }

    /// <summary>
    ///     The unique ID of the team.
    /// </summary>
    public int TeamId { get; init; }

    /// <summary>
    ///     The college basketball regular season for which these totals apply.
    /// </summary>
    public int Season { get; init; }

    /// <summary>
    ///     Team name.
    /// </summary>
    public string Name { get; init; } = null!;

    /// <summary>
    ///     The abbreviation of the team.
    /// </summary>
    public string Team { get; init; } = null!;

    /// <summary>
    ///     Total number of wins.
    /// </summary>
    public int Wins { get; init; }

    /// <summary>
    ///     Total number of losses.
    /// </summary>
    public int Losses { get; init; }

    /// <summary>
    ///     Total number of field goals made.
    /// </summary>
    public double FieldGoalsMade { get; init; }

    /// <summary>
    ///     Total number of field goals attempted.
    /// </summary>
    public double FieldGoalsAttempted { get; init; }

    /// <summary>
    ///     Total field goal percentage.
    /// </summary>
    public double FieldGoalsPercentage { get; init; }

    /// <summary>
    ///     Total two pointers made.
    /// </summary>
    public double TwoPointersMade { get; init; }

    /// <summary>
    ///     Total two pointers attempted.
    /// </summary>
    public double TwoPointersAttempted { get; init; }

    /// <summary>
    ///     Total two pointers percentage.
    /// </summary>
    public double TwoPointersPercentage { get; init; }

    /// <summary>
    ///     Total three pointers made.
    /// </summary>
    public double ThreePointersMade { get; init; }

    /// <summary>
    ///     Total three pointers attempted.
    /// </summary>
    public double ThreePointersAttempted { get; init; }

    /// <summary>
    ///     Total three pointers percentage.
    /// </summary>
    public double ThreePointersPercentage { get; init; }

    /// <summary>
    ///     Total free throws made.
    /// </summary>
    public double FreeThrowsMade { get; init; }

    /// <summary>
    ///     Total free throws attempted.
    /// </summary>
    public double FreeThrowsAttempted { get; init; }

    /// <summary>
    ///     Total free throws percentage.
    /// </summary>
    public double FreeThrowsPercentage { get; init; }

    /// <summary>
    ///     Total offensive rebounds.
    /// </summary>
    public double OffensiveRebounds { get; init; }

    /// <summary>
    ///     Total defensive rebounds.
    /// </summary>
    public double DefensiveRebounds { get; init; }

    /// <summary>
    ///     Total rebounds.
    /// </summary>
    public double Rebounds { get; init; }

    /// <summary>
    ///     Total assists.
    /// </summary>
    public double Assists { get; init; }

    /// <summary>
    ///     Total steals.
    /// </summary>
    public double Steals { get; init; }

    /// <summary>
    ///     Total blocked shots.
    /// </summary>
    public double BlockedShots { get; init; }

    /// <summary>
    ///     Total turnovers.
    /// </summary>
    public double Turnovers { get; init; }

    /// <summary>
    ///     Total personal fouls.
    /// </summary>
    public double PersonalFouls { get; init; }

    /// <summary>
    ///     Total points.
    /// </summary>
    public double Points { get; init; }

    /// <summary>
    ///     Total double doubles.
    /// </summary>
    public double DoubleDoubles { get; init; }

    /// <summary>
    ///     Total triple doubles.
    /// </summary>
    public double TripleDoubles { get; init; }
}
