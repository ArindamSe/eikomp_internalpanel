import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Logo from "../../Assets/Eikomp Logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const LogoutBox = styled(Box)({
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
});

const LogoutText = styled(Typography)({
  marginRight: '8px',
  color: 'black',
  fontSize: "20px",
  fontWeight: "bolder"
});

const BlackBackgroundAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(180deg, #64b5f6, #2196f3, #1976d2, #0d47a1)`,
}));

const CustomIconButton = styled(IconButton)({
    backgroundImage: `linear-gradient(90deg, #1a237e, #283593, #1a237e, #1f272d, #0a0a0a)`,
    WebkitBackgroundClip: 'text', 
  
  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.2)',
  },
});

const LogoImage = styled('img')({
  width: '100px',
  height: '40px',
  marginRight: '10px',
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BlackBackgroundAppBar position="static">
        <Toolbar>
          <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
            <CustomIconButton size="large" edge="start" aria-label="open drawer" sx={{ mr: 2 }}>
              <HomeIcon />
            </CustomIconButton>
          </Link>
          <LogoImage src={Logo} alt="EIKOMP Logo" />

          <LogoutBox>
            <LogoutText sx={{fontFamily: 'Georgia, "Times New Roman", Times, serif',  backgroundImage: `linear-gradient(90deg, #1a237e, #283593, #1a237e, #1f272d, #0a0a0a)`,
            WebkitBackgroundClip: 'text', 
            color: 'transparent',}}>LogOut</LogoutText>
            <CustomIconButton size="large" aria-label="log out">
              <ExitToAppIcon />
            </CustomIconButton>
          </LogoutBox>
        </Toolbar>
      </BlackBackgroundAppBar>
    </Box>
  );
};

export default Navbar;
