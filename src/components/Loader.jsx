import { CircularProgress, Box } from '@mui/material';
import React from 'react';

const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <CircularProgress />
  </Box>
);

export default Loader;
