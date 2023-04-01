import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts,addPosts } from '../thunks/api_thunk';

const initialState={
    todos:[],
    tasks:[]

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
      

      let filteredData=state.todos.filter(ele=>ele.id!=action.payload.id);
      state.todos=[...filteredData,action.payload];

    }


  },

  // it will all async thunk operations here --->
  extraReducers:(builder)=>{
    // this call will happen automatically bythunk
    builder.addCase(fetchPosts.fulfilled,(state,action)=>{
      state.tasks=action.payload.data;

     // debugger;

  });

  builder.addCase(fetchPosts.rejected,(state,action)=>{



});

// if you want to use it you can keep it otherwise you can omit it

builder.addCase(fetchPosts.pending,(state)=>{
          

});


// For Addposts


builder.addCase(addPosts.fulfilled,(state,action)=>{



});

builder.addCase(addPosts.rejected,(state,action)=>{



});

// if you want to use it you can keep it otherwise you can omit it

builder.addCase(addPosts.pending,(state)=>{
        

});

  

}



})

export const {addTodo,deleteTodo,editTodo}=todoSlice.actions;
export default todoSlice.reducer;