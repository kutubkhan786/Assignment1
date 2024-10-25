import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, IconButton, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import '../styles/CharacterModal.css';

const CharacterModal = ({ character, handleClose }) => {
  const [homeworld, setHomeworld] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeworld = async () => {
      try {
        const response = await axios.get(character.homeworld);
        setHomeworld(response.data);
      } catch (e) {
        console.error('Failed to fetch homeworld data', e);
      }
      setLoading(false);
    };
    fetchHomeworld();
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  return (
    <Box className="modal-content">
      <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 10, right: 10 }} aria-label="close">
        <CloseIcon />
      </IconButton>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant="h4">{character.name}</Typography>
          <Typography variant="body1">Height: {character.height / 100} meters</Typography>
          <Typography variant="body1">Mass: {character.mass} kg</Typography>
          <Typography variant="body1">Birth Year: {character.birth_year}</Typography>
          <Typography variant="body1">Films: {character.films.length}</Typography>
          <Typography variant="body1">Date Added: {formatDate(character.created)}</Typography>
          {homeworld && (
            <>
              <Typography variant="h6">Homeworld: {homeworld.name}</Typography>
              <Typography variant="body1">Terrain: {homeworld.terrain}</Typography>
              <Typography variant="body1">Climate: {homeworld.climate}</Typography>
              <Typography variant="body1">Population: {homeworld.population}</Typography>
              <Typography variant="body1">
                <Link href={homeworld.url}>Click here for more info</Link>
              </Typography>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default CharacterModal;
