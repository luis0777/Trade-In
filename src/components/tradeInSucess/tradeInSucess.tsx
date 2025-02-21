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
import { CadastrarCliente } from "../cadastrarCliente/cadastrarCliente";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";

export function TradeInSuccess() {
  const [showNextComponent, setShowNextComponent] = useState(false);

  if (showNextComponent) {
    return <CadastrarCliente />; 
  }
  return (
    <div className="w-full h-[40rem] flex items-center justify-center flex-col ">
      <Card className="w-[450px] ">
        <CardHeader className="flex flex-col items-center">
          <CardTitle>CPF</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 text-center ">
                <Input  placeholder="Digite o CPF">
               
                </Input>
                
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">


            <div className="flex flex-col gap-2">
         <div>

         <Button
              className="bg-blue-700 text-white"
              onClick={() => setShowNextComponent(true)}
            >
              Verificar existência no sistema
            </Button>

         </div> 

         

         </div>

            

            
          
        </CardFooter>
      </Card>
      <div className="flex justify-start w-[450px] mt-2">


         <Button
              className="bg-blue-700 text-white"
              onClick={() => setShowNextComponent(true)}
            >
             Voltar
            </Button>
         </div>
    </div>
  );
}
