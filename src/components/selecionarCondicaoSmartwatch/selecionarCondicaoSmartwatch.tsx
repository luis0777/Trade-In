import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TradeInError } from "../tradeInError/tradeInError";
import { TradeInSuccess } from "../tradeInSucess/tradeInSucess";

export function SelecionarCondicaoSmartwatch() {
  const [currentTab, setCurrentTab] = useState("1");
  const [showResult, setShowResult] = useState(false);
  const [selections, setSelections] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });

  const handleSelection = (tab: string, choice: string) => {
    setSelections((prev) => ({
      ...prev,
      [tab]: choice,
    }));

    const nextTab = String(Number(tab) + 1);
    if (Number(nextTab) <= 6) {
      setCurrentTab(nextTab);
    }
  };

  const handleTabChange = (value: string) => {
    setCurrentTab(value);
  };

  const todasQuestoesRespondidas = (selections: Record<string, string>) => {
    return Object.values(selections).every(
      (value) => value === "Sim" || value === "Não"
    );
  };

  const todasRespostasSim = (selections: Record<string, string>) => {
    return Object.values(selections).every((value) => value === "Sim");
  };

  const handleAdvance = () => {
    setShowResult(true);
  };

  

  return (
    <>
      {!showResult ? (
        <div className="w-full flex flex-col items-center justify-center pt-32">
          <div>
            <b>Selecione a condição do aparelho</b>
          </div>
          <Tabs
            value={currentTab}
            className="w-[800px] to-blue-700"
            onValueChange={handleTabChange}
          >
            <TabsList className="w-full grid grid-cols-6">
              <TabsTrigger value="1" className="w-full">
                {selections[1] ? selections[1] : "Condição 1"}
              </TabsTrigger>
              <TabsTrigger value="2" className="w-full">
                {selections[2] ? selections[2] : "Condição 2"}
              </TabsTrigger>
              <TabsTrigger value="3" className="w-full">
                {selections[3] ? selections[3] : "Condição 3"}
              </TabsTrigger>
              <TabsTrigger value="4" className="w-full">
                {selections[4] ? selections[4] : "Condição 4"}
              </TabsTrigger>
              <TabsTrigger value="5" className="w-full">
                {selections[5] ? selections[5] : "Condição 5"}
              </TabsTrigger>
              <TabsTrigger value="6" className="w-full">
                {selections[6] ? selections[6] : "Condição 6"}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="1">
              <div>
                <b>O equipamento está ligado? Chama? Você pode ouvindo?</b>
                <p>- Considere a resposta afirmativa sempre que:</p>
                <p>
                  - O dispositivo permanece ligado por mais de 30 segundos
                  certifique-se de que tenha pelo menos 5% de bateria ao realizar
                  esta verificação.
                </p>
                <p>- Um telefonema poderia ter sido feito</p>
                <div className="flex justify-between">
                  <Button
                    onClick={() => handleSelection("1", "Não")}
                    id="firstConditionOneNo"
                    className="bg-blue-700 text-white"
                  >
                    Não
                  </Button>
                  <Button
                    onClick={() => handleSelection("1", "Sim")}
                    id="firstConditionOneYes"
                    className="bg-blue-700 text-white"
                  >
                    Sim
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="2">
              <div>
                <b>O dispositivo está em bom estado (não apresenta danos)?</b>
                <p>- Considere resposta negativa sempre que:</p>
                <p>
                  - A tela está quebrada, batida, separada do case ou apresenta
                  arranhões profundos (perceptíveis ao toque).
                </p>
                <p>
                  - A caixa ou o vidro traseiro estão quebrados, tortos, rachados,
                  destacados ou apresentam riscos profundos (perceptíveis ao toque).
                </p>
                <p>
                  - A lente da camera é rota, estrelada ou apresenta raios profundos
                  (perceptíveis ao tato).
                </p>
                <p>- Os botões estão danificados ou não funcionam corretamente</p>
                <p>
                  - O equipamento conta com modificações na superfície como
                  incrustações, pinturas, agarrados etc.
                </p>
                <div className="flex justify-between">
                  <Button
                    onClick={() => handleSelection("2", "Não")}
                    id="firstConditionOneNo"
                    className="bg-blue-700 text-white"
                  >
                    Não
                  </Button>
                  <Button
                    onClick={() => handleSelection("2", "Sim")}
                    id="firstConditionOneYes"
                    className="bg-blue-700 text-white"
                  >
                    Sim
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="3">
              <div>
                <b>O dispositivo está em mau estado (sem danos)?</b>
                <p>- Considere uma resposta negativa desde que:</p>
                <p>
                  - A tela está quebrada, batida, separada do case ou apresenta
                  arranhões profundos (perceptíveis ao toque).
                </p>
                <p>
                  - A caixa ou o vidro traseiro estão quebrados, tortos, rachados,
                  destacados ou apresentam riscos profundos (perceptíveis ao toque).
                </p>
                <p>
                  - A lente da câmera está quebrada, estilhaçada ou possui raios
                  profundos (você pode perceber isso).
                </p>
                <p>- Os botões estão danificados ou não funcionam corretamente</p>
                <p>
                  - O equipamento possui modificações superficiais como
                  incrustações, pinturas, grips, etc.
                </p>
                <div className="flex justify-between">
                  <Button
                    onClick={() => handleSelection("3", "Não")}
                    id="firstConditionOneNo"
                    className="bg-blue-700 text-white"
                  >
                    Não
                  </Button>
                  <Button
                    onClick={() => handleSelection("3", "Sim")}
                    id="firstConditionOneYes"
                    className="bg-blue-700 text-white"
                  >
                    Sim
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="4">
              <div>
                <b>
                  O tecido do dispositivo está em boas condições? (Não há danos ou
                  falhas)?
                </b>
                <p>- Considere uma resposta negativa desde que:</p>
                <p>
                  - A tela mostra pixels mortos, sinais de fantasmas na tela ou
                  variação de cores
                </p>
                <p>- O tecido sensível ao toque não funciona corretamente.</p>
                <div className="flex justify-between">
                  <Button
                    onClick={() => handleSelection("4", "Não")}
                    id="firstConditionOneNo"
                    className="bg-blue-700 text-white"
                  >
                    Não
                  </Button>
                  <Button
                    onClick={() => handleSelection("4", "Sim")}
                    id="firstConditionOneYes"
                    className="bg-blue-700 text-white"
                  >
                    Sim
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="5">
              <div>
                <b>
                  O dispositivo está em bom estado? (Não há evidência de ingestão de
                  líquidos)?
                </b>
                <p>- Considere resposta negativa sempre que:</p>
                <p>- Você pode visualizar líquido ou umidade através da tela.</p>
                <p>
                  - Há evidências de danos por umidade nas portas, câmeras, ranhuras
                  SIM ou NÃO.
                </p>
                <p>
                  - O indicador de contato por líquidos esta ativo (rojo ou
                  laranja), aplica-se a alguns modelos.
                </p>
                <div className="flex justify-between">
                  <Button
                    onClick={() => handleSelection("5", "Não")}
                    id="firstConditionOneNo"
                    className="bg-blue-700 text-white"
                  >
                    Não
                  </Button>
                  <Button
                    onClick={() => handleSelection("5", "Sim")}
                    id="firstConditionOneYes"
                    className="bg-blue-700 text-white"
                  >
                    Sim
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="6">
              <div>
                <b>O dispositivo foi desbloqueado?</b>
                <p>- O dispositivo foi desbloqueado?</p>
                <p>- Considere a resposta afirmativa sempre que:</p>
                <p>
                  - A função Find My Iphone / Find My Device / Samsung ID / Google
                  ID está desativada
                </p>

                <div className="flex justify-between">
                  <Button
                    onClick={() => handleSelection("6", "Não")}
                    id="firstConditionOneNo"
                    className="bg-blue-700 text-white"
                  >
                    Não
                  </Button>
                  <Button
                    onClick={() => handleSelection("6", "Sim")}
                    id="firstConditionOneYes"
                    className="bg-blue-700 text-white"
                  >
                    Sim
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          {todasQuestoesRespondidas(selections) && (
            <Button onClick={handleAdvance} className="bg-blue-700 text-white">
              Avançar
            </Button>
          )}
        </div>
      ) : (
        <>
          {todasRespostasSim(selections) ? (
            <TradeInSuccess />
          ) : (
            <TradeInError />
          )}
        </>
      )}
    </>
  );
}
