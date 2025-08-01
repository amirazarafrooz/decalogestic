import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';

export default function App() {
  return (
    <Router>
      <AppBar 
      
        position="static" 
        sx={{
          
          m: 0, 
          p: 0, 
          width: '100%', 
          left: 0, 
          right: 0 
        }}
      >
        <Toolbar
          disableGutters 
          sx={{ 
            backgroundColor: 'white',
            display: 'flex', 
            gap: 2, 
            width: '100%',
            color: 'black'
          }}
        >
          <Button color="inherit" sx={{ color: "black" }} component={Link} to="/">Home</Button>
          <Button color="inherit" sx={{ color: "black" }} component={Link} to="/favorites">Favorites</Button>
        </Toolbar>
      </AppBar>

      <div style={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  )
}
