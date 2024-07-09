import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { TextField, Button, Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Head from './Head';
import Footer from "./Footer";

const steps = ['Personal Information', 'Address', 'Create an ad'];

export default function Membership() {
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    gender: '',
    dob: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  useEffect(() => {
    validateCurrentStep();
  }, [activeStep, formData]);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Form Data Submitted:', formData);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const validateCurrentStep = () => {
    if (activeStep === 0) {
      const { fname, lname, phone, gender, dob } = formData;
      setIsNextDisabled(!(fname && lname && phone && gender && dob));
    } else if (activeStep === 1) {
      const { address1, city, state, zip } = formData;
      setIsNextDisabled(!(address1 && city && state && zip));
    }
  };

  const isPersonalInformationStep = activeStep === 0;
  const isAddressStep = activeStep === 1;

  return (
    <div>
      <Head />
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <form
              sx={{ mt: 2, mb: 1, py: 1 }}
              className='FormContent'
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {isPersonalInformationStep && (
                <React.Fragment>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        margin="normal"
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        margin="normal"
                        required
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    sx={{ m: 1 }}
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth
                  />

                  <TextField
                    sx={{ m: 1 }}
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth
                  />

                  <TextField
                    sx={{ m: 1 }}
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </React.Fragment>
              )}

              {isAddressStep && (
                <React.Fragment>
                  <TextField
                    sx={{ m: 1 }}
                    label="Address Line 1"
                    name="address1"
                    value={formData.address1}
                    onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth
                  />

                  <TextField
                    sx={{ m: 1 }}
                    label="Address Line 2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                  />

                  <TextField
                    sx={{ m: 1 }}
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    margin="normal"
                    required
                    fullWidth
                  />

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        margin="normal"
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Zip Code"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        margin="normal"
                        required
                      />
                    </Grid>
                  </Grid>
                </React.Fragment>
              )}

            </form>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button
                onClick={handleNext}
                sx={{ mr: 1 }}
                disabled={isNextDisabled}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
    <Footer />
    </div>
  );
}
