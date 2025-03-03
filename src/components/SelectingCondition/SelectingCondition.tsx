"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowBigRight, ArrowBigLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { EditarColaborador } from "../editarColaborador/editarColaborador";
import { useStep } from "@/context/StepContext";
import { SelectedModel } from "../selectedModel/selectedModel";

export function SelectingCondition() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [showProductEvaluation, setShowProductEvaluation] = useState(false);
  const { setCurrentStep } = useStep();

  const handleSelect = (card: string) => {
    setSelectedCard(card);
    setShowProductEvaluation(true);
  };

  return (
    <section className="py-16">
      <div className="flex justify-center w-full gap-8">
        <div className="flex-col items-center">
          <Card
            onClick={() => handleSelect("bom")}
            className={`w-[80%] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
              selectedCard === "bom" ? "border-2 border-green-600" : ""
            }`}
          >
            <CardContent className="flex flex-col items-center">
              <div className="w-16 h-24 flex items-center">
                <img
                  src="https://model-parceiro.tradeinassurant.com/assets/layout/images/bom-off.png"
                  alt="Bom"
                />
              </div>
              <div>
                <p className="text-center">
                  Aparelho liga <br />
                  Possível verificar IMEI (*#06#) <br />
                  Capaz de fazer ligação 10315, acionar viva voz, finalizar e
                  botão de home se existir
                  <br />
                  Botões funcionando <br />
                  Telas sem presença de trincas quebras, ou manchas <br />
                  Não possui poeira/sujeira dentro do visor <br /> Touchscreen
                  funcionando <br /> Sem dano físico <br /> Sem dano por água{" "}
                  <br />
                  Capaz de efetuar os testes, sem estar conectado na fonte de
                  energia <br /> Sem descaracterização do produto original{" "}
                  <br />
                  Homologado pela ANATEL
                </p>
              </div>
              <div className="p-5">
                <Button
                  className={`bg-blue-700 hover:bg-green-600 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex items-center gap-2 ${
                    selectedCard === "bom" ? "bg-green-600" : ""
                  }`}
                >
                  {selectedCard === "bom" && (
                    <Check className="w-5 h-5 text-white" />
                  )}
                  R$ 700.00
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-col items-center">
          <Card
            onClick={() => handleSelect("ruim")}
            className={`w-[80%] h-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
              selectedCard === "ruim" ? "border-2 border-green-600" : ""
            }`}
          >
            <CardContent className="flex flex-col items-center">
              <div className="w-16 h-24 flex items-center">
                <img
                  src="https://model-parceiro.tradeinassurant.com/assets/layout/images/trincado-off.png"
                  alt="Ruim"
                />
              </div>
              <div>
                <p className="text-center">
                  Aparelho liga <br />
                  Possível verificar IMEI (*#06#) <br /> Tela apresenta trincas
                  ou quebras ou manchas/imperfeições <br /> Vidro traseiro
                  trincado ou quebrado <br /> Possui poeira/sujeira dentro do
                  visor <br /> Capaz de efetuar os testes, sem estar conectado
                  na fonte de energia <br /> Sem descaracterização do produto
                  original <br />
                  Homologado pela ANATEL
                </p>
              </div>
              <div className="p-5">
                <Button
                  className={`bg-blue-700 hover:bg-green-600 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex items-center gap-2 ${
                    selectedCard === "ruim" ? "bg-green-600" : ""
                  }`}
                >
                  {selectedCard === "ruim" && (
                    <Check className="w-5 h-5 text-white" />
                  )}
                  R$ 100.00
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {selectedCard && (
        <div className="mt-8">
          <SelectedModel />
        </div>
      )}

      <div className="flex justify-between p-10">
        <Link href="/novaCompra">
          <Button
            className="w-32 bg-blue-700 hover:bg-slate-400 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => setCurrentStep(1)}
          >
            <ArrowBigLeft /> VOLTAR
          </Button>
        </Link>
      </div>
    </section>
  );
}
