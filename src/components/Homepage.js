import React, { useEffect, useReducer, useState } from "react";
import RowContainer from "./RowContainer";
import { Button } from "@mui/material";
import rootReducer, { initialState } from "../store/reducers";
import { addRowValues, deleteRow } from "../action";

const Homepage = ()=>{
    const [state, dispatch] = useReducer(rootReducer, initialState);

    async function getStatus() {
        const promises =  state.data.map(async (row) => {
          let arr = [];
          for (let i = row.from; i < row.to; i++) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
                const data = await response.json();
                arr.push(data.completed);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
          }
      
          return arr; 
        });
              const statusArrays = await Promise.all(promises);
       await statusArrays.forEach( (statusArray, index) => {
            dispatch(addRowValues({ status: statusArray, key: 'status', index }));
        });
      }
      
const validateData = ()=>{
    if(state.data[0].from !== '1' || state.data[state.data.length - 1].to !== '10'){
        alert('Range is not correct')
        return
    }
    for (let i = 1; i < state.data.length; i++) {
        if (state.data[i].from - state.data[i - 1].to > 1) {
          alert('There is a gap between consecutive groups.');
          return
        }
        else  if (state.data[i].from <= state.data[i - 1].to) {
           alert('There is an overlap between consecutive groups.');
           return
          }
      }
      getStatus()
}

const DeleteBtn = (index)=>{
    let dupState = state.data
    dupState.splice(index,1)
    dispatch(deleteRow(dupState))
}
    return (
        <div>
            <h3>ToDo List</h3>
            <RowContainer state={state.data} dispatch={dispatch} DeleteBtn={DeleteBtn}/>  
            <Button variant="contained" onClick={()=>validateData()}>Show Status</Button>          
        </div>
    )
}
export default Homepage;
