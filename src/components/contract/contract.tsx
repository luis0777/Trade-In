"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
} from "@/components/ui/card";
import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
interface ContractProps {

  onContinueTo: () => void;
  
}

export function Contract({
  
  onContinueTo,
}: ContractProps) {
  const [showNextComponent] = React.useState(false);

  const sigCanvas = useRef<SignatureCanvas | null>(null);

  const limparAssinatura = () => {
    sigCanvas.current?.clear();
  };

  return showNextComponent ? (
    <>{onContinueTo}</>
  ) : (
    <div className=" w-full">
      <div className="bg-green-500 opacity-80">
        <div className="p-4 flex ">
          <p className=" gap-2 text-white text-2xl">
            <span className="font-bold  "> Dispositivo: </span>
            SAMSUNG GALAXY NOTE 10 PLUS 512GB PRETO
          </p>
        </div>
      </div>
      <div className="flex justify-center p-4 ">
        <p className="text-2xl font-semibold">
          TERMO DE AVALIAÇÃO PARA VENDA DE DISPOSITIVO MÓVEL USADO
        </p>
      </div>
      <div className="">
        <Card className="w-full">
          <div className="">
            <p className="text-lg font-semibold px-6">
              Informações do Vendedor
            </p>
          </div>
          <div className="flex justify-center px-6 p-4 w-full ">
            <div className="w-1/3">
              <p>
                Nome: Nicollas mendes <br /> Estado: São Paulo <br /> CPF:
                511.466.128-00
              </p>
            </div>
            <div className="w-1/3">
              <p>
                Endereço: Rua Patrocínio Paulista <br /> Número: 111 <br /> CEP:
                06390-400
              </p>
            </div>
            <div className="w-1/3">
              <p>
                País: Brasil <br /> E-mail: nicollas20mendes@gmail.com
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-lg font-semibold px-6">
              Nome da Empresa Compradora
            </p>
          </div>
          <div className="flex justify-center px-6  p-4 w-full ">
            <div className="w-1/3">
              <p>
                Nome: ASSURANT SOLUTIONS COMÉRCIO <br /> E SERVIÇOS DE
                EQUIPAMENTOS ELETRÔNICOS LTDA. <br /> Cidade: Barueri CNPJ:
                22.725.405/0001-20
              </p>
            </div>
            <div className="w-1/3">
              <p>
                Endereço: Alameda Rio Negro, 585, cj. 51 sala C <br /> Estado:
                São Paulo
              </p>
            </div>
            <div className="w-1/3">
              <p>
                CEP: 06454-000 <br /> País: Brasil
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-lg font-semibold px-6">
              Informações do Dispositivo
            </p>
          </div>
          <div className="flex justify-center px-6  p-4 w-full ">
            <div className="w-1/3">
              <p>
                Marca: SAMSUNG GALAXY NOTE 10 PLUS 512GB <br /> PRETO <br />{" "}
                Valor do desconto: R$100,00
              </p>
            </div>
            <div className="w-1/3">
              <p>
                IMEI/Serial Number: a <br /> Condição do dispositivo: Tela
                Trincada
              </p>
            </div>
            <div className="w-1/3">
              <p>SKU: BRZDEV11505TR</p>
            </div>
          </div>
          <div className="flex  w-full ">
            <div className="w-[30%]">
              <p className="text-lg font-semibold px-6">
                Informação do Trade In
              </p>
            </div>
            <div className="w-[70%]  items-center">
              <p className="text-lg font-semibold px-14">Informações da Loja</p>
            </div>
          </div>

          <div className="flex justify-center px-6  p-4 w-full ">
            <div className="w-1/3">
              <p>
                Código do Trade In: 0003479 <br /> Data de Emissão: 25/02/2025
              </p>
            </div>
            <div className="w-1/3">
              <p>
                Nome da Loja: HOMOLOG-000163_002C&V <br /> Nome do vendedor:
                Trainee <br />
                CNPJ: - <br />
                Endereço da Loja: RUA DA ASSEMBLEIA, 100 <br /> Cidade: Rio de
                Janeiro
              </p>
            </div>
            <div className="w-1/3"></div>
          </div>
          <div className="w-full ">
            <div className="">
              <p className="text-lg font-semibold px-6">TERMOS E CONDIÇÕES</p>
            </div>
            <div className=" text-lg mt-4">
              <div className="px-7">
                <p>
                  Este Termo de Avaliação de Dispositivo Usado é válido única e
                  exclusivamente:
                </p>
                <div className="px-6">
                  <span>
                    (i) na data de sua emissão; <br />
                    (ii) para utilização na mesma Loja...
                  </span>
                </div>
                <p>É vedada a utilização...</p>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="">
              <p className="text-lg font-semibold mt-6 px-6">
                TERMO DE VENDA DE DISPOSITIVO USADO
              </p>
            </div>
            <div className=" text-lg mt-4">
              <p className="px-7">
                Eu Nicollas mendes, RG nº 576046343 CPF/MF nº 511.466.128-00
                Endereço: Rua Patrocínio Paulista, 111 Cidade: Carapicuiba
                Estado: São Paulo CEP: 06390-400 <br /> Proprietário do
                dispositivo SAMSUNG GALAXY NOTE 10 PLUS 512GB PRETO IMEI/Serial
                Number: a, <br />
                <br />
                Registro, na qualidade de legítimo proprietário do Dispositivo
                Usado acima descrito – que foi por mim adquirido licitamente
                –que o vendo, <br />
                neste ato, à ASSURANT SOLUTIONS COMÉRCIO E SERVIÇOS DE
                EQUIPAMENTOS ELETRÔNICOS LTDA. ("Assurant"), inscrita no CNPJ/MF
                sob o <br /> número 22.725.405/0001-20, podendo a Assurant dar a
                destinação que desejar ao Dispositivo Novo. Declaro que excluí
                todas minhas <br /> informações e dados pessoais do Dispositivo
                Usado em questão, que foi por mim reiniciado para suas
                configurações de fábrica, com exclusão <br /> de todos seus
                dados, antes da assinatura deste termo. Também estou ciente de
                que a Assurant não acessará eventuais informações que não <br />{" "}
                tenham sido deletadas do Dispositivo Usado, que, caso
                localizadas, serão imediatamente removidas e destruídas. <br />
                <br />
                Reconheço que esta venda é realizada em caráter irrevogável e
                irretratável e que não poderei reclamar sua devolução ou
                restituição, a qualquer título ou forma. <br /> <br /> Autorizo
                o envio da Nota Fiscal de compra deste aparelho, que vendo neste
                ato, para meu e- mail que consta neste documento e que foi
                fornecido por mim.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="w-full p-6">
          <p className="text-lg font-semibold">Dados do Cliente:</p>
          <div className="text-lg mt-4">
            <span className="font-bold">Nome:</span> Nicollas mendes <br />
            <span className="font-bold">CPF:</span> 51146612800 <br />
            <span className="font-bold">Endereço:</span> Rua Patrocínio
            Paulista, 111, aaaaa - Carapicuiba | São Paulo - 06390400 <br />
          </div>

          <div className="flex flex-col items-center">
            <SignatureCanvas
              ref={sigCanvas}
              penColor="black"
              velocityFilterWeight={0.7} // Ajuste de sensibilidade do traço (valor otimizado)
              minWidth={1} // Largura mínima do traço (ajustado para um traço mais fino)
              maxWidth={5} // Largura máxima do traço
              canvasProps={{
                className: "border border-gray-300",
                style: {
                  width: "100%", // Garante que ocupe toda a largura disponível
                  height: "12rem", // Definindo altura ajustável (tamanho do campo de assinatura)
                  touchAction: "none", // Essencial para evitar problemas em dispositivos móveis
                  display: "block", // Impede comportamento inesperado de display
                  background: "#fff", // Garantir fundo branco para a área de assinatura
                  boxSizing: "border-box", // Garante que o padding/border não interfiram no tamanho
                },
              }}
            />

            <Button
              onClick={limparAssinatura}
              className="mt-4 bg-blue-500 text-white hover:bg-blue-700"
            >
              Limpar Assinatura
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
