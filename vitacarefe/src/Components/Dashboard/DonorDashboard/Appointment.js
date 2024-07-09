import React from 'react';
import DonorDashboard from './Dashboard';
import './Profile.scss'; // Import your CSS file for additional styling
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Edit from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import nepalRedCross from '../../Assets/images/nepalRedCross.png';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Padding } from '@mui/icons-material';
import { Button } from '@mui/material';

function Profile() {
  return (
    <div className="page-container">
      <DonorDashboard />
      <div className="content">
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Grid containersx={{ alignItems: 'center', textAlign:'center' }} >
            <Grid item   xs={12} md={12} sm={12} lg={12}>
              <Typography variant='h4' fontWeight={'700'} textAlign={'center'}
              >
                Save lives by donating blood
              </Typography>
              <Typography variant='h6' fontWeight={'600'}
              >
                Save lives by donating blood
              </Typography>

            </Grid>
            <Grid item   xs={12} md={12} sm={12} lg={12}>
              <Typography variant='h6' fontWeight={'500'} marginTop={2}
              >
                Save lives by donating blood
              </Typography>

            </Grid> 
            <Grid item  xs={12} md={12} sm={12} lg={12} sx={{ display: 'flex', alignItems:'end'}} >
            <Card sx={{maxWidth:250, marginTop:2, padding:2}}>
              <CardContent>
                <Typography> <AccountCircle /> Til Kumari Neupane</Typography>
                <Typography>Date: 2024-05-06</Typography>
                <Typography>Location: Dhulikhel</Typography>
                <Typography>Contact No.: 9847031062</Typography>
              </CardContent>
              
            </Card>
            <Button  variant="contained" color="success" sx={{ marginLeft:1}}>Accept</Button>
            <Button variant="contained" color="error" sx={{marginLeft:1}}>Decline</Button>
            </Grid>
            <Grid item  xs={12} md={12} sm={12} lg={12} sx={{ display: 'flex', alignItems:'end'}} >
            <Card sx={{maxWidth:250, marginTop:2, padding:2}}>
              <CardContent>
                <Typography> <AccountCircle /> Til Kumari Neupane</Typography>
                <Typography>Date: 2024-05-06</Typography>
                <Typography>Location: Dhulikhel</Typography>
                <Typography>Contact No.: 9847031062</Typography>
              </CardContent>
              
            </Card>
            <Button  variant="contained" color="success" sx={{ marginLeft:1}}>Accept</Button>
            <Button variant="contained" color="error" sx={{marginLeft:1}}>Decline</Button>
            </Grid>
            <Grid item  xs={12} md={12} sm={12} lg={12} sx={{ display: 'flex', alignItems:'end'}} >
            <Card sx={{maxWidth:250, marginTop:2, padding:2}}>
              <CardContent>
                <Typography> <AccountCircle /> Til Kumari Neupane</Typography>
                <Typography>Date: 2024-05-06</Typography>
                <Typography>Location: Dhulikhel</Typography>
                <Typography>Contact No.: 9847031062</Typography>
              </CardContent>
              
            </Card>
            <Button  variant="contained" color="success" sx={{ marginLeft:1}}>Accept</Button>
            <Button variant="contained" color="error" sx={{marginLeft:1}}>Decline</Button>
            </Grid>
            <Grid item  xs={12} md={12} sm={12} lg={12} sx={{ display: 'flex', alignItems:'end'}} >
            <Card sx={{maxWidth:250, marginTop:2, padding:2}}>
              <CardContent>
                <Typography> <AccountCircle /> Til Kumari Neupane</Typography>
                <Typography>Date: 2024-05-06</Typography>
              <Typography>Location: Dhulikhel</Typography>
                <Typography>Contact No.: 9847031062</Typography>
              </CardContent>
              
            </Card>
            <Button  variant="contained" color="success" sx={{ marginLeft:1}}>Accept</Button>
            <Button variant="contained" color="error" sx={{marginLeft:1}}>Decline</Button>
            </Grid>

            <Grid item  xs={12} md={12} sm={12} lg={12} sx={{ display: 'flex', alignItems:'end'}} >
            <Card sx={{maxWidth:250, marginTop:2, padding:2}}>
              <CardContent>
                <Typography> <AccountCircle /> Til Kumari Neupane</Typography>
                <Typography>Date: 2024-05-06</Typography>
              <Typography>Location: Dhulikhel</Typography>
                <Typography>Contact No.: 9847031062</Typography>
              </CardContent>
              
            </Card>
            <Button  variant="contained" color="success" sx={{ marginLeft:1}}>Accept</Button>
            <Button variant="contained" color="error" sx={{marginLeft:1}}>Decline</Button>
            </Grid>
          </Grid>

     
        </Box>
    
       
      </div>
    </div>
  );
}

export default Profile;
