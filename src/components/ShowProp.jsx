import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {useSelector} from 'react-redux';
import { Button, Stack } from '@mui/material';




export default function ShowProp({state}) {


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
      
        {
          field: 'action',
          headerName: 'Delete',
          width: 250,
          editable: true,
          renderCell: (params) => {
              const onClick = (e) => {
                  const currentRow = params.row;
                  return alert(JSON.stringify(currentRow, null, 4));
                };
                
                return (
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="warning" size="small" onClick={onClick}>Edit</Button>
                    <Button variant="outlined" color="error" size="small" onClick={onClick}>Delete</Button>
                  </Stack>
                );
          }
        },
        
      
       
      ];
      
   
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