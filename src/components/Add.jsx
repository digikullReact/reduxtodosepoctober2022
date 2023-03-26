import React, { useState } from 'react'
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from "uuid";


import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { addTodo } from '../slices/todoslice';
import {useDispatch,useSelector } from "react-redux";
import ShowProp from './ShowProp';



const Add = () => {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const dispatch=useDispatch();

  const state=useSelector(state=>state.todoReducer.todos);
  const [task,setTask]=useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const taskChange=(event)=>{
    setTask(event.target.value);
  }

  const handleClick=()=>{
    // dispatch the action to the reducer
    const payload={task:task,date:value,id:uuidv4()};
    dispatch(addTodo(payload));
  }

  return (
    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '55ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={taskChange} id="outlined-basic" label="Your Task" variant="outlined" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    
      
      
      </Stack>
    </LocalizationProvider>
      <Button onClick={handleClick} variant="contained" style={{marginTop:"20px"}}>Add ToDo</Button>

      <ShowProp state={state}/>

    </Box>

      
    </div>
  )
}

export default Add