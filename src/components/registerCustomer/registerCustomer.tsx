"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronRight, ChevronLeft, RotateCw } from "lucide-react";
import { useStep } from "@/context/StepContext";
import { VerificaCPF } from "../verificaCPF/verificaCPF";

export function RegisterCustomer() {
  const { setCurrentStep } = useStep();
  const [date, setDate] = React.useState<Date>();
  const [showVerificacao, setShowVerificacao] = React.useState(false);

  if (showVerificacao) {
    return <VerificaCPF />;
  }

  const toPrevious = () => {
    setShowVerificacao(true);
  };

  return (
    <div className="w-full flex items-center justify-center">
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
          </Accordion>
        </CardContent>
        <CardFooter className="w-full flex ">
          <div className="w-[15%]">
            <Button className="bg-blue-700 text-white" onClick={toPrevious}>
              <RotateCw /> Nova pessoa
            </Button>
          </div>
          <div className="w-[15%] ">
            <Button
              className="bg-blue-700 text-white"
              onClick={() => setCurrentStep(2)}
            >
              <ChevronLeft /> Voltar
            </Button>
          </div>
          <div className="w-[70%] flex justify-end ">
            <Button className="bg-blue-700 text-white">
              <ChevronRight /> Proximo
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
