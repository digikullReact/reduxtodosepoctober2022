import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPosts } from '../thunks/api_thunk';
import ShowProp from "./ShowProp";
const Api = () => {
const dispatch=useDispatch();

const tasks=useSelector(function(globalState){
  return globalState.todoReducer.tasks;
})
console.log("tasks----",tasks);
const [state,setState]=useState(0);
const handleClick=()=>{
  setState(state+1);
}

useEffect(()=>{  // this version of useEffect will be trigerred every time the state is changed

    dispatch(fetchPosts());

},[])

  return (
    <div>

      <button onClick={handleClick}>
        Click
      </button>


<ShowProp state={tasks}/>


    </div>
  )
}

export default Api