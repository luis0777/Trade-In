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
import { FormField } from "@/components/formField/formField";

export default function CadastrarLoja() {
  const [accordionOpenDadosLoja, setAccordionOpenDadosLoja] = useState<
    string | undefined
  >("item-1");
  const [accordionOpenEndereco, setAccordionOpenEndereco] = useState<
    string | undefined
  >("item-1");
  const { toast } = useToast();

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

  const [showErrors, setShowErrors] = useState(false);
  const [identificador, setIdentificador] = useState("");
  const [nivelAcesso, setNivelAcesso] = useState("");
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [infoContato, setInfoContato] = useState("");
  const [infoColeta, setInfoColeta] = useState("");
  const [observacao, setObservacoes] = useState("");
  const [tipoEmail, setTipoEmail] = useState("");
  const [email, setEmail] = useState("");
  const [tipoTelefone, setTipoTelefone] = useState("");
  const [telefone, setTelefone] = useState("");
  const [tipoEndereco, setTipoEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  const handleSubmit = () => {
    if (!identificador.trim()) {
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
      description: "Loja cadastradas com sucesso.",
      duration: 2000,
    });
    setAccordionOpenDadosLoja(undefined);
    setAccordionOpenEndereco(undefined);

    setIdentificador("");
    setNivelAcesso("");
    setNome("");
    setCnpj("");
    setInfoContato("");
    setInfoColeta("");
    setObservacoes("");
    setTipoEmail("");
    setEmail("");
    setTipoTelefone("");
    setTelefone("");
    setTipoEndereco("");
    setCep("");
    setEstado("");
    setCidade("");
    setLogradouro("");
    setBairro("");
    setNumero("");
    setComplemento("");
    setShowErrors(false);
  };

  return (
    <section className="py-16">
      <Navbar />

      <div>
        <div className="w-full flex items-center">
          <div className="w-[115rem] justify-end">
            <b className="flex justify-center text-3xl pt-5">Cadastrar Loja</b>
          </div>
          <div className="w-[5rem] flex justify-end ">
            <Link href="/lojas">
              <Button className="bg-transparent text-blue-700 font-bold hover:bg-slate-50">
                Lojas cadastradas
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
                      <FormField
                        label="Identificador Externo"
                        type="text"
                        value={identificador}
                        onChange={(e) => setIdentificador(e.target.value)}
                        required={true}
                        showError={showErrors && !identificador.trim()}
                      />
                    </div>

                    <div className="w-1/5 flex-col items-end px-2">
                      <FormField
                        label="Nivel de Acesso"
                        type="select"
                        value={nivelAcesso}
                        onChange={(e) => setNivelAcesso(e.target.value)}
                        options={[{ value: "regional", label: "Regional" }]}
                        required={true}
                        showError={showErrors && !nivelAcesso}
                      />
                    </div>
                  </div>

                  <div className="w-full flex-col">
                    <div className="w-full  px-2">
                      <FormField
                        label="Nome"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required={true}
                        showError={showErrors && !nome.trim()}
                      />
                    </div>
                  </div>

                  <div className="w-full flex ">
                    <div className="w-1/4 px-2">
                      <FormField
                        label="CNPJ"
                        type="text"
                        placeholder="__.___.___/____-__"
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
                        required={true}
                        showError={showErrors && !cnpj.trim()}
                      />
                    </div>

                    <div className="w-3/4 px-2">
                      <FormField
                        label="Informações de Contato"
                        type="text"
                        value={infoContato}
                        onChange={(e) => setInfoContato(e.target.value)}
                        required={true}
                        showError={showErrors && !infoContato.trim()}
                      />
                    </div>
                  </div>

                  <div className="w-full flex-col">
                    <div className="w-full px-2">
                      <FormField
                        label="Instruções de coleta"
                        type="textarea"
                        value={infoColeta}
                        onChange={(e) => setInfoColeta(e.target.value)}
                        required={true}
                        showError={showErrors && !infoColeta.trim()}
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="w-full flex-col">
                    <div className="w-full px-2">
                      <FormField
                        label="Observação"
                        type="textarea"
                        value={observacao}
                        onChange={(e) => setObservacoes(e.target.value)}
                        required={true}
                        showError={showErrors && !observacao.trim()}
                        rows={3}
                      />
                    </div>
                  </div>

                  <div className="w-full flex ">
                    <div className="w-1/4 px-2">
                      <FormField
                        label="Tipo do email"
                        type="select"
                        value={tipoEmail}
                        onChange={(e) => setTipoEmail(e.target.value)}
                        options={[
                          { value: "Pessoal", label: "Pessoal" },
                          { value: "Comercial", label: "Comercial" },
                          { value: "Cobranca", label: "Cobrança" },
                        ]}
                        required={true}
                        showError={showErrors && !tipoEmail}
                      />
                    </div>
                    <div className="w-3/4 px-2">
                      <FormField
                        label="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                        showError={showErrors && !email.trim()}
                      />
                    </div>
                  </div>

                  <div className="w-full flex ">
                    <div className="w-1/4 px-2">
                      <FormField
                        label="Tipo do telefone"
                        type="select"
                        value={tipoTelefone}
                        onChange={(e) => setTipoTelefone(e.target.value)}
                        options={[
                          { value: "Pessoal", label: "Pessoal" },
                          { value: "Comercial", label: "Comercial" },
                          { value: "residencial", label: "Residencial" },
                          { value: "outro", label: "Outro" },
                        ]}
                        required={true}
                        showError={showErrors && !tipoTelefone}
                      />
                    </div>
                    <div className="w-3/4 px-2">
                      <FormField
                        label="Telefone"
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required={true}
                        showError={showErrors && !telefone.trim()}
                      />
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
                        <FormField
                          label="Tipo do endereço"
                          type="select"
                          value={tipoEndereco}
                          onChange={(e) => {
                            setTipoEndereco(e.target.value);
                            handleAddressTypeChange(e.target.value);
                          }}
                          options={[
                            { value: "Comercial", label: "Comercial" },
                            { value: "Logistico", label: "Logístico" },
                          ]}
                          required={true}
                          showError={showErrors && !tipoEndereco}
                        />
                      </div>
                      <div className="w-1/4 px-2">
                        <FormField
                          label="CEP"
                          type="text"
                          placeholder="_____-___"
                          value={cep}
                          onChange={(e) => setCep(e.target.value)}
                          required={true}
                          showError={showErrors && !cep.trim()}
                        />
                      </div>
                      <div className="w-1/4 px-2">
                        <FormField
                          label="Estado"
                          type="select"
                          value={estado}
                          onChange={(e) => {
                            setEstado(e.target.value);
                            handleAddressTypeChange(e.target.value);
                          }}
                          options={[{ value: "sp", label: "São Paulo" }]}
                          required={true}
                          showError={showErrors && !estado.trim()}
                        />
                      </div>
                      <div className="w-1/4 px-2">
                        <FormField
                          label="Cidade"
                          type="select"
                          value={cidade}
                          onChange={(e) => {
                            setCidade(e.target.value);
                            handleAddressTypeChange(e.target.value);
                          }}
                          options={[
                            { value: "Alphaville", label: "Alphaville" },
                          ]}
                          required={true}
                          showError={showErrors && !cidade.trim()}
                        />
                      </div>
                    </div>

                    <div className="w-full flex ">
                      <div className="w-1/3 px-2">
                        <FormField
                          label="Logradouro"
                          type="text"
                          value={logradouro}
                          onChange={(e) => setLogradouro(e.target.value)}
                          required={true}
                          showError={showErrors && !logradouro.trim()}
                        />
                      </div>
                      <div className="w-1/3 px-2">
                        <FormField
                          label="Bairro"
                          type="text"
                          value={bairro}
                          onChange={(e) => setBairro(e.target.value)}
                          required={true}
                          showError={showErrors && !bairro.trim()}
                        />
                      </div>
                      <div className="w-1/6  px-2">
                        <FormField
                          label="Número"
                          type="text"
                          value={numero}
                          onChange={(e) => setNumero(e.target.value)}
                          required={true}
                          showError={showErrors && !numero.trim()}
                        />
                      </div>
                      <div className="w-1/3 px-2">
                        <FormField
                          label="Complemento"
                          type="text"
                          value={complemento}
                          onChange={(e) => setComplemento(e.target.value)}
                          required={true}
                          showError={showErrors && !complemento.trim()}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="w-full flex justify-center p-5">
            <Button
              className="bg-transparent text-blue-700 font-bold hover:bg-slate-50"
              onClick={handleSubmit}
            >
              Finalizar cadastro
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
