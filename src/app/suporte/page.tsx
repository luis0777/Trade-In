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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  const { toast } = useToast();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const isFormValid = subject.trim() !== "" && description.trim() !== "";
  return (
    <section className="py-16  ">
      <Navbar />

      <div className="space-y-16">
        <div className="w-full ">
          <b className="flex justify-center text-3xl pt-5">Suporte - contato</b>
        </div>

        <div className="flex justify-center ">
          <Card className="w-[550px]">
            <CardHeader>
              <CardTitle>Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="assunto"
                      placeholder="Assunto"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Textarea
                      placeholder="Descrição"
                      rows={10}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className=" w-full flex ">
              <Button
                className="bg-blue-700 w-full"
                disabled={!isFormValid}
                onClick={() => {
                  toast({
                    title: "Sucesso!",
                    description:
                      "Aguarde o contato do suporte para resolver seu problema!",
                    duration: 2000,
                  });
                }}
              >
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
