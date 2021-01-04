import React, { createContext, useState } from "react";

interface Props {
  children: any;
}

export const GlobalContext = createContext<any | undefined>(undefined);

export const GlobalProvider = (props: Props) => {
  const [state, setState] = useState([]);

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
