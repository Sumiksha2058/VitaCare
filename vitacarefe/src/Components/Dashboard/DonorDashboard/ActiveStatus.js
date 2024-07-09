import React from 'react';
import DonorDashboard from './Dashboard';
import './Profile.scss'; // Import your CSS file for additional styling
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Edit from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';


function Profile() {
  return (
    <div className="page-container">
      <DonorDashboard />
      <div className="content">
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={12} sm={12} lg={12}>

              <Typography>This is Status page</Typography>

            </Grid>
     
          </Grid>

     
        </Box>
    
       
      </div>
    </div>
  );
}

export default Profile;
