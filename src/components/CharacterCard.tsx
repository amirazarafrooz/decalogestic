import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { toggleFavorite } from '../store/favoritesSlice';
import { useEffect, useState } from 'react';

type Props = {
  characterId: number;
  characterData?: any;
};

export default function CharacterCard({ characterId, characterData }: Props) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFav = favorites.includes(characterId);

  const [character, setCharacter] = useState(characterData);

  useEffect(() => {
    if (!characterData) {
      fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then((res) => res.json())
        .then((data) => setCharacter(data));
    }
  }, [characterId]);

  if (!character) return null;

  return (
    <Card
      sx={{
        display: 'flex',
        backgroundColor: '#2d2d3a',
        borderRadius: 3,
        overflow: 'hidden',
        color: 'white',
        width: 400,
        position: 'relative',
      }}
    >
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        sx={{ width: 140, height: 220, objectFit: 'cover' }}
      />

      <CardContent sx={{ flex: 1, padding: 2, position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
          <IconButton onClick={() => dispatch(toggleFavorite(characterId))}>
            {isFav ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon sx={{ color: 'white' }} />}
          </IconButton>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {character.name}
        </Typography>

        <Typography variant="body2" color="gray">
          {character.status} - {character.species}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          <span style={{ color: '#888' }}>Last known location:</span><br />
          {character.location.name}
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          <span style={{ color: '#888' }}>First seen in:</span><br />
          {character.origin.name}
        </Typography>
      </CardContent>
    </Card>
  );
}