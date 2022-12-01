import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
const initialValues = {
  name: 'Urban',
  email: '',
  channel: '',
};
const onSubmit = (values) => {
  console.log('Formik values', values);
};
const validate = (values) => {
  let errors = {};
  const regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email);
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (regex) {
    errors.email = 'Invalid email format';
  }
  if (!values.channel) {
    errors.channel = 'Required';
  }
  return errors;
};

const SimpleForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
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
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
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
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
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
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
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
