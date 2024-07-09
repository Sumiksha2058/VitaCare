import React from 'react';
import DonorDashboard from './Dashboard';
import './Profile.scss';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Edit from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import TextField  from '@mui/material/TextField';
import { Link } from 'react-router-dom';


function Setting() {
  return (
    <div className="page-container">
      <DonorDashboard />
      <div className="content">
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Change Password
                </AccordionSummary>
                <AccordionDetails>
                <Grid  md="5">
                <TextField
                  required
                  id="filled-required"
                  label="Email"
                  type='email'
                  variant="standard"
                  fullWidth={true}
                />
                </Grid>

                <Grid md="5">
                <TextField
                  required
                  id="filled-required"
                  label="Old Password"
                  type="password"
                  variant="standard"
                  fullWidth={true}
                />
                </Grid>

                <Grid md="5">
                <TextField
                  required
                  id="filled-required"
                  label="New Password"
                  type="password"
                  variant="standard"
                  fullWidth={true}
                />
                </Grid>
                <Grid md="5">
                <TextField
                  required
                  id="filled-required"
                  label="Conform Password"
                  type="password"
                  variant="standard"
                  fullWidth={true}
                />
                </Grid>
                
                <Typography align="left">
                 
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
                  <Button variant="contained" type='submit' color="primary">Change Password</Button>

                </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                 Diactivate your account
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Setting;
