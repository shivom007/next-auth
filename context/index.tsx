"use client";
import React, {
  createContext,
 
  useContext,
 
  useState,
  
} from "react";

type ToggleState = boolean;

interface ToggleContextValue {
  toggle: ToggleState;
  setToggle: React.Dispatch<React.SetStateAction<ToggleState>>;
}

export const ToggleContext = createContext<ToggleContextValue>({
  toggle: false,
  setToggle: () => {},
});


export const ToggleProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [toggle, setToggle] = useState<ToggleState>(false);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};


