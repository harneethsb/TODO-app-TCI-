export let initialState = {
    data:[
{
    from:'1',
    to:'10',
    status: []
}
]}

  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ROW':
            return {
              ...state,
            [state.data]: state.data.push({from:'', to:'', status: []})
            };
        case 'ROW_VALUES':
          return {
            ...state,

            data: [
                ...state.data.slice(0, action.payload.index),
                {
                  ...state.data[action.payload.index],
                  [action.payload.key]: action.payload[action.payload.key],
                },
                ...state.data.slice(action.payload.index + 1),
              ]
          };
          case 'DELETE_ROW':
            return {
              ...state,
            [state.data]: action.payload
            };
        default:
          return state;
      }
  };
  
  export default rootReducer;
  