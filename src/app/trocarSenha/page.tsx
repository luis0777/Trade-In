"use client";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { FormField } from "@/components/formField/formField";
import { X, Check } from "lucide-react";

export default function Page() {
  const { toast } = useToast();
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [senhaNova, setSenhaNova] = useState("");
  const [confirmeSenhaNova, setConfirmeSenhaNova] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const senhaTemOitoDigitos = senhaNova.length >= 8;

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!senhaAntiga || !senhaNova || !confirmeSenhaNova) {
      setShowErrors(true);
      toast({
        title: "Falha!",
        description: "Preencha os campos obrigatórios.",
        duration: 2000,
        className: "bg-red-500 text-white",
      });
      return;
    }

    if (senhaNova !== confirmeSenhaNova) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem",
        variant: "destructive",
      });
      setSenhaNova("");
      setConfirmeSenhaNova("");
      setShowErrors(false);
      return;
    }

    if (senhaNova.length < 8) {
      toast({
        title: "Erro",
        description: "A senha deve ter no mínimo 8 caracteres",
        variant: "destructive",
      });
      return;
    }

    try {
      toast({
        title: "Sucesso!",
        description: "Senha alterada com sucesso!",
        duration: 2000,
      });

      setSenhaAntiga("");
      setSenhaNova("");
      setConfirmeSenhaNova("");
      setShowErrors(false);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível alterar a senha",
        variant: "destructive",
      });
    }
  };
  return (
    <section className="py-16">
      <Navbar />

      <div className="space-y-16">
        <div className="w-full">
          <b className="flex justify-center text-3xl pt-5">Trocar senha</b>
        </div>

        <div className="flex justify-center">
          <Card className="w-[550px]">
            <CardHeader>
              <CardTitle>Dados de acesso</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleChangePassword}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      label="Senha Antiga"
                      password={true}
                      value={senhaAntiga}
                      onChange={(e) => setSenhaAntiga(e.target.value)}
                      placeholder="Senha antiga"
                      className="cursor-pointer"
                      required
                      showError={showErrors}
                    />

                    <FormField
                      label="Senha Nova"
                      password={true}
                      value={senhaNova}
                      onChange={(e) => setSenhaNova(e.target.value)}
                      placeholder="Senha nova"
                      className="cursor-pointer"
                      required
                      showError={showErrors}
                    />

                    <FormField
                      label="Confirme a Senha Nova"
                      password={true}
                      value={confirmeSenhaNova}
                      onChange={(e) => setConfirmeSenhaNova(e.target.value)}
                      placeholder="Confirme a senha nova"
                      className="cursor-pointer"
                      required
                      showError={showErrors}
                    />
                  </div>
                  <div>
                    <b>Requisitos </b>
                    <span
                      className={`flex ${
                        senhaTemOitoDigitos ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {senhaTemOitoDigitos ? <Check /> : <X />} A senha deve ter
                      8 digitos
                    </span>
                  </div>
                </div>
                <CardFooter className="w-full flex px-0 pb-0 pt-4">
                  <Button className="bg-blue-700 w-full" type="submit">
                    Alterar senha
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </section>
  );
}
