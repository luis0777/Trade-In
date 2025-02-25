import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CompletionProps {
  setShowPreviousComponent: (value: boolean) => void;
  previousComponent: string;
  onContinueTo: React.ReactNode; //
}

export function Completion({
  setShowPreviousComponent,
  previousComponent,
  onContinueTo,
}: CompletionProps) {
  const [date, setDate] = React.useState<Date>();

  const handleNewPerson = () => {
    setShowPreviousComponent(false);
  };

  const [showNextComponent, setShowNextComponent] = React.useState(false);

  const handleNext = () => {
    setShowNextComponent(true);
  };

  const [position, setPosition] = React.useState("bottom");
  const [placeholder, setPlaceholder] = useState("Número de série");

  const handleSelectChange = (e: { target: { value: string } }) => {
    setPlaceholder(
      e.target.value === "smartphone"
        ? "Digite o seu IMEI do aparelho"
        : "Número de série"
    );
  };

  const handleValueChange = (value: string) => {
    setPosition(value);
    handleSelectChange({ target: { value } });
  };

  return showNextComponent ? (
    <>{onContinueTo}</>
  ) : (
    <div className="flex justify-center w-full h-full p-12 ">
      <div className="flex justify-center w-[50%] text-center text-lg ">
        <Card className="w-full h-full p-6 ">
          <CardHeader>
            <div className="flex justify-center items-center ">
              <div className="flex justify-center items-center bg-green-500 w-16 h-16 rounded-full">
                <Check className="text-white w-8 h-8" />
              </div>
            </div>

            <CardTitle className="text-lg text-4xl ">
              Cód da Compra #0003478
            </CardTitle>
            <CardDescription className="text-lg ">
              Obrigado! O seu pedido de compra foi finalizado com sucesso.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="p-8">
                      Vincular IMEI à essa compra
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent className="flex flex-col items-center space-y-4">
                    <AlertDialogHeader className="w-full text-center">
                      <AlertDialogTitle>
                        ADICIONAR IMEI / NÚMERO DE SÉRIE
                      </AlertDialogTitle>
                      <AlertDialogDescription className="w-full flex justify-center gap-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-30">
                              Selecione o Aparelho
                              <ChevronDown />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-52">
                            <DropdownMenuLabel>
                              Selecione o Aparelho
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup
                              value={position}
                              onValueChange={handleValueChange}
                            >
                              <DropdownMenuRadioItem value="smartphone">
                                SMARTPHONE
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="acessorio">
                                ACESSÓRIO
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="smartwatch">
                                SMARTWATCH
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="outros">
                                OUTROS
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <Input
                          type="text"
                          placeholder={placeholder}
                          className="w-56"
                        />
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <Textarea placeholder="Descrição" className="w-[90%]" />

                    <AlertDialogFooter className="w-full flex justify-center">
                      <AlertDialogAction className="flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
                        <Check />
                        Vincular novo item
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/novaCompra">
              <Button variant="outline">Inicio</Button>
            </Link>

            <Button>Imprimir contrato</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
