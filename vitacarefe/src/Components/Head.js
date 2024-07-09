import React from 'react';
import './Head.scss';
import logo from './Assets/images/logo.png';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import BloodtypeTwoToneIcon from '@mui/icons-material/BloodtypeTwoTone';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import reciveButtonIcon from './Assets/images/reciveButton.png';
import { AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);


  return (
   
<AppBar className="bg-container fixed" position="fixed">
  
       
      <div className="content">
      <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        </Link>
        <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
        <Button className='reciveButtonIcon' startIcon={<HomeIcon />} variant="contained" >
        Home
      </Button>
      </Link>

       
      <Button
      className='reciveButtonIcon'
      variant="contained"    
      startIcon={<img src={reciveButtonIcon}   className="button-icon" />}
    >
      Receive Bloood
    </Button>
    <Button className='navButton' startIcon={<MenuIcon />} variant="contained" >
    </Button>
    </div>

    
   
    </AppBar>

  );
}
