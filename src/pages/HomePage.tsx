// src/pages/HomePage.tsx
import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import {
  Pagination,
  Typography,
  TextField,
  MenuItem,
  Box,
} from '@mui/material';

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');

  const handlePageChange = (_: any, value: number) => {
    setPage(value);
  };

  return (
      <div style={{ width: "100%"}}>
      <Typography color="black" variant="h4" display='flex' justifyContent='center' alignItems='center' marginTop={5} fontWeight='bold' gutterBottom> 
        Rick and Morty Characters
      </Typography>

      {/* Filters */}
      <Box
  sx={{
    color: 'white',
    display: "flex",
    gap: 2,
    mb: 3,
    justifyContent: "center",
    alignItems: "center", 
  }}
>
  <TextField
    label="نژاد (Species)"
    select
    value={species}
    onChange={(e) => {
      setSpecies(e.target.value);
      setPage(1);
    }}
    sx={{
    minWidth: 160,
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    borderRadius: 2, 
    '& .MuiOutlinedInput-root': {
      borderRadius: 2, 
    },
  }}
>
    <MenuItem value="">همه</MenuItem>
    <MenuItem value="Human">Human</MenuItem>
    <MenuItem value="Alien">Alien</MenuItem>
    <MenuItem value="Robot">Robot</MenuItem>
    <MenuItem value="Unknown">Unknown</MenuItem>
  </TextField>

  <TextField
    label="وضعیت (Status)"
    select
    value={status}
    onChange={(e) => {
      setStatus(e.target.value);
      setPage(1);
    }}
 sx={{
    minWidth: 160,
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    borderRadius: 2, // برای خود TextField
    '& .MuiOutlinedInput-root': {
      borderRadius: 2, // برای input و outline
    },
  }}
>
    <MenuItem value="">همه</MenuItem>
    <MenuItem value="alive">Alive</MenuItem>
    <MenuItem value="dead">Dead</MenuItem>
    <MenuItem value="unknown">Unknown</MenuItem>
  </TextField>
</Box>

      <CharacterList
        page={page}
        filter={{ status, species }}
        onPageCountChange={setTotalPages}
      />

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}
        />
      )}
    </div>

  );
}
