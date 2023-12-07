import React from "react";
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Avatar } from "@mui/material";
import { addRowValues } from "../action";
const Row = ({rowData, dispatch, index, DeleteBtn, state})=>{
    return (
        <div id='row-container'>
        <div id= 'row-left'>
        {state.length > 1 ? <DeleteIcon style={{color: 'blue'}} onClick={()=>DeleteBtn(index)}/>:''}
        <TextField
          label="Group Name"
          id="outlined-size-small"
          size="small"
          style={{width:'150px'}}
          defaultValue={`Group${index+1}`}
          
        />
         <TextField
          label=""
          id="outlined-size-small"
          size="small"
          type="number"
          style={{width:'50px'}}
          value={rowData.from}
          onChange={(e)=>dispatch(addRowValues({index, from: e.target.value, key:'from'}))}

        />

        <Avatar style={{borderRadius: '0px'}}>
            <ArrowForwardIcon style={{color: 'blue'}}/>
        </Avatar>
            <TextField
          label=""
          id="outlined-size-small"
          size="small"
          type="number"
          style={{width:'50px'}}
          value={rowData.to}
          onChange={(e)=>dispatch(addRowValues({index, to: e.target.value, key: 'to'}))}
          
        />
        </div>
        <div>
        <TextField
        type='text'
          label=""
          id="outlined-size-small"
          size="small"
          style={{width:'500px'}}
          value={rowData.status.toString()}
          disabled
        />
        </div>
        </div>
    )
}
export default Row;
