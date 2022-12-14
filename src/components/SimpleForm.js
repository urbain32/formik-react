import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Required field'),
  email: yup.string().email('Invalid email format').required('Required field'),
  channel: yup.string().required('Required field'),
});

const initialValues = {
  name: 'Urban',
  email: '',
  channel: '',
};
const onSubmit = (values) => {
  console.log('Formik data', values);
};

const SimpleForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
  console.log('visited field', formik.errors);
  return (
    <Box sx={{ border: 1, borderRadius: 4, p: 2, m: 2 }}>
      <Typography variant='h6' align='center'>
        FORM
      </Typography>
      <Box
        onSubmit={formik.handleSubmit}
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '400px', borderRadius: 10 },
        }}
        noValidate
        autoComplete='off'
      >
        <div className='form-control'>
          <TextField
            fullWidth
            id='name'
            name='name'
            label='Name'
            variant='outlined'
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className='form-control'>
          <TextField
            fullWidth
            id='email'
            name='email'
            label='Email'
            variant='outlined'
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className='form-control'>
          <TextField
            fullWidth
            id='channel'
            name='channel'
            label='Channel'
            variant='outlined'
            {...formik.getFieldProps('channel')}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className='error'>{formik.errors.channel}</div>
          ) : null}
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
