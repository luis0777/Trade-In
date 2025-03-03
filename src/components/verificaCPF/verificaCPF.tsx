import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useStep } from "@/context/StepContext";
import { useState } from "react";
import { RegisterCustomer } from "../registerCustomer/registerCustomer";
import { FormField } from "../formField/formField";
import { useToast } from "@/hooks/use-toast";

export function VerificaCPF() {
  const { toast } = useToast();
  const { setCurrentStep } = useStep();
  const [showVerificacao, setShowVerificacao] = useState(false);
  const [cpf, setCPF] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = () => {
    if (!cpf.trim()) {
      setShowErrors(true);
      toast({
        title: "Falha!",
        description: "Preencha os campos obrigatórios.",
        duration: 2000,
        className: "bg-red-500 text-white",
      });
      return;
    }

    toast({
      title: "Sucesso!",
      description: "",
      duration: 2000,
    });
   setShowVerificacao(true);
  };

  if (showVerificacao) {
    return <RegisterCustomer />;
  }

  return (
    <section>
      <div className="w-full h-[40rem] flex items-center justify-center flex-col">
        <Card className="w-[450px]">
          <CardHeader className="flex flex-col items-center">
            <CardTitle>CPF</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4 text-center">
                <FormField
                  placeholder="___-___-___-__"
                  value={cpf}
                  onChange={(e) => setCPF(e.target.value)}
                  required
                  showError={showErrors}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="flex flex-col gap-2">
              <div>
                <Button
                  className="bg-blue-700 text-white"
                  onClick={handleSubmit}
                >
                  Verificar existência no sistema
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
        <div className="flex justify-start w-[450px] mt-2">
          <Button
            className="bg-blue-700 text-white"
            onClick={() => setCurrentStep(2)}
          >
            Voltar
          </Button>
        </div>
      </div>
    </section>
  );
}
