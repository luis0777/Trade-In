import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { EditarColaborador } from "../editarColaborador/editarColaborador";

export function CadastrarCliente() {
  const [showNextComponent, setShowNextComponent] = useState(false);

  if (showNextComponent) {
    return <EditarColaborador />; // Your new component here
  }
  return (
    <div className="w-full h-[40rem] flex items-center justify-center">
      <Card className="w-[450px] ">
        <CardHeader className="flex flex-col items-center">
          <CardTitle>Seu aparelho vale até R$</CardTitle>
          <CardDescription className="text-4xl">1400,00</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 text-center ">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Modelo que será comprado</AccordionTrigger>
                  <AccordionContent>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o modelo que será comprado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opcao1">
                          Samsung - GALAXY S23
                        </SelectItem>
                        <SelectItem value="opcao2">
                          Apple - IPHONE 12
                        </SelectItem>
                        <SelectItem value="opcao3">
                          Samsung - Galaxy S24 Ultra 5G
                        </SelectItem>
                        <SelectItem value="opcao4">
                          Apple - IPHONE 11
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Camapanha de incentivo?</AccordionTrigger>
                  <AccordionContent>
                    Nenhuma campanha ativa no momento.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
         
            <Button
              className="bg-blue-700 text-white"
              onClick={() => setShowNextComponent(true)}
            >
              Avançar
            </Button>
          
        </CardFooter>
      </Card>
    </div>
  );
}
