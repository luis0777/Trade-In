"use client";
import { useState } from "react";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FormField } from "@/components/formField/formField";

export default function Page() {
  const { toast } = useToast();

  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = () => {
    if (!assunto.trim() || !descricao.trim()) {
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
      description: "Aguarde o contato do suporte para resolver seu problema!",
      duration: 2000,
    });
    setAssunto("");
    setDescricao("");
    setShowErrors(false);
  };

  return (
    <section className="py-16">
      <Navbar />

      <div className="space-y-16">
        <div className="w-full">
          <b className="flex justify-center text-3xl pt-5">Suporte - contato</b>
        </div>

        <div className="flex justify-center">
          <Card className="w-[550px]">
            <CardHeader>
              <CardTitle>Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <FormField
                    label="Assunto"
                    placeholder="Digite o assunto"
                    value={assunto}
                    onChange={(e) => setAssunto(e.target.value)}
                    required
                    showError={showErrors}
                  />
                  <FormField
                    label="Descrição"
                    placeholder="Digite a descrição"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                    rows={10}
                    type="textarea"
                    showError={showErrors}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="w-full flex">
              <Button className="bg-blue-700 w-full" onClick={handleSubmit}>
                Enviar mensagem
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Footer />
    </section>
  );
}
