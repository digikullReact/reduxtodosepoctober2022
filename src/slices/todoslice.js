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

    },
    deleteTodo:(state,action)=>{

      let filteredData=state.todos.filter(ele=>ele.id!=action.payload);
      state.todos=filteredData;

    },
    editTodo:(state,action)=>{
      debugger;

      let filteredData=state.todos.filter(ele=>ele.id!=action.payload.id);
      state.todos=[...filteredData,action.payload];

    }


  }



})

export const {addTodo,deleteTodo,editTodo}=todoSlice.actions;
export default todoSlice.reducer;