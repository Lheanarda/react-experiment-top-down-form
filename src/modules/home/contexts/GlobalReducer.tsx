import { State, Action } from "./GlobalState";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "setFirstName":
      const copiedState = { ...state };
      copiedState[action.payload.key].firstName = action.payload.value;
      return copiedState;
    case "setLastName":
      const copiedState2 = { ...state };
      copiedState2[action.payload.key].lastName = action.payload.value;
      return copiedState2;
    default:
      return state;
  }
}
