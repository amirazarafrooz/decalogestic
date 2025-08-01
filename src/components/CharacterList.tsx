import { Box, Typography } from '@mui/material';
import CharacterCard from './CharacterCard';
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

  // اطلاع دادن تعداد صفحات به والد
  onPageCountChange(data.info.pages);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 3,
        mt: 3,
        justifyItems: 'center',
      }}
    >
      {data.results.map((char: Character) => (
        <CharacterCard key={char.id} characterId={Number(char.id)} characterData={char} />
      ))}
    </Box>
  );
}
