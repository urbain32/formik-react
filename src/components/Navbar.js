import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}} color="GrayText">
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant='h5' component='div' sx={{ flexGrow: 10 }}>
            React Formik
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
