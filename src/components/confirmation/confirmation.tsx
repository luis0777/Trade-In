"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Check, ChevronLeft, HelpCircle } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import Link from "next/link";

interface ConfirmationProps {

  onContinueTo: () => void;
  onPreviousTo: () => void;
  
}

export function Confirmation({

  onContinueTo,
  onPreviousTo,
}: ConfirmationProps) {
  const [date, setDate] = React.useState<Date>();


  const [showNextComponent, setShowNextComponent] = React.useState(false);

  const handleNext = () => {
    setShowNextComponent(true);
  };

  return showNextComponent ? (
    <>{onContinueTo}</>
  ) : (
    <div className="w-[100%] flex items-center justify-center">
      <Card className="w-[60%]">
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <b className="text-lg">Informações Pessoais</b>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 px-12">
                  <div className="w-full flex ">
                    <div className="w-full px-2">
                      <Label htmlFor="identificador">Nome</Label>
                      <Input type="nome" id="nome" placeholder="" />
                    </div>
                  </div>
                  <div className="w-full flex">
                    <div className="w-1/2  px-2">
                      <Label htmlFor="CPF">CPF</Label>
                      <Input type="cpf" id="cpf" placeholder="" />
                    </div>
                    <div className="w-1/2  px-2">
                      <Label htmlFor="rg">RG</Label>
                      <Input type="rg" id="rg" placeholder="" />
                    </div>
                  </div>

                  <div className="w-full flex">
                    <div className="w-1/2  px-2">
                      <Select>
                        <Label htmlFor="sexo">Sexo</Label>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="masculino">Masculino</SelectItem>
                            <SelectItem value="feminino">Feminino</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-1/2 px-2">
                      <Label htmlFor="dataNascimento">Data de Nascimento</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon />
                            {date ? format(date, "PPP") : <span></span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="w-full flex-col">
                    <div className="w-full px-2">
                      <Label htmlFor="Observacao">Observações</Label>
                      <Textarea id="observacao" />
                    </div>
                  </div>

                  <div className="w-full flex ">
                    <div className="w-1/4 px-2">
                      <Select>
                        <Label htmlFor="emailTipo">Tipo do email</Label>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="pessoal">Pessoal</SelectItem>
                            <SelectItem value="comercial">Comercial</SelectItem>
                            <SelectItem value="cobranca">Cobrança</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-3/4 px-2">
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" id="email" placeholder="" />
                    </div>
                  </div>

                  <div className="w-full flex ">
                    <div className="w-1/4 px-2">
                      <Select>
                        <Label htmlFor="telefoneTipo">Tipo do telefone</Label>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="pessoal">Pessoal</SelectItem>
                            <SelectItem value="residencial">
                              Residencial
                            </SelectItem>
                            <SelectItem value="comercial">Comercial</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-3/4 px-2">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input type="telefone" id="telefone" placeholder="" />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <b className="text-lg">Endereço de Entrega/Cobrança</b>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 px-12">
                  <div className="w-full flex">
                    <div className="w-1/2  px-2">
                      <Select defaultValue="residencial">
                        <Label htmlFor="tipo">Tipo</Label>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="residencial">
                              Residencial
                            </SelectItem>
                            <SelectItem value="comercial">Comercial</SelectItem>
                            <SelectItem value="cobranca">Cobrança</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-1/2  px-2">
                      <Label htmlFor="cep">CEP</Label>
                      <Input type="cep" id="cep" placeholder="" />
                    </div>
                  </div>

                  <div className="w-full flex">
                    <div className="w-1/2  px-2">
                      <Select>
                        <Label htmlFor="uf">UF</Label>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="uf"></SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-1/2 px-2">
                      <Select>
                        <Label htmlFor="cidade">Cidade</Label>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="opcao1"></SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="w-full flex ">
                    <div className="w-3/4 px-2">
                      <Label htmlFor="logradouro">Logradouro</Label>
                      <Input type="logradouro" id="logradouro" placeholder="" />
                    </div>
                    <div className="w-3/4 px-2">
                      <Label htmlFor="bairro">Bairro</Label>
                      <Input type="bairro" id="bairro" placeholder="" />
                    </div>
                    <div className="w-1/10 px-2">
                      <Label htmlFor="numero">Nº</Label>
                      <Input type="numero" id="numero" placeholder="" />
                    </div>
                  </div>

                  <div className="w-full flex ">
                    <div className="w-full px-2">
                      <Label htmlFor="complemento">Complemento</Label>
                      <Input
                        type="complemento"
                        id="complemento"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <b className="text-lg">Aparelho</b>
              </AccordionTrigger>
              <AccordionContent>
                <div className="w-full flex justify-between">
                  <div className="w-[50%] ">
                    <div className="w-full flex justify-center p-16">
                      <img src="/Aparelho.png" alt="" />
                    </div>
                  </div>

                  <div className="w-[50%]">
                    <div className="w-full flex justify-center mt-32">
                      <Card className="w-full">
                        <CardContent>
                          <form>
                            <h1 className="text-lg font-semibold flex justify-center p-8">
                              Ficha do aparelho
                            </h1>
                            <div className="flex flex-col gap-4 text-lg">
                              <p className="flex  gap-4">
                                <span className="text-lg font-semibold ">
                                  Fabricante:
                                </span>{" "}
                                Samsung
                              </p>
                              <p>
                                <span className="text-lg font-semibold">
                                  Modelo:
                                </span>
                                GALAXY NOTE 10 PLUS
                              </p>
                              <p className="flex ">
                                <span className="text-lg font-semibold">
                                  Versão:
                                </span>
                                SAMSUNG GALAXY NOTE 10 PLUS 256GB
                              </p>
                              <p className="flex ">
                                <span className="text-lg font-semibold">
                                  Cor:
                                </span>
                                PRETO
                              </p>
                              <p className="flex  gap-4">
                                <span className="text-lg font-semibold">
                                  Condição:
                                </span>
                                Tela Trincada
                              </p>
                              <p className="flex  gap-4">
                                <span className="text-lg font-semibold">
                                  Preço:
                                </span>
                                R$100,00
                              </p>
                            </div>
                          </form>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <ChevronLeft /> Voltar para Aparelho
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <b className="text-lg">Check-List obrigatório</b>
              </AccordionTrigger>
              <AccordionContent>
                <Card className="w-full">
                  <CardContent>
                    <form></form>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
            <div>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <b className="text-lg">Selecionar o voucher</b>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="w-full ">
                    <CardContent>
                      <div className="flex">
                        <form className="flex mt-6 w-[60%] ">
                          <RadioGroup
                            defaultValue="comfortable"
                            className="w-[70%]"
                          >
                            <div className="flex justify-between ">
                              <div className="flex items-center">
                                <RadioGroupItem
                                  value="voucherTrade"
                                  id="r1"
                                  className="mr-2"
                                />
                                <Label htmlFor="r1" className="text-lg">
                                  Voucher Trade-In
                                </Label>
                              </div>
                              <div className="flex items-center">
                                <RadioGroupItem
                                  value="voucherTradeIn"
                                  id="r2"
                                  className="mr-2"
                                />
                                <Label htmlFor="r2" className="text-lg">
                                  Voucher Trade-In
                                </Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </form>
                        <div className="w-[40%] mt-6 flex justify-end px-8 text-lg items-center gap-2">
                          <span>Precisa de ajuda</span>
                          <Link href="/suporte" passHref>
                            <div className="relative group cursor-pointer">
                              <HelpCircle className="w-5 h-5 text-blue-500" />
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap">
                                Fale com nosso suporte.
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        </CardContent>
        <CardFooter className="w-full flex justify-between ">
          <div className="w-[15%] ">
            <Button className="w-32 bg-blue-600 font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <ChevronLeft /> Voltar
            </Button>
          </div>

          <div className="w-[70%] flex justify-end ">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-32 bg-blue-600 font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Check /> Finalizar
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirmação</AlertDialogTitle>
                  <AlertDialogDescription className="text-lg">
                    Você confirma todos os dados e deseja finalizar?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="  shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105  hover:shadow-xl">
                    NÃO
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className=" bg-blue-600  shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105  hover:shadow-xl"
                    onClick={handleNext}
                  >
                    SIM
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </CardFooter>
      </Card>
         
    </div>
  );
}
