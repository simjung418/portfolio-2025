"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";


interface TitleContextType {
  title: string;
  setTitle: (newTitle: string) => void;
}

const TitleContext = createContext<TitleContextType | undefined>(undefined);

export function TitleProvider({ children }: { children: ReactNode }) {
  const [title, setTitleState] = useState("SJM Portfolio");

  const setTitle = useCallback((newTitle: string) => {
    setTitleState(newTitle);
  }, []);

  return <TitleContext.Provider value={{ title, setTitle }}>{children}</TitleContext.Provider>;
}

export function usePageTitle() {
  const context = useContext(TitleContext);
  if (context === undefined) {
    throw new Error("usePageTitle must be used within a TitleProvider");
  }
  return context;
}
