import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Grid, Paper } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { blue } from '@mui/material/colors';

import FormOne from '../src/FormOne';
import FormTwo from '../src/FormTwo';

const LoadingSkeleton = () => (
  <Box
    sx={{
      height: 'max-content',
    }}
  >
    {[...Array(10)].map((_, index) => (
      <Skeleton variant="rectangular" sx={{ my: 4, mx: 1 }} key={index} />
    ))}
  </Box>
);

const columns: GridColDef[] = [
  { field: 'statId', headerName: 'Stat ID' },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'points', headerName: 'Points' },
  { field: 'fieldGoalsPercentage', headerName: 'Field Goal Percentage' },
  { field: 'steals', headerName: 'Steals' },
  { field: 'assists', headerName: 'Assists' },
  { field: 'turnovers', headerName: 'Turnovers' },
  { field: 'threePointersPercentage', headerName: '3 pointer percentage' },
  { field: 'twoPointersPercentage', headerName: '2 pointer percentage' },
];

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(
      () =>
        fetch('https://localhost:7000/TeamSeason/2021')
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setLoading(false);
          }),
      3000
    );
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        height: '100vh',
        overflow: 'auto',
        background: `linear-gradient(to right, ${blue[200]}, ${blue[500]})`,
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3 }}>
              <FormOne data={data} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3 }}>
              <FormTwo data={data} />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ padding: 3 }}>
              <DataGrid
                getRowId={(row) => row.statId} // because 'id' column is missing in the model
                sx={{ height: '650px' }} // either autoHeight or this
                rows={data}
                columns={columns}
                pageSize={10}
                // autoHeight
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                disableColumnMenu
                disableColumnSelector
                components={{
                  LoadingOverlay: LoadingSkeleton,
                }}
                loading={loading}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Home;
