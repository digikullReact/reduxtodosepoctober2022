import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {useSelector,useDispatch} from 'react-redux';
import { Button, Stack } from '@mui/material';
import { deleteTodo,editTodo } from '../slices/todoslice';




export default function ShowProp({state}) {
const dispatch=useDispatch();

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
          editable: false,
        },
      
        {
          field: 'action',
          headerName: 'Delete',
          width: 250,
          editable: true,
          renderCell: (params) => {
              const onClick = (e) => {
                  const currentRow = params.row;
                  dispatch(deleteTodo(currentRow.id));
                  //return alert(JSON.stringify(currentRow, null, 4));
                  // dispatch the action here
                };
                
                const onClickEdit = (e) => {
                    const currentRow = params.row;
                    console.log(currentRow);
                    dispatch(editTodo(currentRow))
                    //return alert(JSON.stringify(currentRow, null, 4));
                    // dispatch the action here
                  };
                return (
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="warning" size="small" onClick={onClickEdit}>Edit</Button>
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