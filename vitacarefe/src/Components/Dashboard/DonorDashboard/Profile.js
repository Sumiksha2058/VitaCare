import React, { useState } from 'react';
import DonorDashboard from './Dashboard';
import './Profile.scss'; // Import your CSS file for additional styling
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import RedCross from '../../Assets/images/tilkumari.jpg'; // Ensure the correct path
import Divider from '@mui/material/Divider'; // Import Divider from Material-UI
import { WidthFull } from '@mui/icons-material';

function Profile() {
  const [editModePersonal, setEditModePersonal] = useState(false);
  const [editModeAddress, setEditModeAddress] = useState(false);
  const [editModeHealth, setEditModeHealth] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: 'Til',
    lastName: 'Kumari Neupane',
    email: 'til@example.com',
    phoneNumber: '123-456-7890',
    addressLineOne: '123 Main St',
    addressLineTwo: 'Apt 4B',
    city: 'Kathmandu',
    province: 'Bagmati',
    zipcode: '44600',
    bloodGroup: 'A+',
    weight: '60kg',
    height: '165cm',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleEditTogglePersonal = () => {
    setEditModePersonal(!editModePersonal);
  };

  const handleEditToggleAddress = () => {
    setEditModeAddress(!editModeAddress);
  };

  const handleEditToggleHealth = () => {
    setEditModeHealth(!editModeHealth);
  };

  const handleCancelPersonal = () => {
    setEditModePersonal(false);
  };

  const handleCancelAddress = () => {
    setEditModeAddress(false);
  };

  const handleCancelHealth = () => {
    setEditModeHealth(false);
  };

  return (
    <div className="page-container">
      <DonorDashboard />
      <div className="Profilecontent">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item xs={12} md={4}>
              <Avatar
                alt="Til Kumari Neupane"
                
                src={RedCross} 
                sx={{ width: '150px', height: '150px', objectFit: 'contain' }}
              
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography variant="h4">{`${userInfo.firstName} ${userInfo.lastName}`}</Typography>
              </Box>
              <Typography sx={{ marginTop: 2 }}>Update photo</Typography>
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 2, width: '100%' }}>
            <Typography variant='h5' fontWeight={600}>
              Personal Information
              {editModePersonal ? (
                <Button onClick={handleCancelPersonal} startIcon={<CancelIcon />} sx={{ ml: 2 }}>Cancel</Button>
              ) : (
                <Button onClick={handleEditTogglePersonal} startIcon={<EditIcon />} sx={{ ml: 2 }}>Edit</Button>
              )}
            </Typography>
            <Divider sx={{ my: 2 }} /> {/* Divider after Personal Information */}
            <form>
              <Grid container spacing={2}>
                {editModePersonal ? (
                  <>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        variant="outlined"
                        value={userInfo.firstName}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        variant="outlined"
                        value={userInfo.lastName}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        variant="outlined"
                        value={userInfo.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phoneNumber"
                        variant="outlined"
                        value={userInfo.phoneNumber}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" onClick={handleEditTogglePersonal}>Save</Button>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12} md={6}>
                      <Typography><strong>First Name:</strong> {userInfo.firstName}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography><strong>Last Name:</strong> {userInfo.lastName}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography><strong>Email:</strong> {userInfo.email}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography><strong>Phone Number:</strong> {userInfo.phoneNumber}</Typography>
                    </Grid>
                  </>
                )}
              </Grid>
            </form>

            <Typography variant='h5' marginTop={3} fontWeight={600}>
              Address
              {editModeAddress ? (
                <Button onClick={handleCancelAddress} startIcon={<CancelIcon />} sx={{ ml: 2 }}>Cancel</Button>
              ) : (
                <Button onClick={handleEditToggleAddress} startIcon={<EditIcon />} sx={{ ml: 2 }}>Edit</Button>
              )}
            </Typography>
            <Divider sx={{ my: 2 }} /> {/* Divider after Address */}
            <form>
              <Grid container spacing={2}>
                {editModeAddress ? (
                  <>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Address Line 1"
                        name="addressLineOne"
                        variant="outlined"
                        value={userInfo.addressLineOne}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Address Line 2"
                        name="addressLineTwo"
                        variant="outlined"
                        value={userInfo.addressLineTwo}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Province"
                        name="province"
                        variant="outlined"
                        value={userInfo.province}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="City"
                        name="city"
                        variant="outlined"
                        value={userInfo.city}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Zip Code"
                        name="zipcode"
                        variant="outlined"
                        value={userInfo.zipcode}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" onClick={handleEditToggleAddress}>Save</Button>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12} md={6}>
                      <Typography><strong>Address Line 1:</strong> {userInfo.addressLineOne}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography><strong>Address Line 2:</strong> {userInfo.addressLineTwo}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography><strong>Province:</strong> {userInfo.province}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography><strong>City:</strong> {userInfo.city}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography><strong>Zip Code:</strong> {userInfo.zipcode}</Typography>
                    </Grid>
                  </>
                )}
              </Grid>
            </form>

            <Typography variant='h5' marginTop={3} fontWeight={600}>
              Health Information
              {editModeHealth ? (
                <Button onClick={handleCancelHealth} startIcon={<CancelIcon />} sx={{ ml: 2 }}>Cancel</Button>
              ) : (
                <Button onClick={handleEditToggleHealth} startIcon={<EditIcon />} sx={{ ml: 2 }}>Edit</Button>
              )}
            </Typography>
            <Divider sx={{ my: 2 }} /> {/* Divider after Health Information */}
            <form>
              <Grid container spacing={2}>
                {editModeHealth ? (
                  <>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Blood Group"
                        name="bloodGroup"
                        variant="outlined"
                        value={userInfo.bloodGroup}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Weight"
                        name="weight"
                        variant="outlined"
                        value={userInfo.weight}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        fullWidth
                        label="Height"
                        name="height"
                        variant="outlined"
                        value={userInfo.height}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" onClick={handleEditToggleHealth}>Save</Button>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={3}>
                      <Typography><strong>Blood Group:</strong> {userInfo.bloodGroup}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography><strong>Weight:</strong> {userInfo.weight}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography><strong>Height:</strong> {userInfo.height}</Typography>
                    </Grid>
                  </>
                )}
              </Grid>
            </form>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Profile;
