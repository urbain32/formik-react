import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
const SimpleForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
  });
  console.log('Formik values', formik.values);
  return (
    <Box>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '400px', borderRadius: 10 },
        }}
        noValidate
        autoComplete='off'
      >
        <div>
          <TextField
            fullWidth
            id='name'
            label='Name'
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id='email'
            label='Email'
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id='channel'
            label='Channel'
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
        </div>
        <div>
          <Button fullWidth type='submit' variant='contained' color='success'>
            Success
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default SimpleForm;
