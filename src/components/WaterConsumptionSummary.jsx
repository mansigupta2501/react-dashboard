import React from 'react';
import { Card, CardContent, Typography, Grid, Box ,Divider , Badge} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const WaterConsumptionSummary = () => {
  return (
  
    <Grid container spacing={2}>
      {/* Daily Report Card */}
      
      <Grid item xs={12} md={6}>

        <Card sx={{  width: '100%', backgroundColor: '#f6f6f8'}}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleIcon color="success" sx={{ mr: 1 }} />
              <Typography variant="body2">Daily Report</Typography>
              
            </Box>
            <Divider />
            <Typography sx={{mt:2}} variant="body2">Monday 18 Dec 2023 | 08:00 AM -  Tuesday 19 Dec 2023 | 08:00 AM</Typography>
            <div style={{display:'flex' ,justifyContent:'space-between'}}>
            <Typography variant="h4" sx={{ mt: 1 }}>35.9 KL</Typography>
            <Typography  sx={{ mt: 1 , fontSize:'12px' }}>Pump Working Hours
            <p> 1 HOUR 54 MINS</p>
            </Typography>
            <Typography  sx={{ mt: 1, fontSize:'12px' }}>Average Flow Rate
              <p>1M/S</p>
            </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
              Mon, 9 Dec 2023 8:00 AM
            </Typography>
            <Typography variant="body2" color="error">
              9.14% more from last day
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Monthly Report Card */}
      <Grid item xs={12} md={6}>
        <Card sx={{ height: '100%', width: '100%', backgroundColor: '#f6f6f8' }}>
          <CardContent>
       
          <Typography variant="body2">Monthly Report</Typography>
           
            <Divider />
            <Typography sx={{mt:2}} variant="body2">Monday 18 Dec 2023 | 08:00 AM -  Tuesday 19 Dec 2023 | 08:00 AM</Typography>
            <Box sx={{ mt: 2 }}>
              
            
              <div style={{display:'flex' ,justifyContent:'space-between'}}>
            <Typography variant="h4" sx={{ mt: 1 }}>942.22 KL</Typography>
            
            <Typography  sx={{ mt: 1 , fontSize:'12px' }}>Pump Working Hours
            <p> 1 HOUR 54 MINS</p>
            <p> MAX EXTRACTION</p>
            <p>1200KL</p>
            </Typography>
            <Typography  sx={{ mt: 1, fontSize:'12px' }}>Average Flow Rate
              <p>1M/S</p>
              <p> AVERAGE EXTRACTION</p>
             <p>800KL</p>
            </Typography>
            </div>
          
            <Typography style={{marginTop:"-60px"}} variant="body2" color="green">
              8% LESS from last Month
            </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default WaterConsumptionSummary;