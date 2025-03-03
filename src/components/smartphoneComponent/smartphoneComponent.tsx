"use client";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowBigRight, HelpCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";


export function SmartphoneComponent() {
    const [open, setOpen] = useState(false);
    const [showNextComponent, setShowNextComponent] = useState(false);
  
  
  return (
    <div className="w-full  flex items-center justify-center">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle className="flex justify-center">
                Verificação do IMEI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div>
                  <div className="flex gap-2 ">
                    <Input type="email" placeholder="DIGITE O N° DO IMEI" />
                  </div>
                  <div>
                    <div className="flex justify-center mt-4 text-red-600">
                      <p>O IMEI deve ter 15 números</p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-4">
                    <div>
                      <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="rounded-full p-2 shadow-lg"
                          >
                            <HelpCircle className="w-6 h-6" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl w-full">
                          <DialogTitle className="text-xl font-semibold">
                            Veja nossas dicas:
                          </DialogTitle>
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                          >
                            <AccordionItem value="item-1">
                              <AccordionTrigger>
                                Identificação por discagem
                              </AccordionTrigger>
                              <AccordionContent>
                                - Acesse a tela de discagem do seu celular{" "}
                                <br /> - Digite '*#06#' e você irá receber o
                                numero do seu IMEI
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                              <AccordionTrigger>
                                Extremidades do aparelho
                              </AccordionTrigger>
                              <AccordionContent>
                                Alguns IMEIs estão no próprio aparelho, você
                                pode verificar as seguintes possibilidades:{" "}
                                <br /> - Na parte traseira do aparelho pode
                                conter o IMEI da seguinte forma: imei:
                                0000000000000 / imei2: 0000000000000 <br /> -
                                Você pode retirar a bateria do aparelho e
                                verificar se existe uma anotação de IMEI da
                                seguinte forma: imei: 0000000000000 / imei2:
                                0000000000000
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                              <AccordionTrigger>
                                Descobrir o IMEI pelo Google
                              </AccordionTrigger>
                              <AccordionContent>
                                - Acesse o site www.google.com/android/find{" "}
                                <br />- Entre em sua conta google que esta
                                vinculada ao seu dispositivo, caso você já não
                                esteja logado <br />- Após efetuar o login, ele
                                dará as opções de celulares que você utiliza com
                                a conta Google <br />- Aceite os termos do
                                'Encontre meu dispositivo' no canto superior
                                esquerdo <br /> - Ao lado do nome do seu
                                aparelho, existe um icone de informação (i) com
                                o número de seu IMEI <br /> - Agora você pode
                                clicar no ícone para ver o número do seu IMEI
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                              <AccordionTrigger>
                                Códigos de Operação
                              </AccordionTrigger>
                              <AccordionContent>
                                - # Código APIN01 - CÓDIGO DE IMEI INVÁLIDO.{" "}
                                <br /> - # Código APRF01 <br /> - CÓDIGO DE IMEI
                                BLOQUEADO. - # Código AESC01 <br /> - ERRO NO
                                SERVIDOR VERIFICADOR DE IMEI.
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Button
                      className="bg-blue-600 text-white font-semibold hover:bg-blue-700"
                      onClick={() => setShowNextComponent(true)}
                    >
                      Verificar <ArrowBigRight />
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
  );
}