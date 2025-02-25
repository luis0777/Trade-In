"use client";

import { useState } from "react";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { FormField } from "@/components/formField/formField";

export default function Perfil() {
  const { toast } = useToast();

  //Data Inicial
  const [dateStart, setDateStart] = useState<Date | undefined>(undefined);
  const [isCalendarOpenStart, setIsCalendarOpenStart] = useState(false);
  const handleDateSelectStart = (selectedDate: Date | undefined) => {
    setDateStart(selectedDate);
    setIsCalendarOpenStart(false);
  };

  //Data Final
  const [dateEnd, setDateEnd] = useState<Date | undefined>(undefined);
  const [isCalendarOpenEnd, setIsCalendarOpenEnd] = useState(false);
  const handleDateSelectEnd = (selectedDate: Date | undefined) => {
    setDateEnd(selectedDate);
    setIsCalendarOpenEnd(false);
  };

  const [selectedReport, setSelectedReport] = useState<string>("");

  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = () => {
    if (!selectedReport.trim()) {
      setShowErrors(true);
      toast({
        title: "Falha!",
        description: "Preencha os campos obrigatórios.",
        duration: 2000,
        className: "bg-red-500 text-white",
      });
      return;
    }

    toast({
      title: "Sucesso!",
      description: "Relatório gerado com sucesso.",
      duration: 2000,
    });
  };

  return (
    <section className="py-52">
      <Navbar />

      <div className="w-full flex justify-center flex-col mt-5 ">
        <div className="w-full">
          <b className="flex justify-center text-3xl">Informações do perfil</b>
        </div>

        {/* Perfil */}
        <div className="space-y-7 ">
          <div className="w-full  flex justify-center">
            <Card className="w-2/3 h-40">
              <CardHeader>
                <CardTitle className="flex justify-center">Perfil</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col  space-y-3">
                      <Label htmlFor="name" className="flex justify-center">
                        {" "}
                        <b>Loja:</b>HOMOLOG-00163_002&V{" "}
                      </Label>
                      <Label htmlFor="name" className="flex justify-center">
                        {" "}
                        <b>Colaborador:</b>Trainee{" "}
                      </Label>
                      <Label htmlFor="name" className="flex justify-center">
                        {" "}
                        <b>Nível de Acesso:</b>Administrador Loja
                      </Label>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* //Relatórios */}
          <div className="w-full flex justify-center">
            <Card className="w-2/3 h-62">
              <CardHeader>
                <CardTitle className="flex justify-center">
                  Relatórios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5"></div>
                    <div className="flex flex-col space-y-1.5 justify-center items-center">
                      <div className="w-1/2   ">
                        <FormField
                          label="Tipo de Relatório"
                          type="select"
                          value={selectedReport}
                          onChange={(e) => setSelectedReport(e.target.value)}
                          options={[
                            { value: "next", label: "Consultas de IMEI" },
                            { value: "sveltekit", label: "Aparelhos" },
                            { value: "astro", label: "TradeIl Geral" },
                            { value: "nuxt", label: "TradeIl Cancelados" },
                            { value: "perdido", label: "Trade Perdido" },
                          ]}
                          required={true}
                          showError={showErrors && !selectedReport}
                        />
                      </div>

                      <div className="w-1/2 flex flex-col justify-center relative ">
                        <b className="flex justify-center text-sm">
                          Data inicial
                        </b>
                        {/* Input que exibe a data selecionada */}
                        <Input
                          type="text"
                          value={
                            dateStart ? dateStart.toLocaleDateString() : ""
                          }
                          onClick={() =>
                            setIsCalendarOpenStart(!isCalendarOpenStart)
                          }
                          readOnly
                          placeholder="Data inicial"
                          className="cursor-pointer  "
                        />

                        {/* Calendário que aparece ao clicar no input */}
                        {isCalendarOpenStart && (
                          <div className="absolute top-full left-0 mt-1 z-50 bg-white border rounded-md shadow-lg">
                            <Calendar
                              mode="single"
                              selected={dateStart}
                              onSelect={handleDateSelectStart}
                              className="rounded-md"
                            />
                          </div>
                        )}
                      </div>

                      <div className="w-1/2 flex flex-col justify-center relative">
                        <b className="flex justify-center text-sm">
                          Data final
                        </b>
                        {/* Input que exibe a data selecionada */}
                        <Input
                          type="text"
                          value={dateEnd ? dateEnd.toLocaleDateString() : ""}
                          onClick={() =>
                            setIsCalendarOpenEnd(!isCalendarOpenEnd)
                          }
                          readOnly
                          placeholder="Data final"
                          className="cursor-pointer "
                        />

                        {/* Calendário que aparece ao clicar no input */}
                        {isCalendarOpenEnd && (
                          <div className="absolute top-full left-0 mt-1 z-50 bg-white border rounded-md shadow-lg">
                            <Calendar
                              mode="single"
                              selected={dateEnd}
                              onSelect={handleDateSelectEnd}
                              className="rounded-md"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-blue-700 " onClick={handleSubmit}>
                  Gerar relatórios
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
