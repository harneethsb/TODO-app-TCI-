import React from 'react'
import Row from './Row'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import { addRow } from '../action';

const RowContainer = ({state, dispatch, DeleteBtn})=>{
    return(
        <div id='row-parent'>
        {state.map((rowData,index)=> <Row key={index} state={state} rowData={rowData} dispatch={dispatch} index={index} DeleteBtn={DeleteBtn}/>)
}
        <div id= 'add-btn'>
        <AddIcon style={{color: 'blue'}}/>
        <Button variant='text'onClick={()=>dispatch(addRow())}> Add Group</Button>
        </div>
        </div>
    )
}
export default RowContainer