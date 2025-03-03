'use client';
import { createContext, useContext, useState, ReactNode } from "react";


interface StepContextProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepContext = createContext<StepContextProps | undefined>(undefined);


export function StepProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepContext.Provider>
  );
}


export function useStep() {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep deve ser usado dentro de um StepProvider");
  }
  return context;
}
