import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActionArea, Modal } from '@mui/material';
import CharacterModal from './CharacterModal';
import '../styles/CharacterCard.css';

const CharacterCard = ({ character }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const randomImage = `https://picsum.photos/seed/${character.name}/300/200`;

  return (
    < >
  
      <Card className={`character-card ${character.species || 'default'}`}>
        <CardActionArea onClick={handleOpen}>
          <img src={randomImage} alt={character.name} />
          <CardContent>
            <Typography variant="h6">{character.name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <CharacterModal character={character} handleClose={handleClose} />
      </Modal>
  
    </>
  );
};

export default CharacterCard;
