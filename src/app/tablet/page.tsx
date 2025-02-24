"use client";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NotFoundItem } from "@/components/notFoundItem/notFoundItem";
import ProductEvaluation from "@/components/productEvaluation/productEvaluation";

import { DeviceCondition } from "@/components/deviceCondition/deviceCondition";

export default function Tablet() {
  const [selectedFabricante, setSelectedFabricante] = useState("");
  const [selectedModelo, setSelectedModelo] = useState("");
  const [selectedCapacidade, setSelectedCapacidade] = useState("");
  const [cor, setCor] = useState("");
  const tabletValue = 700.0;
  const [showForm, setShowForm] = useState(true);
  const [showTradeInDetails, setShowTradeInDetails] = useState(false);

  const resetChoices = () => {
    setSelectedFabricante("");
    setSelectedModelo("");
    setCor("");
    setSelectedCapacidade("");
  };

  const fabricantes = [{ value: "samsung", label: "Samsung" }];

  const modelos = {
    samsung: ["GALAXY NOTE 10 PLUS"],
  };

  const capacidades = {
    "GALAXY NOTE 10 PLUS": ["128GB", "256GB", "512GB"],
  };

  const cores = {
    "128GB": ["Amarelo"],
    "256GB": ["azul", "Branco", "Preto"],
    "512GB": ["azul", "Branco", "Preto"],
  };
  const handleCorChange = (value: string) => {
    setCor(value);
    setShowForm(false);
  };

  const renderValorCard = () => {
    if (!cor) return null;

    if (cor === "Amarelo") {
      return <NotFoundItem />;
    } else {
      return (
        <ProductEvaluation
          productValue={tabletValue}
          showproductEvaluation={showTradeInDetails}
          setShowForm={setShowForm}
          setShowproductEvaluation={setShowTradeInDetails}
          resetChoices={resetChoices}
          onContinueTo={<DeviceCondition />}
          onResetTo={<Tablet />}
        />
      );
    }
  };

  return (
    <section className="py-20">
      <Navbar />
      <div className="w-full flex h-[5rem] justify-center items-center">
        <div className="w-11/12 flex justify-center text-3xl pl-36">
          <b>Seção Tablet</b>
        </div>
        <div className="w-1/12 flex justify-center text-3xl">
          <Link href="/novaCompra">
            <Button className="bg-transparent text-blue-700 shadow-md font-bold hover:bg-slate-50">
              Home
            </Button>
          </Link>
        </div>
      </div>

      {showForm ? (
        <div className="w-full h-[40rem] flex items-center justify-center">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Identifique seu tablet</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  {/* Select Fabricante */}
                  <div className="flex flex-col space-y-1.5">
                    <Select
                      onValueChange={(value) => {
                        setSelectedFabricante(value);
                        setSelectedModelo("");
                        setSelectedCapacidade("");
                        setCor("");
                      }}
                    >
                      <SelectTrigger id="fabricante">
                        <SelectValue placeholder="Selecione o fabricante" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {fabricantes.map((fabricante) => (
                          <SelectItem
                            key={fabricante.value}
                            value={fabricante.value}
                          >
                            {fabricante.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Select Modelo */}
                  {selectedFabricante && (
                    <div>
                      <Select
                        onValueChange={(value) => {
                          setSelectedModelo(value);
                          setSelectedCapacidade("");
                          setCor("");
                        }}
                      >
                        <SelectTrigger id="modelo">
                          <SelectValue placeholder="Selecione o modelo" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          {modelos[
                            selectedFabricante as keyof typeof modelos
                          ]?.map((modelo, index) => (
                            <SelectItem key={index} value={modelo}>
                              {modelo}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Select Capacidade */}
                  {selectedModelo && (
                    <div>
                      <Select
                        onValueChange={(value) => {
                          setSelectedCapacidade(value);
                          setCor("");
                        }}
                      >
                        <SelectTrigger id="capacidade">
                          <SelectValue placeholder="Selecione a capacidade" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          {capacidades[
                            selectedModelo as keyof typeof capacidades
                          ]?.map((capacidade, index) => (
                            <SelectItem key={index} value={capacidade}>
                              {capacidade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {selectedCapacidade && (
                    <div>
                      <Select onValueChange={handleCorChange}>
                        <SelectTrigger id="cor">
                          <SelectValue placeholder="Selecione a cor" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          {cores[selectedCapacidade as keyof typeof cores]?.map(
                            (cor, index) => (
                              <SelectItem key={index} value={cor}>
                                {cor}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
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
