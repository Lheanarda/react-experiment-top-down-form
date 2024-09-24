import React, { PropsWithChildren, Dispatch, useReducer } from "react";

import { State, Action } from "./GlobalState";
import { reducer } from "./GlobalReducer";
import { initialState } from "./GlobalInitialState";

const GlobalStateContext = React.createContext<State>(null!);
GlobalStateContext.displayName = "GlobalStateContext";

const GlobalDispatchContext = React.createContext<Dispatch<Action>>(null!);
GlobalDispatchContext.displayName = "GlobalDispatchContext";

export default function GlobalContext(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {props.children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export function useGlobalStateContext(): State {
  const context = React.useContext(GlobalStateContext);
  if (context === null)
    throw new Error("GlobalContext: Did you forget to wrap this provider?");
  return context;
}

export function useGlobalDispatchContext(): Dispatch<Action> {
  const context = React.useContext(GlobalDispatchContext);
  if (context === null)
    throw new Error("GlobalContext: Did you forget to wrap this provider?");
  return context;
}

export function useGlobalContext(): [State, Dispatch<Action>] {
  return [useGlobalStateContext(), useGlobalDispatchContext()];
}
