import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <ThemeProvider
            theme={createTheme({
                breakpoints: {
                    values: {
                        laptop: 1024,
                        tablet: 640,
                        mobile: 0,
                        desktop: 1280,
                    },
                },
            })}
        >
            <Box sx={{ backgroundColor: '#f5f5f5', padding: '2em 0' }}>
                <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: '1em', textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography variant='h5' gutterBottom>Contact Us</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <PhoneIcon sx={{ mr: 1 }} />
                                <Typography variant='body1'>98y477734</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <EmailIcon sx={{ mr: 1 }} />
                                <Typography variant='body1'>info@vitacare.com</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LocationOnIcon sx={{ mr: 1 }} />
                                <Typography variant='body1'>Banepa, Kavrepalanchok</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: '1em', textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography variant='h5' gutterBottom>Follow Us</Typography>
                            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'left' } }}>
                                <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: '#3b5998', mr: 1 }}>
                                    <FacebookIcon fontSize="large" />
                                </IconButton>
                                <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: '#e1306c' }}>
                                    <InstagramIcon fontSize="large" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
