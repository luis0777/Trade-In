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
import { NotFoundNovaCompra } from "@/components/notFoundNovaCompra/notFoundNovaCompra";

import TradeInDetailsAvaliacaoItem from "@/components/avaliacaoItem/avaliacaoItem";

export default function Tablet() {
  // Estados para armazenar as seleções
  const [selectedFabricante, setSelectedFabricante] = useState("");
  const [selectedModelo, setSelectedModelo] = useState("");
  const [selectedCapacidade, setSelectedCapacidade] = useState("");
  const [cor, setCor] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [showAvaliacao, setShowAvaliacao] = useState(false);

  // Dados dos fabricantes
  const fabricantes = [{ value: "samsung", label: "Samsung" }];

  // Modelos para cada fabricante
  const modelos = {
    samsung: ["GALAXY NOTE 10 PLUS"],
  };

  // Capacidades para cada modelo
  const capacidades = {
    "GALAXY NOTE 10 PLUS": ["128GB", "256GB", "512GB"],
  };

  // Cores para cada capacidade
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
      return <NotFoundNovaCompra />;
    } else {
      return (
        <TradeInDetailsAvaliacaoItem
          showAvaliacao={showAvaliacao}
          setShowForm={setShowForm}
          setShowAvaliacao={setShowAvaliacao}
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
              <CardTitle>Identifique seu Notebook</CardTitle>
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
                    <div className="mt-2">
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
                    <div className="mt-2">
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

                  {/* Select Cor */}
                  {selectedCapacidade && (
                    <div className="mt-2">
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
