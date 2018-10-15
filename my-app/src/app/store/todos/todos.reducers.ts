export const ADD_TODO = 'ADD_TODO';

const initialState = [{
  id: 1,
  title: 'Wake Up!'
}];

export function todoListReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        const todo = action.payload;
          const todos = [...state, todo];
          return todos;
        default:
          return state;
    }
}
