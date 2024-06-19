import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  MenuItem,
  TextField,
  Grid,
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  height: 100,
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Monthly Water Extraction (Dec 2023)",
    },
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 45, 50, 60, 70, 75],
      label: "Water Consumption (KL)",
      backgroundColor: "#0AB8D9",
    },
  ],
};

export default function WaterUsageReport() {
  return (
    <Card sx={{backgroundColor: '#f6f6f8'}}>
      <CardContent>
        
        <Grid container alignItems="center">
          {/* Typography on the left */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Water Usage Report</Typography>
          </Grid>
          
          {/* TextFields on the right */}
          <Grid item xs={12} md={8}>
            <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
              <TextField
                select
                label="Monthly"
                value="Monthly"
                size="small"
                sx={{ width: "30%" }}
              >
                <MenuItem value="Daily">Daily</MenuItem>
                <MenuItem value="Monthly">Monthly</MenuItem>
              </TextField>
              <TextField
                select
                label="Last 12 Months"
                value="Last 12 Months"
                size="small"
                sx={{ width: "30%", marginInlineStart: 2 }}
              >
                <MenuItem value="Custom">Custom</MenuItem>
                <MenuItem value="Last 3 Months">Last 3 Months</MenuItem>
                <MenuItem value="Last 6 Months">Last 6 Months</MenuItem>
                <MenuItem value="Last 9 Months">Last 9 Months</MenuItem>
                <MenuItem value="Last 12 Months">Last 12 Months</MenuItem>
              </TextField>
            </Box>
          </Grid>
        </Grid>
        <Card>
          <CardContent>
        <Box sx={{ mt: 3 }}>
          <Bar data={data} options={options} />
        </Box>
      
      </CardContent>
    </Card>
      </CardContent>
    </Card>
  );
}
