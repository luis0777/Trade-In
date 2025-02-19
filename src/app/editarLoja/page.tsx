"use client";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export default function EditarLoja() {
  const [accordionOpenDadosLoja, setAccordionOpenDadosLoja] = useState<
    string | undefined
  >("item-1");
  const [accordionOpenEndereco, setAccordionOpenEndereco] = useState<
    string | undefined
  >("item-1");
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Alterações salvas com sucesso!",
      description: "As informações foram atualizadas.",
      duration: 2000,
    });

    setAccordionOpenDadosLoja(undefined);
    setAccordionOpenEndereco(undefined);
  };

  const [addressType, setAddressType] = useState<string>("");

  const handleAddressTypeChange = (value: string) => {
    setAddressType(value);
  };

  const [addresses, setAddresses] = useState([{ id: 1 }]);

  const addNewAddress = () => {
    setAddresses([...addresses, { id: addresses.length + 1 }]);
  };

  const removeAddress = (id: number) => {
    if (addresses.length > 1) {
      setAddresses(addresses.filter((address) => address.id !== id));
    }
  };

  return (
    <section className="py-16">
      <Navbar />

      <div>
        <div className="w-full flex items-center">
          <div className="w-[115rem] justify-end">
            <b className="flex justify-center text-3xl pt-5">Editar Loja</b>
          </div>
          <div className="w-[5rem] flex justify-end ">
            <Link href="/lojas">
              <Button className="bg-transparent text-blue-700 font-bold hover:bg-slate-50">
                Voltar
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-16 px-56">
          {/* Dados da Loja */}
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={accordionOpenDadosLoja}
            onValueChange={setAccordionOpenDadosLoja}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <b className="text-lg">Dados da Loja</b>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 px-12">
                  <div className="w-full flex ">
                    <div className="w-4/5 px-2">
                      <Label htmlFor="identificador">
                        Identificador Externo
                      </Label>
                      <Input
                        type="identificador"
                        id="identificador"
                        placeholder=""
                      />
                    </div>
                    <div className="w-1/5  flex-col items-end px-2">
                      <Select>
                        <Label htmlFor="email">Nivel de Acesso</Label>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="apple">Regional</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="w-full flex-col">
                    <div className="w-full  px-2">
                      <Label htmlFor="nome">Nome</Label>
                      <Input type="nome" id="nome" placeholder="" />
                    </div>
                  </div>

                  <div className="w-full flex ">
                    <div className="w-1/4 px-2">
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input type="cnpj" id="cnpj" placeholder="" />
                    </div>
                    <div className="w-3/4 px-2">
                      <Label htmlFor="infoContato">
                        Informações do contato
                      </Label>
                      <Input
                        type="infoContato"
                        id="infoContato"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="w-full flex-col">
                    <div className="w-full px-2">
                      <Label htmlFor="infoColeta">Intruções de coleta</Label>
                      <Textarea id="infoColeta" />
                    </div>
                  </div>

                  <div className="w-full flex-col">
                    <div className="w-full px-2">
                      <Label htmlFor="Observacao">Observações</Label>
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
                            <SelectItem value="cobranca">Cobrança</SelectItem>
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
                      <Input type="telefone" id="email" placeholder="" />
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Endereços */}
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={accordionOpenEndereco}
            onValueChange={setAccordionOpenEndereco}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <b className="text-lg">Endereços</b>
              </AccordionTrigger>
              <AccordionContent>
                {addresses.map((address) => (
                  <div key={address.id} className="space-y-4 px-12 mb-8">
                    <div className="w-full flex justify-between">
                      <b className="w-full">
                        Endereço {addressType && `- ${addressType}`}
                      </b>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="bg-transparent text-blue-700 hover:bg-slate-50">
                            <EllipsisVertical />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-44">
                          <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup>
                            <DropdownMenuRadioItem
                              value="newAddress"
                              onClick={addNewAddress}
                            >
                              Novo endereço
                            </DropdownMenuRadioItem>
                            {addresses.length > 1 && (
                              <DropdownMenuRadioItem
                                value="deleteAddress"
                                onClick={() => removeAddress(address.id)}
                              >
                                Remover
                              </DropdownMenuRadioItem>
                            )}
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <div className="w-full flex ">
                      <div className="w-1/4 px-2">
                        <Select onValueChange={handleAddressTypeChange}>
                          <Label htmlFor="enderecoTipo">Tipo do endereço</Label>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="Comercial">
                                Comercial
                              </SelectItem>
                              <SelectItem value="Logistico">
                                Logístico
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="w-1/4 px-2">
                        <Label htmlFor="cep">CEP</Label>
                        <Input type="cep" id="cep" placeholder="_____-___" />
                      </div>
                      <div className="w-1/4 px-2">
                        <Select>
                          <Label htmlFor="estado">Estado</Label>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="not">Not</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="w-1/4 px-2">
                        <Select>
                          <Label htmlFor="cidade">Cidade</Label>
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="not">Not</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="w-full flex ">
                      <div className="w-1/3 px-2">
                        <Label htmlFor="logradouro">Logradouro</Label>
                        <Input type="logradouro" id="logradouro" />
                      </div>
                      <div className="w-1/3 px-2">
                        <Label htmlFor="bairro">Bairro</Label>
                        <Input type="bairro" id="bairro" />
                      </div>
                      <div className="w-1/6  px-2">
                        <Label htmlFor="numero">Número</Label>
                        <Input type="numero" id="numero" />
                      </div>
                      <div className="w-1/3 px-2">
                        <Label htmlFor="complemento">Complemento</Label>
                        <Input type="complemento" id="complemento" />
                      </div>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="w-full flex justify-center p-5">
            <Link href="/lojas">
              <Button
                className="bg-transparent text-blue-700 font-bold hover:bg-slate-50"
                onClick={handleSave}
              >
                Salvar Alterações
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
