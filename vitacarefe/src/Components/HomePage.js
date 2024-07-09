import React, { Component } from "react";
import './HomePage.scss';
import Head from './Head';
import Footer from "./Footer";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import donate1 from './Assets/images/donate1.png';
import donateBloodIcon from './Assets/images/donateBlood Button.png';
import Paper from '@mui/material/Paper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import kabhre from './Assets/images/kabhre.png';
import nepalRedCross from './Assets/images/nepalRedCross.png';
import lionsClub from './Assets/images/lionsClub.png';

const createData = (description) => ({ description });

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  alignItems: 'center',
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#f50057',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  // backgroundColor: theme.palette.grey[200], // Using the grey[200] shade from theme.palette.grey
}));

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleOpen = () => {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    const rows = [
      createData('Emily Johnson is undergoing a critical procedure and requires AB-positive blood. Donations can be made at the hospitals donation center. Contact: 567-8901 for more information.'),
      createData('Rajesh Kumar is in urgent need of B-negative blood following a major accident. Please reach out to the hospital’s blood donation services at (345) 678-9012 if you can assist.'),
      createData('Maria Garcia requires A-positive blood for an ongoing treatment. Donors are requested to visit the hospitals blood donation unit or call (456) 789-0123.'),
      createData('Emily Johnson is undergoing a critical procedure and requires AB-positive blood. Donations can be made at the hospitals donation center. Contact: 567-8901 for more information.'),
      createData('Rajesh Kumar is in urgent need of B-negative blood following a major accident. Please reach out to the hospital’s blood donation services at (345) 678-9012 if you can assist.'),
      createData('Maria Garcia requires A-positive blood for an ongoing treatment. Donors are requested to visit the hospitals blood donation unit or call (456) 789-0123.'),
    ];
    return (
      <div>
        <Head />
        <StyledPaper className="homePageContainer">
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8} sm={3} lg={8}>
                <Slider {...settings}>
                  <div className='SmallContainerDonationButton'>
                    <Card sx={{ display: 'flex', position: 'relative' }}>
                      <CardMedia
                        component="img"
                        sx={{ width: '100%' }}
                        image={donate1}
                        alt="Donate blood"
                      />
                    </Card>
                  </div>
                  <div className='SmallContainerDonationButton'>
                    <Card sx={{ display: 'flex', position: 'relative' }}>
                      <CardMedia
                        component="img"
                        sx={{ width: '100%' }}
                        image={donate1}
                        alt="Donate blood"
                      />
                    </Card>
                  </div>
                </Slider>
              </Grid>
              <Grid item xs={12} md={4} sm={3} lg={12}>
                <div className="sidebarContainer">
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleOpen}
                      startIcon={<img src={donateBloodIcon} alt="donate blood" className="button-icon" />}
                    ></Button>
                  </ThemeProvider>
                  <Card className="RecentEvent" sx={{ maxWidth: '100%', padding: 1 }}>
                    <CardContent>
                      <Typography className='title' gutterBottom variant="h6" component="div">
                        Recent Events
                      </Typography>
                      <Box sx={{ height: 148, overflow: 'auto' }}>
                        <div className='WrapRecentEvent'>
                          <div className='text'>
                            <Typography variant="body2">Date: 2024 July 20</Typography>
                            <Typography variant='body2'>Time: 1:00 PM</Typography>
                            <Typography variant='body2'>Location: Banepa</Typography>
                          </div>
                          <div className='button'>
                            <Button variant="contained" color="error">JOIN</Button>
                          </div>
                        </div>
                        <Divider />
                        <div className='WrapRecentEvent'>
                          <div className='text'>
                            <Typography variant="body2">Date: 2024 July 21</Typography>
                            <Typography variant='body2'>Time: 2:00 PM</Typography>
                            <Typography variant='body2'>Location: Kathmandu</Typography>
                          </div>
                          <div className='button'>
                            <Button variant="contained" color="error">JOIN</Button>
                          </div>
                        </div>
                        {/* ... more events */}
                      </Box>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            </Grid>

            {/* Modal for login */}
            <Modal
              open={open}
              onClose={this.handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                outline: 'none' // Added to remove outline when focused
              }}>
                <IconButton
                  aria-label="close"
                  onClick={this.handleClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Login
                </Typography>
                <Divider orientation="vertical" flexItem />
                <TextField
                  required
                  id="filled-required"
                  label="Email"
                  type='email'
                  variant="standard"
                  fullWidth={true}
                />
                <TextField
                  required
                  id="filled-required"
                  label="Password"
                  type="password"
                  variant="standard"
                  fullWidth={true}
                />
                <Typography align="left">
                  <Link to="/signup" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                    <span>Don't have an account? Become our Member</span>
                  </Link>
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button variant="contained" sx={{ ml: 2 }} type='submit' color="primary">Login</Button>
                  <Button variant="contained" sx={{ ml: 2 }} color="error" onClick={this.handleClose}>Close</Button>
                </Box>
              </Box>
            </Modal>

          </Box>
          {/* Headline section */}
          <div className='HeadlineContainer'>
            <Typography variant='body1' className='marquee'>
              We are excited to announce a blood donation camp and we invite you to participate in this life-saving event. Date: July 25, 2034 Time: 1:00PM ....
            </Typography>
          </div>

          <Box className='MidContainer' sx={{ display: 'flex', flexWrap: 'wrap', padding: '1rem' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', }}>
                <Box className='WhyToContainer' sx={{ padding: '2rem', paddingRight: '0', margin: '1rem', width: '100%' }}>
                  <h1>About VitaCare</h1>
                  <p>
                    We are dedicated to providing you with seamless and efficient services,
                    including donor registration, blood collection, inventory management,
                    and distribution, to ensure the highest standards of healthcare quality
                    and safety.
                  </p>

                  <Button color='primary'>Learn More</Button>

                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card className='NewsFeedContainer' sx={{ margin: '1rem', padding: '1rem', width: '100%' }}>
                  <CardContent className='SubNewsFeed'>
                    <Typography className='title' variant='h4' fontWeight={700}>
                      News Feed
                    </Typography>
                    <Box sx={{ width: '100%', height: 388, overflow: 'auto', marginTop: '1rem' }}>
                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableBody>
                            {rows.map((row, index) => (
                              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                  <ArrowRightIcon />
                                  {row.description}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Grid container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom:4.5 }} item xs={12} md={12} lg={12}>
            <Typography
              className="titlePatner"
              variant="h4"
              fontWeight={700}
            >
              Partnership
            </Typography>
            <Divider className="patnershipDevider" />
          </Grid>

          <Box className='MidContainer' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <Grid container>
              <Grid item xs={12} md={3} sm={4} lg={12}>
                <CardMedia
                  className='img1'
                  component="img"

                  image={kabhre}
                  alt="kabhre"
                />
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={8}>
                <CardMedia
                  className='img2'
                  component="img"

                  image={nepalRedCross}
                  alt="kabhre"
                />
              </Grid>
              <Grid item xs={12} md={3} sm={4} lg={12}>
                <CardMedia
                  className='img3'
                  component="img"

                  image={lionsClub}
                  alt="kabhre"
                />
              </Grid>
            </Grid>
          </Box>
        </StyledPaper>
        <Footer />
      </div>
    );
  }
}
