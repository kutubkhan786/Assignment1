import React from 'react';
import { Typography, Box } from '@mui/material';

const Error = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <Typography variant="h6" color="error">Failed to load data. Please try again later.</Typography>
  </Box>
);

export default Error;
