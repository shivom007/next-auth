"use client";
import React, { createContext, useContext, useState } from "react";
import { SessionProvider } from "next-auth/react";

type ToggleState = boolean;

interface ToggleContextValue {
  toggle: ToggleState;
  setToggle: React.Dispatch<React.SetStateAction<ToggleState>>;
}

export const ToggleContext = createContext<ToggleContextValue>({
  toggle: false,
  setToggle: () => {},
});

export const useToggle = () => {
  const toggle = useContext(ToggleContext);
  return toggle;
};

export const ToggleProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [toggle, setToggle] = useState<ToggleState>(false);

  return (
    <SessionProvider>
      <ToggleContext.Provider value={{ toggle, setToggle }}>
        {children}
      </ToggleContext.Provider>
    </SessionProvider>
  );
};
