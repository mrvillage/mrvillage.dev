import { createContext, useContext } from "react";

interface DndAreaContextInterface {
  maxX: number;
  maxY: number;
}

// @ts-ignore
const DnDAreaContext = createContext<DndAreaContextInterface>({});

interface DnDAreaContextProviderProps {
  maxX: number;
  maxY: number;
  children: React.ReactNode;
}

const DndAreaContextProvider = ({
  maxX,
  maxY,
  children,
}: DnDAreaContextProviderProps) => {
  return (
    <DnDAreaContext.Provider value={{ maxX, maxY }}>
      {children}
    </DnDAreaContext.Provider>
  );
};

const useDndAreaContext = () => useContext(DnDAreaContext);

export { DnDAreaContext, DndAreaContextProvider, useDndAreaContext };
