import { Button } from "@/components/ui/button";
import { useState } from "react";

export function NotFoundItem() {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;
  
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="text-lg mb-4">
        Configurações do item não encontradas para continuar, contate o suporte
        técnico.
      </p>
      <Button className="bg-blue-700 text-white" onClick={handleClick}>Voltar</Button>
    </div>
  );
}
