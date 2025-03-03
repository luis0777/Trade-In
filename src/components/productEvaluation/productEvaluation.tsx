import { Button } from "@/components/ui/button";
import { FormField } from "../formField/formField";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductEvaluationProps {
  toStep2: () => void;
}

export function ProductEvaluation({ toStep2 }: ProductEvaluationProps) {
  const { toast } = useToast();
  const [codigo, setCodigo] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = () => {
    if (!codigo.trim()) {
      setShowErrors(true);
      toast({
        title: "Falha!",
        description: "Preencha os campos obrigatórios.",
        duration: 2000,
        className: "bg-red-500 text-white",
      });
      return;
    }
    toStep2();
  };

  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>Seu aparelho vale até R$</CardTitle>
        <CardDescription className="text-4xl">1.400,00</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col  ">
        <FormField
          label="Código de identificação"
          placeholder="Digite o código"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          required
          showError={showErrors}
        />
      </CardContent>
      <CardFooter className="flex justify-between w-full">
        <Button className="bg-blue-700 text-white">Voltar</Button>
        <Button className="bg-blue-700 text-white" onClick={handleSubmit}>
          Proximo
        </Button>
      </CardFooter>
    </Card>
  );
}
