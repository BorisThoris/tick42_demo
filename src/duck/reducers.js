const INITIAL_STATE = { data: false };

const MainReducer = (state = INITIAL_STATE, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "RECEIVE_INITIAL_DATA": {
      const { data } = action;

      return {
        ...newState,
        data,
      };
    }

    case "UPDATE_PROJECT": {
      const { data } = action;

      return {
        ...newState,
        data,
      };
    }

    default:
      return newState;
  }
};

export default MainReducer;
