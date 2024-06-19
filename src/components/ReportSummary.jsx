import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import './ReportSummary.css'

const columns = [
  { field: 'month', headerName: 'Month', width: 150 },
  { field: 'workHours', headerName: 'Work Hours', width: 150 },
  { field: 'avgFlowRate', headerName: 'Avg. Flow Rate (M³/S)', width: 200 },
  { field: 'avgForwardFlow', headerName: 'Avg. Forward Flow (L)', width: 200 },
  { field: 'avgReverseFlow', headerName: 'Avg. Reverse Flow (L)', width: 200 },
  { field: 'consumption', headerName: 'Consumption (KL)', width: 150 },
];

const rows = [
  { id: 1, month: 'January 2023', workHours: '1 HR 21 Mins', avgFlowRate: 1.37968, avgForwardFlow: 813, avgReverseFlow: 1.42, consumption: 6.71 },
  { id: 2, month: 'February 2023', workHours: '1 HR 02 Mins', avgFlowRate: 1.38346, avgForwardFlow: 541, avgReverseFlow: 1.38, consumption: 6.79 },
  { id: 3, month: 'March 2023', workHours: '1 HR 21 Mins', avgFlowRate: 1.37968, avgForwardFlow: 813, avgReverseFlow: 1.42, consumption: 6.71 },
  { id: 4, month: 'April 2023', workHours: '1 HR 02 Mins', avgFlowRate: 1.38346, avgForwardFlow: 541, avgReverseFlow: 1.38, consumption: 6.79 },
  { id: 5, month: 'May 2023', workHours: '1 HR 21 Mins', avgFlowRate: 1.37968, avgForwardFlow: 813, avgReverseFlow: 1.42, consumption: 6.71 },
  { id: 6, month: 'June 2023', workHours: '1 HR 02 Mins', avgFlowRate: 1.38346, avgForwardFlow: 541, avgReverseFlow: 1.38, consumption: 6.79 },
  { id: 7, month: 'July 2023', workHours: '1 HR 21 Mins', avgFlowRate: 1.37968, avgForwardFlow: 813, avgReverseFlow: 1.42, consumption: 6.71 },
  { id: 8, month: 'August 2023', workHours: '1 HR 02 Mins', avgFlowRate: 1.38346, avgForwardFlow: 541, avgReverseFlow: 1.38, consumption: 6.79 },
  { id: 9, month: 'September 2023', workHours: '1 HR 21 Mins', avgFlowRate: 1.37968, avgForwardFlow: 813, avgReverseFlow: 1.42, consumption: 6.71 },
  { id: 10, month: 'October 2023', workHours: '1 HR 02 Mins', avgFlowRate: 1.38346, avgForwardFlow: 541, avgReverseFlow: 1.38, consumption: 6.79 },
  { id: 11, month: 'November 2023', workHours: '1 HR 21 Mins', avgFlowRate: 1.37968, avgForwardFlow: 813, avgReverseFlow: 1.42, consumption: 6.71 },
  { id: 12, month: 'December 2023', workHours: '1 HR 02 Mins', avgFlowRate: 1.38346, avgForwardFlow: 541, avgReverseFlow: 1.38, consumption: 6.79 },

];

export default function ReportSummary() {
  return (
    <>
        <div style={{display: 'flex'}}>
        <Typography variant="h6">Report Summary</Typography>
        <Button variant="contained" className='downloadBtnStyle' sx={{ ml: 'auto', border: '1px solid #B89B07', bgcolor: '#FDB740', color: 'black', borderRadius: '4px'}}>
          Download
          <DownloadIcon/>
        </Button>
        </div>
        <Card>
        <Box sx={{ height: 400, width: '100%', mt: 2 }}>
          <DataGrid rows={rows} columns={columns} pageSize={12} />
        </Box>
    </Card>
        </>
  );
}
