import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addPosts, fetchPosts,deletePosts } from '../thunks/api_thunk'; // we will dispatch them in the same way we dispatched the reducer actions
import ShowProp from "./ShowProp";
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import ShowPropApi from './ShowPropApi';


const Api = () => {
  function transformData(data){

    return  data.map(ele=>{
      return {
        id:ele._id,
        task:ele._source.tasks,
        data:ele._source.date
      }
  
  
      
    })
    
  }
  

const dispatch=useDispatch();

const tasks=useSelector(function(globalState){
  return transformData(globalState.todoReducer.tasks);
})
console.log("tasks----",tasks);
const [state,setState]=useState(0);
const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
const [deleted,setDeleted]=useState(false);


const [task,setTask]=useState("");

const handleChange = (newValue) => {
  setValue(newValue);
};

const taskChange=(event)=>{
  setTask(event.target.value);
}

const handleClick=()=>{
  // dispatch the action to the reducer
  const payload={tasks:task,date:value};
  dispatch(addPosts(payload));
}

const deleteDispatch=(id)=>{

  dispatch(deletePosts(id)).then(res=>{
    // console.log("Executed After the delete");
    //dispatch(fetchPosts());
    setDeleted(!deleted);

   }).catch(err=>{

   })

}

useEffect(()=>{  // this version of useEffect will be trigerred every time the state is changed

    dispatch(fetchPosts());

},[deleted])

  return (
    <div>

<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '65ch' },
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

      <ShowPropApi state={tasks} deleteDispatch={deleteDispatch}/>

    </Box>


    </div>
  )
}

export default Api