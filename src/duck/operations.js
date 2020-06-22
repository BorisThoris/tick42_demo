// operations.js
import { Creators } from "./actions";

const requestInitialDataAction = Creators.requestInitialData;
const receiveInitialDataAction = Creators.receiveInitialData;

const startProjectUpdate = Creators.startProjectUpdate;
const finishProjectUpdateAction = Creators.finishProjectUpdate;

const fetchInitialData = () => {
  return (dispatch) => {
    dispatch(requestInitialDataAction());

    return fetch(`http://localhost:5000/db`)
      .then((response) => response.json())
      .then((json) => {
        const responseData = json;
        const data = responseData.db;

        dispatch(receiveInitialDataAction(data));
      });
  };
};

const updateProject = (passedState) => {
  return (dispatch) => {
    dispatch(startProjectUpdate());

    return fetch(`http://localhost:5000/db`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(passedState),
    })
      .then((response) => response.json())
      .then((json) => {
        const responseData = json;

        dispatch(receiveInitialDataAction(responseData));
      });
  };
};

export default {
  fetchInitialData,
  updateProject,
};
