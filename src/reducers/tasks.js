import { ADD_TASK, MARK_TASK, DELETE_TASK } from '../constants/index';

const initialState = [];

const task = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      let newTask = {id: action.randomId, text: action.payload, status: false};
      return [...state, newTask]
    case MARK_TASK:
      let newStateDone = state.map(item => {
        if (item.id === action.payload) { return {...item, ...item.status = !item.status}}
        return item;
      })
      return newStateDone;
    case DELETE_TASK:
      let newStateDelete = state.filter( item => item.id !== action.payload );
      return newStateDelete;
    default:
      return state;
  }
}

export default task;