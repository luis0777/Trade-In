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

export default function Page() {
  const { toast } = useToast();
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [senhaNova, setSenhaNova] = useState("");
  const [confirmeSenhaNova, setConfirmeSenhaNova] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      senhaAntiga.trim() !== "" &&
      senhaNova.trim() !== "" &&
      confirmeSenhaNova.trim() !== ""
    );
  }, [senhaAntiga, senhaNova, confirmeSenhaNova]);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (senhaNova !== confirmeSenhaNova) {
      toast({
        title: "Erro",
        description: "As senhas não coincidem",
        variant: "destructive"
      });
      return;
    }

    if (senhaNova.length < 8) {
      toast({
        title: "Erro", 
        description: "A senha deve ter no mínimo 8 caracteres",
        variant: "destructive"
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
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível alterar a senha",
        variant: "destructive"
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
                    <Input
                      id="senhaAntiga"
                      type="password"
                      placeholder="Senha antiga"
                      value={senhaAntiga}
                      onChange={(e) => setSenhaAntiga(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="senhaNova"
                      type="password"
                      placeholder="Senha nova"
                      value={senhaNova}
                      onChange={(e) => setSenhaNova(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="senhaNovaConfirme"
                      type="password"
                      placeholder="Confirme a senha nova"
                      value={confirmeSenhaNova}
                      onChange={(e) => setConfirmeSenhaNova(e.target.value)}
                    />
                  </div>
                </div>
                <CardFooter className="w-full flex px-0 pb-0 pt-4">
                  <Button
                    className="bg-blue-700 w-full"
                    type="submit"
                    disabled={!isFormValid}
                  >
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