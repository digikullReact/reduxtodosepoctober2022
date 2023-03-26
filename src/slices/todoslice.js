import { createSlice } from '@reduxjs/toolkit';

const initialState={
    todos:[]

}
const todoSlice=createSlice({
  name:"todoSlice",
  initialState,
  reducers:{
    addTodo:(state,action)=>{
      state.todos.push(action.payload);

    }


  }



})

export const {addTodo}=todoSlice.actions;
export default todoSlice.reducer;