import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../testarea/testConstants";

const initialState = {
  data: 42,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
        console.log('incr')
      return { ...state, data: state.data + 1 };

    case DECREMENT_COUNTER:
        console.log('decr')
      return { ...state, data: state.data - 1 };

    default: return state;
  }
  
};

export default testReducer;
