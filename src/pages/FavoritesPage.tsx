// src/pages/FavoritesPage.tsx
import { Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import CharacterCard from '../components/CharacterCard'; // کارت مستقل بهتره

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  if (favorites.length === 0) {
    return <Typography  sx={{ fontFamily: '"Roboto", "Noto Sans Arabic", sans-serif !important'}} display='flex'  justifyContent='center' alignItems='center' height='100px' variant="h6">هیچ شخصیتی به علاقه‌مندی‌ها اضافه نشده </Typography>;
  }

  return (
         <div style={{ width: "100%"}}>

 <Typography   className="roboto"  color="black" variant="h4" display='flex' justifyContent='center' alignItems='center' marginTop={5} fontWeight='bold' gutterBottom> 
        Favorites 
      </Typography>        
        
      <Grid container spacing={2}  xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center" alignItems='center'>
        {favorites.map((id) => (
          <Grid item key={id}>
            <CharacterCard characterId={id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
