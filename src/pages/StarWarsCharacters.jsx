import React, { useState, useEffect } from 'react';
import { Container, Grid, Pagination, CircularProgress } from '@mui/material';
import axios from 'axios';
import CharacterCard from '../pages/CharacterCard';
import Error from '../components/Error';
import Loader from '../components/Loader';
import '../styles/StarWarsCharacters.css';

const StarWarsCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        setCharacters(response.data.results);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    };
    fetchCharacters();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <>
      {loading ? <Loader /> : error ? <Error /> : (
        <>
          <Grid container spacing={3}>
            {characters.map((character, index) => (
              <Grid item xs={12} sm={6} md={4} key={character.name}>
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={9} // Assuming 9 pages for this example
            page={page}
            onChange={handlePageChange}
            color="primary"
            style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
            />
        </>
      )}
      </>
    </Container>
  );
};

export default StarWarsCharacters;
