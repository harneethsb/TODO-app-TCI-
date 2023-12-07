// src/actions.js
export const addRow = () => ({
    type: 'ADD_ROW',
  });
  
  export const addRowValues = (payload) => ({
    type: 'ROW_VALUES',
    payload
  });
  export const deleteRow = (payload) => ({
    type: 'DELETE_ROW',
    payload
  });