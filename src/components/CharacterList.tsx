import Grid from '@mui/material/Grid';
import CharacterCard from './CharacterCard';
import { Box, Typography } from '@mui/material';
import { useCharacters } from '../hooks/useCharacters';
import type { Character } from '../hooks/useCharacters';

type Props = {
  page: number;
  filter: {
    status?: string;
    species?: string;
  };
  onPageCountChange: (pages: number) => void;
};

export default function CharacterList({ page, filter, onPageCountChange }: Props) {
  const { data, isLoading, error } = useCharacters(page, filter);

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
        <Typography>در حال بارگذاری...</Typography>
      </Box>
    );

  if (error)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
        <Typography color="error.main">خطا در دریافت داده</Typography>
      </Box>
    );

  if (!data || data.results.length === 0)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
        <Typography color="text.secondary">هیچ شخصیتی پیدا نشد</Typography>
      </Box>
    );

  onPageCountChange(data.info.pages);

  return (
    <Grid container spacing={3} justifyContent="center">
      {data.results.map((char: Character) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={char.id}>
          <CharacterCard characterId={Number(char.id)} characterData={char} />
        </Grid>
      ))}
    </Grid>
  );
}
