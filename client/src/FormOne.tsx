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

const FormOne = (props: any) => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [selectedQuery, setSelectedQuery] = useState<number>(1);

  const handleTeamChange = (event: SelectChangeEvent) => {
    const value = Number(event.target.value);
    const team = props.data.find((team: Team) => team.statId === value);

    setSelectedTeam(team);
  };

  const handleQueryChange = (event: SelectChangeEvent) => {
    const value = Number(event.target.value);
    setSelectedQuery(value);
  };

  return (
    <>
      <Box mb={2}>
        <Typography component="h1" variant="h4" align="center">
          GUI #1
        </Typography>
      </Box>

      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="team-label">Pick a team</InputLabel>
              <Select
                labelId="team-label"
                id="team"
                value={selectedTeam?.statId?.toString() ?? ""}
                label="Pick a team"
                onChange={handleTeamChange}
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
              <InputLabel id="query-label">Query</InputLabel>
              <Select
                labelId="query-label"
                id="query"
                value={selectedQuery.toString()}
                label="Query"
                onChange={handleQueryChange}
              >
                <MenuItem value={1}>
                  What is their season Field Goal Percentage?
                </MenuItem>
                <MenuItem value={2}>What is the number of steals?</MenuItem>
                <MenuItem value={3}>What is the number of assists?</MenuItem>
                <MenuItem value={4}>What is the number of turnovers?</MenuItem>
                <MenuItem value={5}>What is the 3 pointer percentage?</MenuItem>
                <MenuItem value={6}>What is the 2 pointer percentage?</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* <Grid item xs={12}>
            <Button variant="contained">Submit</Button>
          </Grid> */}

          <Grid item xs={12}>
            {selectedTeam && selectedQuery === 1 && (
              <p>
                Field Goal Percentage: {`${selectedTeam?.fieldGoalsPercentage}`}
              </p>
            )}
            {selectedTeam && selectedQuery === 2 && (
              <p>Steals: {`${selectedTeam?.steals}`}</p>
            )}
            {selectedTeam && selectedQuery === 3 && (
              <p>Assists: {`${selectedTeam?.assists}`}</p>
            )}
            {selectedTeam && selectedQuery === 4 && (
              <p>Turnovers: {`${selectedTeam?.turnovers}`}</p>
            )}
            {selectedTeam && selectedQuery === 5 && (
              <p>
                3 pointer percentage:{' '}
                {`${selectedTeam?.threePointersPercentage}`}
              </p>
            )}
            {selectedTeam && selectedQuery === 6 && (
              <p>
                2 pointer percentage: {`${selectedTeam?.twoPointersPercentage}`}
              </p>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FormOne;
