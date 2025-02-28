'use client'
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { SelecionarAparelho } from "@/components/selecionarAparelho/selecionarAparelho";
import { useState } from "react";

export default function NovaCompra() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };  

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <SelecionarAparelho />;
      case 1:
        return <div>Componente Selecionar Condição</div>;
      case 2:
        return <div>Componente Cadastrar Cliente</div>;
      case 3:
        return <div>Componente Fotos do Aparelho</div>;
      case 4:
        return <div>Componente Finalizar</div>;
      case 5:
        return <div>Componente Imprimir Contrato</div>;
      default:
        return <SelecionarAparelho />;
    }
  };

  return (
    <section className="my-20">
      <Navbar />

      <div className="flex justify-center w-full py-5">
        <ul className="steps steps-horizontal w-full max-w-screen-xl">
          <li className={`step ${currentStep >= 0 ? 'step-primary' : ''}`}>Selecionar Aparelho</li>
          <li className={`step ${currentStep >= 1 ? 'step-primary' : ''}`}>Selecionar Condição</li>
          <li className={`step ${currentStep >= 2 ? 'step-primary' : ''}`}>Cadastrar Cliente</li>
          <li className={`step ${currentStep >= 3 ? 'step-primary' : ''}`}>Fotos do Aparelho</li>
          <li className={`step ${currentStep >= 4 ? 'step-primary' : ''}`}>Finalizar</li>
          <li className={`step ${currentStep >= 5 ? 'step-primary' : ''}`}>Imprimir Contrato</li>
        </ul>
      </div>

      {renderStep()}

      <Footer />
    </section>
  );
}
