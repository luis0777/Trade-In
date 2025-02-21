"use client";

import { useState } from "react";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NotFoundNovaCompra } from "@/components/notFoundNovaCompra/notFoundNovaCompra";
import TradeInDetailsNovaCompra from "@/components/tradeInDetailsNovaCompra/tradeInDetailsNovaCompra";
import Link from "next/link";

export default function Smartwatch() {
  const [fabricante, setFabricante] = useState("");
  const [modelo, setModelo] = useState("");
  const [cor, setCor] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [showForm, setShowForm] = useState(true);

  const [showTradeInDetails, setShowTradeInDetails] = useState(false);

  const handleFabricanteChange = (value: string) => {
    setFabricante(value);
    setModelo("");
    setCor("");
    setTamanho("");
  };
  const handleModeloChange = (value: string) => {
    setModelo(value);
    setCor("");
    setTamanho("");
  };

  const handleCorChange = (value: string) => {
    setCor(value);
    setTamanho("");
  };

  const handleTamanhoChange = (value: string) => {
    setTamanho(value);
    setShowForm(false);
  };

  const renderValorCard = () => {
    if (!tamanho) return null;

    if (tamanho === "40mm" || tamanho === "44mm") {
      return <NotFoundNovaCompra />;
    }

    if (tamanho === "41mm" || tamanho === "45mm") {
      return (
        <TradeInDetailsNovaCompra
          showTradeInDetails={showTradeInDetails}
          setShowForm={setShowForm}
          setShowTradeInDetails={setShowTradeInDetails}
        />
      );
    }
  };

  return (
    <section className="py-20">
      <Navbar />

      <div className="w-full flex  h-[5rem] justify-center items-center">
        <div className=" w-11/12 flex justify-center text-3xl pl-36 ">
          <b>Seção Smartwatch</b>
        </div>
        <div className=" w-1/12  flex justify-center text-3xl  ">
          <Link href="/novaCompra">
            <Button className="bg-transparent text-blue-700 shadow-md font-bold hover:bg-slate-50">
              Home
            </Button>
          </Link>
        </div>
      </div>

      {showForm ? (
        <div className=" w-full h-[40rem] flex items-center justify-center ">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Identifique seu Smartwatch</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Select onValueChange={handleFabricanteChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o fabricante" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="samsung">Samsung</SelectItem>
                      </SelectContent>
                    </Select>

                    {fabricante && (
                      <Select onValueChange={handleModeloChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o modelo" />
                        </SelectTrigger>
                        <SelectContent>
                          {fabricante === "apple" ? (
                            <>
                              <SelectItem value="watch-se">
                                Apple Watch SE
                              </SelectItem>
                              <SelectItem value="watch-7">
                                Apple Watch Series 7
                              </SelectItem>
                              <SelectItem value="watch-8">
                                Apple Watch Series 8
                              </SelectItem>
                              <SelectItem value="watch-ultra">
                                Apple Watch Ultra
                              </SelectItem>
                            </>
                          ) : (
                            <>
                              <SelectItem value="watch4">
                                Galaxy Watch 4
                              </SelectItem>
                              <SelectItem value="watch5">
                                Galaxy Watch 5
                              </SelectItem>
                              <SelectItem value="watch5-pro">
                                Galaxy Watch 5 Pro
                              </SelectItem>
                              <SelectItem value="watch6">
                                Galaxy Watch 6
                              </SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    )}

                    {modelo && (
                      <Select onValueChange={handleCorChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a cor" />
                        </SelectTrigger>
                        <SelectContent>
                          {modelo === "watch-se" ||
                          modelo === "watch-7" ||
                          modelo === "watch-8" ||
                          modelo === "watch-ultra" ? (
                            <>
                              <SelectItem value="amarelo">Amarelo</SelectItem>
                              <SelectItem value="vermelho">Vermelho</SelectItem>
                              <SelectItem value="cinza">Cinza</SelectItem>
                            </>
                          ) : (
                            <>
                              <SelectItem value="branco">Branco</SelectItem>
                              <SelectItem value="preto">Preto</SelectItem>
                              <SelectItem value="azul">Azul</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    )}

                    {cor && (
                      <Select onValueChange={handleTamanhoChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tamanho" />
                        </SelectTrigger>
                        <SelectContent>
                          {cor === "amarelo" ||
                          cor === "vermelho" ||
                          cor === "cinza" ? (
                            <>
                              <SelectItem value="41mm">41MM</SelectItem>
                              <SelectItem value="44mm">44MM</SelectItem>
                            </>
                          ) : (
                            <>
                              <SelectItem value="40mm">40MM</SelectItem>
                              <SelectItem value="45mm">45MM</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      ) : (
        renderValorCard()
      )}

      <Footer />
    </section>
  );
}
