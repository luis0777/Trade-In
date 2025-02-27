import { useState } from "react";
import { RegisterCustomer } from "../registerCustomer/registerCustomer";
import { SeadingPhotos } from "../seadingPhotos/seadingPhotos";
import { Completion } from "../completion/completion";
import { Confirmation } from "../confirmation/confirmation";
import { Contract } from "../contract/contract";
import { TradeInSuccess } from "../tradeInSucess/tradeInSucess";
import { VerificarCPFCliente } from "../verificarCPFCliente/verificarCPFCliente";

export const TradeInNavigation = () => {
  const [currentStep, setCurrentStep] = useState<"cpf" | "register" | "photos" | "confirmation" | "completion" | "contract" | "success">("cpf");
  console.log(currentStep);
  const renderStep = () => {
    console.log(currentStep);
    switch (currentStep) {
      case "cpf":
        return (
          <VerificarCPFCliente
            onContinueTo={() => setCurrentStep("register")}
            onPreviousTo={() => setCurrentStep("cpf")}
          />
        );

      case "register":
        return (
          <RegisterCustomer
            onContinueTo={() => setCurrentStep("photos")}
            onPreviousTo={() => setCurrentStep("cpf")}
          />
        );

      case "photos":
        return (
          <SeadingPhotos
            onContinueTo={() => setCurrentStep("confirmation")}
            onPreviousTo={() => setCurrentStep("register")}
          />
        );

      case "confirmation":
        return (
          <Confirmation
            onContinueTo={() => setCurrentStep("completion")}
            onPreviousTo={() => setCurrentStep("photos")}
          />
        );

      case "completion":
        return (
          <Completion
            onContinueTo={() => setCurrentStep("contract")}
            onPreviousTo={() => setCurrentStep("confirmation")}
          />
        );

      case "contract":
        return <Contract onContinueTo={() => setCurrentStep("success")} />;

      case "success":
        return <TradeInSuccess />;

      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};
