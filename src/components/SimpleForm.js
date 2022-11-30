import { Box, Button, TextField } from '@mui/material';
import React from 'react';

const SimpleForm = () => {

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '400px',borderRadius:10 },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <TextField fullWidth id='name' label='Name' variant='outlined' />
      </div>
      <div>
        <TextField fullWidth id='email' label='Email' variant='outlined' />
      </div>
      <div>
        <TextField fullWidth id='channel' label='Channel' variant='outlined' />
      </div>
      <div>
        <Button fullWidth al type='submit' variant='contained' color='success'>
          Success
        </Button>
      </div>
    </Box>
  );
};

export default SimpleForm;
