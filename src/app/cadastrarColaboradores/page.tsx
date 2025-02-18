"use client";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function CadastrarColaboradores() {
  const { toast } = useToast();

  return (
    <section className="w-full h-screen  flex flex-col justify-center ">
      <Navbar />

      <div className="w-full ">
        <div className="w-full flex flex-col justify-center items-center ">
          <div className="w-1/2  flex justify-center font-bold text-2xl ">
            Novo Colaborador
          </div>
          <div className="w-1/2  flex justify-center">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-lg">Dados do funcionário</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <b id="name">Nome</b>
                      <Input id="name" placeholder="Nome" />
                      <b id="email">Email</b>
                      <Input id="email" placeholder="Email" />
                    </div>
                    <div className="flex ">
                      <div className="w-full ">
                        <div className="w-full flex justify-start ">
                          <b>Logistico</b>
                        </div>

                        <div className="w-full flex justify-start ">
                          <RadioGroup
                            defaultValue="logistico"
                            className="flex flex-row"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="sim" id="r1" />
                              <Label htmlFor="simLogistico">Sim</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="nao" id="r2" />
                              <Label htmlFor="naoLogistico">Não</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                      <div className="w-full ">
                        <div className="w-full flex justify-start ">
                          <b>Perfil</b>
                        </div>

                        <div className="w-full flex justify-start ">
                          <RadioGroup
                            defaultValue="perfil"
                            className="flex flex-row"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="vendedor" id="r1" />
                              <Label htmlFor="vendedor">Vendedor</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="gerente" id="r2" />
                              <Label htmlFor="gerente">Gerente</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <b id="acesso">Dados de acesso</b>
                      <Input id="senha" placeholder="Senha" />
                      <Input
                        id="confirmeSenha"
                        placeholder="Confirme a senha"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  className="bg-blue-700 w-full"
                  onClick={() => {
                    toast({
                      title: "Sucesso!!!",
                      description: "Cadastro realizado com sucesso",
                      className: "bg-green-50 text-green-500",
                    });
                  }}
                >
                  Finalizar cadastro
                </Button>
              </CardFooter>
              <CardFooter className="flex justify-center ">
                <Link
                  href="/colaboradores"
                  className="justify-start flex  rounded-md w-full"
                >
                  <Button className="bg-blue-700 w-full">Voltar</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
