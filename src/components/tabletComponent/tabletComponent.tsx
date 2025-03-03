"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NotFoundItem } from "../notFoundItem/notFoundItem";
import { ProductEvaluation } from "../productEvaluation/productEvaluation";

interface TabletComponentProps {
  toStep2: (type: string) => void;
}

export function TabletComponent({ toStep2 }: TabletComponentProps) {
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
      return <ProductEvaluation toStep2={() => toStep2('tablet')} />;
    }
  };

  return (
    <div className="w-full  flex items-center justify-center">
      {showForm ? (
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
                      {modelos[selectedFabricante as keyof typeof modelos]?.map(
                        (modelo, index) => (
                          <SelectItem key={index} value={modelo}>
                            {modelo}
                          </SelectItem>
                        )
                      )}
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
      ) : (
        renderValorCard()
      )}
    </div>
  );
}
