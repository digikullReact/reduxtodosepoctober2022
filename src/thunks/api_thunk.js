/// Specifically for api communication
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    'fetchPosts',  // name of the operation 
    async () => {

        const configAxios={
            "headers":{
                "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }
        }
       // An async function return a promise
        const res=await axios.get("http://rustycoder.live:8080/get/tasks",configAxios);
        return res;
      
    }
  )

  export const addPosts = createAsyncThunk(
    'addPosts',  // name of the operation 
    async (data) => {
        debugger;

        const configAxios={
            "headers":{
                "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }
        }
       // An async function return a promise
        const res=await axios.post("http://rustycoder.live:8080/add/tasks",data,configAxios);
        return res;
      
    }
  )