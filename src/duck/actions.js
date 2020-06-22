import { createActions } from "reduxsauce";

const { Creators, Types } = createActions({
  requestInitialData: [""],
  receiveInitialData: ["data"],

  startProjectUpdate: [""],
  finishProjectUpdate: ["data"],
});

export { Creators, Types };
