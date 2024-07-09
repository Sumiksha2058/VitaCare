import React, { useState } from 'react';
import './SignUp.scss';
import { TextField, Button, Typography, Paper } from '@mui/material';
import signupbg from './Assets/images/signupbg.jpg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Head from './Head';
import Footer from "./Footer";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}));

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
       <Head />
    <div className='SignUpContentWapper'>
      <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container spacing={2} sx={{ maxWidth: 1000 }}>
          <Grid item xs={12} md={6}>
            <Item className='imageContainer'>
              <img src={signupbg} alt="signup" />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="h5" align="center" gutterBottom>
                Sign Up
              </Typography>
              <form className='FormContent' onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                />
                
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                />
                <TextField
                  label="Conform Password"
                  name="conpassword"
                  type="password"
                  value={formData.conpassword}
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                />
                <Button className='SignUpButton' type="submit" variant="contained" style={{ marginTop: '5px' }}>
                  Sign Up
                </Button>
                <Typography align="left">
              <Link to="/membership" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                <span>Complete form to become member</span>
              </Link>
            </Typography>
              </form>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
    <Footer />
    </div>
  );
}

export default Signup;
