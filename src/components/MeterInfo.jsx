import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  MenuItem,
  Select,
  ButtonBase,
  FormControl,
  Button,
  Chip,
  Link
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styled } from "@mui/system";
import NetworkCellIcon from "@mui/icons-material/NetworkCell";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import { PiBatteryPlus } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa";
import airtelImg from "../assets/images/airtel.png";
import vodafoneImg from "../assets/images/vodafone.png";
import DownloadIcon from "@mui/icons-material/Download";
import "./MeterInfo.css";

const MeterInfoContainer = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  width: "100%", 
  backgroundColor: '#f6f6f8'
}));

const MeterInfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: theme.spacing(1, 0), 
}));

const MeterStatusChip = styled(Chip)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  backgroundColor: "green",
  color: "white",
}));

const MeterInfo = () => {
  return (
    <MeterInfoContainer>
      <CardContent>
        <Grid container spacing={2}>
          {/* First Column */}
          <Grid item xs={12} md={2}>
            <Grid container direction="column" spacing={1}>
              {/* First Row */}
              <Grid item rowSpacing={2}>
                <FormControl fullWidth>
                  <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                    Select Meter
                  </Typography>
                  <Select
                    defaultValue="FM09889780"
                    size="small"
                    IconComponent={ArrowDropDownIcon}
                    fullWidth
                  >
                    <MenuItem value="FM09889780">FM09889780</MenuItem>
                    <MenuItem value="UY89703546">UY89703546</MenuItem>
                    <MenuItem value="MR98668897">MR98668897</MenuItem>
                    <MenuItem value="JK90767666">JK90767666</MenuItem>
                    
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="body2">Meter Name</Typography>
                <Typography variant="body1">Basement Borewell 1</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Second Column */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={2} alignItems={'center'}>
              {/* First Row */}
              <Grid item  rowSpacing={2}>
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  Castrol Lucknow Plant 2, Plot No. 98, Industrial Area, Basti -
                  209809
                </Typography>
              </Grid>
              {/* Second Row */}
              <Grid item container spacing={2}  alignItems={'center'}>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2">Meter Status</Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MeterStatusChip label="Active" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2">Device Model | Make</Typography>
                  <Typography variant="body1">DN - 150 | 2023</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2">
                    Device Last Calibration Date
                  </Typography>
                  <Typography variant="body1">23/08/2023</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="body2">
                    Next Calibration Due Date
                  </Typography>
                  <Typography variant="body1">20/08/2024</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Third Column */}
          <Grid item xs={12} md={4}>
            <Grid container direction="column" spacing={2}  alignItems={'center'}>
              {/* First Row */}
              <Grid item  rowSpacing={3}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <img
                      src={vodafoneImg}
                      alt="vodafone"
                      style={{ width: "59px", height: "16px" }}
                    />
                    <NetworkCellIcon sx={{ marginBottom: 0 }} />
                    <img
                      src={airtelImg}
                      width="35px"
                      height="20px"
                      alt="airtel"
                    />
                    <SignalCellular4BarIcon sx={{ marginBottom: 0 }} />
                    <Box>
                      <Typography variant="body2" className="batteryStyle">
                        Battery
                      </Typography>
                      <Typography variant="body1">High</Typography>
                    </Box>
                    <PiBatteryPlus
                      className="plusIconStyle"
                      sx={{ marginTop: 1 }}
                    />{" "}
                  </Box>
                </Box>
              </Grid>
              {/* Second Row */}
              <Grid item>
                <FaFilePdf className="pdfIconStyle"/>
                <Link href="#" underline="hover">
                
                Download Calibration Certificate
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </MeterInfoContainer>
  );
};

export default MeterInfo;

