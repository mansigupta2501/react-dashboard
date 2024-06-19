import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  MenuItem,
  TextField,
  Grid,
  Button
} from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './HeaderButtons.css'

export default function HeaderButtons() {
  return (
        <Grid container alignItems="center">
          {/* Typography on the left */}
          <Grid item xs={12} md={7}>
            <Typography variant="h4">Welcome to Dhaara Live Dashboard!</Typography>
          </Grid>

          {/* TextFields on the right */}
          <Grid item xs={12} md={5} alignItems="flex-end" justifyContent="end">
          <Box display="flex" justifyContent="flex-end">
          <Button
            variant="outlined"
            sx={{ borderColor: 'black', color: 'black', mx: 0.5 }}
          >
           Download User Manual
          </Button>
          <Button
          className="buttonStyle"
            variant="outlined"
            sx={{ borderColor: 'black', color: 'black', mx: 0.5 }}
          >
           <RefreshIcon />
          </Button>
          <Button
          className="buttonStyle"
            variant="outlined"
            sx={{ borderColor: 'black', color: 'black', mx: 0.5 }}
          >
           <MoreHorizIcon/>
          </Button>
          </Box>
          </Grid>
        </Grid>
        
  );
}

