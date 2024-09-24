import { createContext, useContext, useReducer } from "react";

const contextMap: Record<string, any> = {};

function getContext(identifier: string) {
  if (!contextMap[identifier]) {
    const StateContext = createContext(null);
    const DispatchContext = createContext(null);
    StateContext.displayName = `${identifier}ViewDescriptionStateContext`;
    DispatchContext.displayName = `${identifier}ViewDescriptionDispatchContext`;
    contextMap[identifier] = {
      state: StateContext,
      dispatch: DispatchContext,
    };
  }
  return contextMap[identifier];
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "updateData":
      const copiedState = { ...state };
      copiedState[action.payload.formId][action.payload.fieldId] =
        action.payload.value;
      return copiedState;
    default:
      return state;
  }
}

const ContextWrapper = ({
  StateContext,
  DispatchContext,
  initialState,
  children,
}: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default function DynamicContextProvider({
  data,
  children,
}: {
  data: Record<string, any>;
  children: any;
}) {
  return Object.keys(data).reduce((acc, key) => {
    const { state: StateContext, dispatch: DispatchContext } = getContext(key);
    return (
      <ContextWrapper
        StateContext={StateContext}
        DispatchContext={DispatchContext}
        initialState={data[key]}
      >
        {acc}
      </ContextWrapper>
    );
  }, children);
}

export function useContextIdentifier(identifier: string) {
  const { state: StateContext, dispatch: DispatchContext } =
    getContext(identifier);
  const state: any = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  if (!state || !dispatch) {
    throw new Error(`${identifier} Context is not available`);
  }
  return [state, dispatch];
}
