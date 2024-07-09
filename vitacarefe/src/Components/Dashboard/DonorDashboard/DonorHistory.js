import React from 'react';
import DonorDashboard from './Dashboard';
import './Profile.scss'; // Import your CSS file for additional styling
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCellAccept = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#D6B2B2',
    color: theme.palette.common.dark,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableCellTotal = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#D6B2B2',
    color: theme.palette.common.dark,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRowAccept = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableRowTotal = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(username, date, location) {
  return { username, date, location };
}

const rows = [
  createData('John Doe', '2024-06-01', 'New York'),
  createData('Jane Smith', '2024-06-02', 'Los Angeles'),
  createData('Alice Johnson', '2024-06-03', 'Chicago'),
];

function DonorHistory() {
  return (
    <div className="page-container">
      <DonorDashboard />
      <div className="content">
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid item xs={12}>
              <Typography variant="h2" textAlign="center">
                Thank You For Joining Us!!
              </Typography>
              <Typography variant="h6" marginTop={2}>
                Accept Notification
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCellAccept>User Name</StyledTableCellAccept>
                      <StyledTableCellAccept align="right">Date</StyledTableCellAccept>
                      <StyledTableCellAccept align="right">Location</StyledTableCellAccept>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRowAccept key={row.username}>
                        <StyledTableCellAccept component="th" scope="row">
                          {row.username}
                        </StyledTableCellAccept>
                        <StyledTableCellAccept align="right">{row.date}</StyledTableCellAccept>
                        <StyledTableCellAccept align="right">{row.location}</StyledTableCellAccept>
                      </StyledTableRowAccept>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography variant="h6" marginTop={2}>
                Total Notification
              </Typography>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCellTotal>User Name</StyledTableCellTotal>
                      <StyledTableCellTotal align="right">Date</StyledTableCellTotal>
                      <StyledTableCellTotal align="right">Location</StyledTableCellTotal>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRowTotal key={row.username}>
                        <StyledTableCellTotal component="th" scope="row">
                          {row.username}
                        </StyledTableCellTotal>
                        <StyledTableCellTotal align="right">{row.date}</StyledTableCellTotal>
                        <StyledTableCellTotal align="right">{row.location}</StyledTableCellTotal>
                      </StyledTableRowTotal>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default DonorHistory;
