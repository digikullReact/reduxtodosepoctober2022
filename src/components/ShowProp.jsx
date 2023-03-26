import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {useSelector} from 'react-redux';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'task',
    headerName: 'Task Name',
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Due Date',
    width: 150,
    editable: true,
  },

 
];



export default function ShowProp({state}) {
   
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={state}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}