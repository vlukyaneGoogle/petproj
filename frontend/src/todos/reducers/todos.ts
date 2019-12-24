export const todos = (state = [], action: any) => {
  switch (action.type) {
      case 'LOAD_TODOS':
          return [...state, ...action.payload];

      case 'ADD_TODO':
          return [action.payload, ...state];

      default:
          return state;
  }
};
