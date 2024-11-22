import { createStore } from 'redux';

const initialState = {
  tasks: []
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.index)
      };
    default:
      return state;
  }
};

const store = createStore(tasksReducer);

export default store;
