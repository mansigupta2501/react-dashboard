import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  MenuItem,
  TextField,
} from "@mui/material";
import WaterConsumptionSummary from "../components/WaterConsumptionSummary.jsx";
import WaterUsageReport from "../components/WaterUsageReport.jsx";
import ReportSummary from "../components/ReportSummary.jsx";
import MeterInfo from "../components/MeterInfo";
import HeaderButtons from "../components/HeaderButtons.jsx";

export default function Home() {
  return (
    <Box>
     
      <HeaderButtons />
      <MeterInfo />
      <Typography variant="h6">Water Consumption Summary</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <WaterConsumptionSummary />
        </Grid>
        <Grid item xs={12}>
          <WaterUsageReport />
        </Grid>
        <Grid item xs={12}>
          <ReportSummary />
        </Grid>
      </Grid>
    </Box>
  );
}