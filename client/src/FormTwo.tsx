import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { TeamSeason as Team } from './lib/interfaces/TeamSeason';

const FormTwo = (props: any) => {
  const [selectedHomeTeam, setSelectedHomeTeam] = useState<Team | null>(null);
  const [selectedAwayTeam, setSelectedAwayTeam] = useState<Team | null>(null);

  const handleHomeTeamChange = (event: SelectChangeEvent) => {
    const value = Number(event.target.value);
    const team = props.data.find((team: Team) => team.statId === value);

    setSelectedHomeTeam(team);
  };

  const handleAwayTeamChange = (event: SelectChangeEvent) => {
    const value = Number(event.target.value);
    const team = props.data.find((team: Team) => team.statId === value);

    setSelectedAwayTeam(team);
  };

  return (
    <>
      <Box mb={2}>
        <Typography component="h1" variant="h4" align="center">
          GUI #2
        </Typography>
      </Box>

      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="home-team-label">
                Which is the Home Team?
              </InputLabel>
              <Select
                labelId="home-team-label"
                id="home-team"
                value={selectedHomeTeam?.statId?.toString() ?? ''}
                label="Which is the Home Team?"
                onChange={handleHomeTeamChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {props.data.map((team: Team) => {
                  return (
                    <MenuItem key={team.statId} value={team.statId.toString()}>
                      {team.name} ({team.team})
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="away-team-label">
                Which is the Away Team?
              </InputLabel>
              <Select
                labelId="away-team-label"
                id="away-team"
                value={selectedAwayTeam?.statId?.toString() ?? ''}
                label="Which is the Away Team?"
                onChange={handleAwayTeamChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {props.data.map((team: Team) => {
                  return (
                    <MenuItem key={team.statId} value={team.statId.toString()}>
                      {team.name} ({team.team})
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          {/* <Grid item xs={12}>
            <Button variant="contained">Submit</Button>
          </Grid> */}

          <Grid item xs={12}>
            {selectedHomeTeam && selectedAwayTeam && (
              <>
                <p>
                  <b>
                    {selectedHomeTeam?.points > selectedAwayTeam?.points
                      ? selectedHomeTeam?.name
                      : selectedAwayTeam?.name}
                  </b>{' '}
                  has scored the most points per game
                </p>
                <p>
                  <b>
                    {selectedHomeTeam?.twoPointersPercentage >
                    selectedAwayTeam?.twoPointersPercentage
                      ? selectedHomeTeam?.name
                      : selectedAwayTeam?.name}
                  </b>{' '}
                  has the better 2 pointer percentage
                </p>
                <p>
                  <b>
                    {selectedHomeTeam?.threePointersPercentage >
                    selectedAwayTeam?.threePointersPercentage
                      ? selectedHomeTeam?.name
                      : selectedAwayTeam?.name}
                  </b>{' '}
                  has the better 3 pointer percentage
                </p>
                <p>
                  <b>
                    {selectedHomeTeam?.assists > selectedAwayTeam?.assists
                      ? selectedHomeTeam?.name
                      : selectedAwayTeam?.name}
                  </b>{' '}
                  has the most assists
                </p>
                <p>
                  <b>
                    {selectedHomeTeam?.steals > selectedAwayTeam?.steals
                      ? selectedHomeTeam?.name
                      : selectedAwayTeam?.name}
                  </b>{' '}
                  has the most steals
                </p>
                <p>
                  <b>
                    {selectedHomeTeam?.rebounds > selectedAwayTeam?.rebounds
                      ? selectedHomeTeam?.name
                      : selectedAwayTeam?.name}
                  </b>{' '}
                  has the most offensive rebounds
                </p>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FormTwo;
