import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import CharacterCard from '../components/CharacterCard';

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  if (favorites.length === 0) {
    return (
      <Typography
        sx={{
          fontFamily: '"Roboto", "Noto Sans Arabic", sans-serif',
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100px"
        variant="h6"
      >
        هیچ شخصیتی به علاقه‌مندی‌ها اضافه نشده
      </Typography>
    );
  }

  return (
    <div style={{ width: "100%" }}>
      <Typography
        className="roboto"
        color="black"
        variant="h4"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={5}
        fontWeight="bold"
        gutterBottom
      >
        Favorites
      </Typography>

   <Box
  sx={{
   display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 3,
        mt: 3,
        justifyItems: 'center',
  }}
>
  {favorites.map((id) => (
    <Box
      key={id}
    >
      <CharacterCard characterId={id} />
    </Box>
  ))}
</Box>
    </div>
  );
}
