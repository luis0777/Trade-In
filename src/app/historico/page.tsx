"use client";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownUp, FilePen, Camera, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";

const loja = [
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    VENDEDOR: "Nestor",
    PRODUTO: "IPHONE 13 PRO MAX",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO EM LOJA",
    VALORCONSUMIDOR: "R$ 1.000,00",
  },
  {
    ID: "1967",
    IMEI: "356656423411941",
    DATA: "10/11/2024",
    CLIENTE: "JOÃO",
    VENDEDOR: "Carlos",
    PRODUTO: "SAMSUNG GALAXY S22",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO PERDIDO",
    VALORCONSUMIDOR: "R$ 2.500,00",
  },
  {
    ID: "1968",
    IMEI: "356656423411942",
    DATA: "05/10/2024",
    CLIENTE: "MARIA",
    VENDEDOR: "Fernanda",
    PRODUTO: "IPHONE 14 PRO",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO EM LOJA",
    VALORCONSUMIDOR: "R$ 6.200,00",
  },
  {
    ID: "1969",
    IMEI: "356656423411943",
    DATA: "25/09/2024",
    CLIENTE: "ANTÔNIO",
    VENDEDOR: "Ricardo",
    PRODUTO: "XIAOMI MI 11",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO PERDIDO",
    VALORCONSUMIDOR: "R$ 3.100,00",
  },
  {
    ID: "1970",
    IMEI: "356656423411944",
    DATA: "15/08/2024",
    CLIENTE: "LUCAS",
    VENDEDOR: "Bruna",
    PRODUTO: "MOTOROLA EDGE 30",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO EM LOJA",
    VALORCONSUMIDOR: "R$ 2.800,00",
  },
  {
    ID: "1971",
    IMEI: "356656423411945",
    DATA: "12/07/2024",
    CLIENTE: "FERNANDA",
    VENDEDOR: "Marcos",
    PRODUTO: "IPHONE 12",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO PERDIDO",
    VALORCONSUMIDOR: "R$ 4.500,00",
  },
  {
    ID: "1972",
    IMEI: "356656423411946",
    DATA: "30/06/2024",
    CLIENTE: "DANIEL",
    VENDEDOR: "Patrícia",
    PRODUTO: "SAMSUNG GALAXY S21",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO EM LOJA",
    VALORCONSUMIDOR: "R$ 3.900,00",
  },
  {
    ID: "1973",
    IMEI: "356656423411947",
    DATA: "10/05/2024",
    CLIENTE: "GABRIEL",
    VENDEDOR: "Júlia",
    PRODUTO: "IPHONE 13 MINI",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO PERDIDO",
    VALORCONSUMIDOR: "R$ 5.100,00",
  },
  {
    ID: "1974",
    IMEI: "356656423411948",
    DATA: "15/04/2024",
    CLIENTE: "ANA",
    VENDEDOR: "Roberto",
    PRODUTO: "XIAOMI REDMI NOTE 11",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO EM LOJA",
    VALORCONSUMIDOR: "R$ 2.100,00",
  },
  {
    ID: "1975",
    IMEI: "356656423411949",
    DATA: "22/03/2024",
    CLIENTE: "CARLOS",
    VENDEDOR: "Paula",
    PRODUTO: "SAMSUNG GALAXY A73",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO PERDIDO",
    VALORCONSUMIDOR: "R$ 2.700,00",
  },
  {
    ID: "1967",
    IMEI: "356656423411941",
    DATA: "10/11/2024",
    CLIENTE: "JOÃO",
    VENDEDOR: "Carlos",
    PRODUTO: "SAMSUNG GALAXY S22",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO PERDIDO",
    VALORCONSUMIDOR: "R$ 2.500,00",
  },
  {
    ID: "1968",
    IMEI: "356656423411942",
    DATA: "05/10/2024",
    CLIENTE: "MARIA",
    VENDEDOR: "Fernanda",
    PRODUTO: "IPHONE 14 PRO",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO EM LOJA",
    VALORCONSUMIDOR: "R$ 6.200,00",
  },
  {
    ID: "1969",
    IMEI: "356656423411943",
    DATA: "25/09/2024",
    CLIENTE: "ANTÔNIO",
    VENDEDOR: "Ricardo",
    PRODUTO: "XIAOMI MI 11",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO PERDIDO",
    VALORCONSUMIDOR: "R$ 3.100,00",
  },
  {
    ID: "1970",
    IMEI: "356656423411944",
    DATA: "15/08/2024",
    CLIENTE: "LUCAS",
    VENDEDOR: "Bruna",
    PRODUTO: "MOTOROLA EDGE 30",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO EM LOJA",
    VALORCONSUMIDOR: "R$ 2.800,00",
  },
  {
    ID: "1971",
    IMEI: "356656423411945",
    DATA: "12/07/2024",
    CLIENTE: "FERNANDA",
    VENDEDOR: "Marcos",
    PRODUTO: "IPHONE 12",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO PERDIDO",
    VALORCONSUMIDOR: "R$ 4.500,00",
  },
  {
    ID: "1972",
    IMEI: "356656423411946",
    DATA: "30/06/2024",
    CLIENTE: "DANIEL",
    VENDEDOR: "Patrícia",
    PRODUTO: "SAMSUNG GALAXY S21",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO EM LOJA",
    VALORCONSUMIDOR: "R$ 3.900,00",
  },
  {
    ID: "1973",
    IMEI: "356656423411947",
    DATA: "10/05/2024",
    CLIENTE: "GABRIEL",
    VENDEDOR: "Júlia",
    PRODUTO: "IPHONE 13 MINI",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO PERDIDO",
    VALORCONSUMIDOR: "R$ 5.100,00",
  },
  {
    ID: "1974",
    IMEI: "356656423411948",
    DATA: "15/04/2024",
    CLIENTE: "ANA",
    VENDEDOR: "Roberto",
    PRODUTO: "XIAOMI REDMI NOTE 11",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO EM LOJA",
    VALORCONSUMIDOR: "R$ 2.100,00",
  },
  {
    ID: "1975",
    IMEI: "356656423411949",
    DATA: "22/03/2024",
    CLIENTE: "CARLOS",
    VENDEDOR: "Paula",
    PRODUTO: "SAMSUNG GALAXY A73",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO PERDIDO",
    VALORCONSUMIDOR: "R$ 2.700,00",
  },
];

export default function Historico() {
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

  const [currentPageLoja, setCurrentPageLoja] = useState(1);
  const [currentPageHistorico, setCurrentPageHistorico] = useState(1);
  const rowsPerPage = 10;

  const currentRowsLoja = loja.slice(
    (currentPageLoja - 1) * rowsPerPage,
    currentPageLoja * rowsPerPage
  );

  const currentRowsHistorico = loja.slice(
    (currentPageHistorico - 1) * rowsPerPage,
    currentPageHistorico * rowsPerPage
  );

  const paginateLoja = (pageNumber: number) => setCurrentPageLoja(pageNumber);
  const paginateHistorico = (pageNumber: number) =>
    setCurrentPageHistorico(pageNumber);

  return (
    <section className="flex  h-screen justify-center items-center">
      <Navbar />
      <div className="">
        <div className="w-screen flex justify-center ">
          <Tabs defaultValue="account" className="w-[112rem] ">
            <div className="">
              <TabsList>
                <TabsTrigger value="account">Na Loja</TabsTrigger>
                <TabsTrigger value="password">Histórico</TabsTrigger>
              </TabsList>
            </div>

            <div className="">
              <TabsContent value="account">
                <div className="text-1xl font-bold mt-4">
                  Lista com todos os aparelhos que estão aguardando a retirada
                  do operador logístico.
                </div>
                <div className="mt-4 p-4 pt-2">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-100 ">
                        <TableHead className="mt-2 font-bold text-black">
                          <div className="flex items-center">
                            ID
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="font-bold text-black">
                          <div className="flex items-center">
                            IMEI
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="font-bold text-black">
                          <div className="flex items-center">
                            DATA
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="text-left font-bold text-black">
                          <div className="flex items-center">
                            CLIENTE
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="text-left font-bold text-black">
                          <div className="flex items-center">
                            VENDEDOR
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="text-left font-bold text-black">
                          <div className="flex items-center">
                            PRODUTO
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="text-left font-bold text-black">
                          <div className="flex items-center">
                            STATUS ATUAL
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="text-left font-bold text-black">
                          <div className="flex items-center">
                            VALOR CONSUMIDOR
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>

                        <TableHead className="text-left font-bold text-black"></TableHead>
                        <TableHead className="text-left font-bold text-black"></TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {currentRowsLoja.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="">{row.ID}</TableCell>

                          <TableCell className=" ">{row.IMEI}</TableCell>
                          <TableCell className=" ">{row.DATA}</TableCell>
                          <TableCell className=" ">{row.CLIENTE}</TableCell>
                          <TableCell className=" ">{row.VENDEDOR}</TableCell>
                          <TableCell className=" ">{row.PRODUTO}</TableCell>
                          <TableCell className=" ">{row.STATUSATUAL}</TableCell>
                          <TableCell className=" ">
                            {row.VALORCONSUMIDOR}
                          </TableCell>
                          <TableCell>
                            <FilePen />
                          </TableCell>
                          <TableCell>
                            <Camera />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {/* Paginação */}
                  <Pagination className="mt-6">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            paginateLoja(
                              currentPageLoja > 1
                                ? currentPageLoja - 1
                                : currentPageLoja
                            )
                          }
                          className="cursor-pointer"
                        />
                      </PaginationItem>
                      {[
                        ...Array(Math.ceil(loja.length / rowsPerPage)).keys(),
                      ].map((number) => (
                        <PaginationItem key={number + 1}>
                          <PaginationLink
                            onClick={() => paginateLoja(number + 1)}
                            isActive={currentPageLoja === number + 1}
                            className="cursor-pointer"
                          >
                            {number + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            paginateLoja(
                              currentPageLoja <
                                Math.ceil(loja.length / rowsPerPage)
                                ? currentPageLoja + 1
                                : currentPageLoja
                            )
                          }
                          className="cursor-pointer"
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </TabsContent>
              <TabsContent value="password">
                <div className="mt-4 p-4 pt-2">
                  {/* Data */}
                  <div className="flex justify-center items-end gap-6 mb-4">
                    {/* Campos de Data */}
                    <div className="flex justify-center gap-6">
                      {/* Data Inicial */}
                      <div className="flex flex-col items-center relative">
                        <b className="text-sm">Data inicial</b>
                        <Input
                          type="text"
                          value={
                            dateStart ? dateStart.toLocaleDateString() : ""
                          }
                          onClick={() =>
                            setIsCalendarOpenStart(!isCalendarOpenStart)
                          }
                          readOnly
                          placeholder="mm/dd/aaaa"
                          className="cursor-pointer w-[220px] mt-1"
                        />
                        {isCalendarOpenStart && (
                          <div className="absolute top-full mt-2 left-0 z-50 bg-white border rounded-md shadow-lg">
                            <Calendar
                              mode="single"
                              selected={dateStart}
                              onSelect={handleDateSelectStart}
                              className="rounded-md"
                            />
                          </div>
                        )}
                      </div>

                      {/* Data Final */}
                      <div className="flex flex-col items-center relative">
                        <b className="text-sm">Data final</b>
                        <Input
                          type="text"
                          value={dateEnd ? dateEnd.toLocaleDateString() : ""}
                          onClick={() =>
                            setIsCalendarOpenEnd(!isCalendarOpenEnd)
                          }
                          readOnly
                          placeholder="mm/dd/aaaa"
                          className="cursor-pointer w-[220px] mt-1"
                        />
                        {isCalendarOpenEnd && (
                          <div className="absolute top-full mt-2 left-0 z-50 bg-white border rounded-md shadow-lg">
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

                    {/* Botão Enviar */}
                    <div className="flex flex-col items-center self-end">
                      <Button
                        variant="outline"
                        className="w-[180px] flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600"
                      >
                        <Send className="mr-2" />
                        Enviar
                      </Button>
                    </div>
                  </div>

                  {/* TABELA */}
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-100 ">
                        <TableHead className="mt-2 font-bold text-black">
                          <div className="flex items-center">
                            ID
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="font-bold text-black">
                          <div className="flex items-center">
                            IMEI
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="font-bold text-black">
                          <div className="flex items-center">
                            DATA
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="text-left font-bold text-black">
                          <div className="flex items-center">
                            CLIENTE
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="text-left font-bold text-black">
                          <div className="flex items-center">
                            VENDEDOR
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="text-left font-bold text-black">
                          <div className="flex items-center">
                            PRODUTO
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="text-left font-bold text-black">
                          <div className="flex items-center">
                            STATUS
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="text-left font-bold text-black">
                          <div className="flex items-center">
                            STATUS ATUAL
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                        <TableHead className="flex items-center justify-center font-bold text-black">
                          <div className="flex  items-center">
                            VALOR CONSUMIDOR
                            <ArrowDownUp className="h-4 ml-2" />
                          </div>
                        </TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {currentRowsHistorico.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="">{row.ID}</TableCell>

                          <TableCell className=" ">{row.IMEI}</TableCell>
                          <TableCell className=" ">{row.DATA}</TableCell>
                          <TableCell className=" ">{row.CLIENTE}</TableCell>
                          <TableCell className=" ">{row.VENDEDOR}</TableCell>
                          <TableCell className=" ">{row.PRODUTO}</TableCell>
                          <TableCell className=" ">{row.STATUS}</TableCell>
                          <TableCell className=" ">{row.STATUSATUAL}</TableCell>
                          <TableCell className=" flex items-center justify-center">
                            {row.VALORCONSUMIDOR}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {/* Paginação */}
                  <Pagination className="mt-6">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() =>
                            paginateHistorico(
                              currentPageHistorico > 1
                                ? currentPageHistorico - 1
                                : currentPageHistorico
                            )
                          }
                          className="cursor-pointer"
                        />
                      </PaginationItem>
                      {[
                        ...Array(Math.ceil(loja.length / rowsPerPage)).keys(),
                      ].map((number) => (
                        <PaginationItem key={number + 1}>
                          <PaginationLink
                            onClick={() => paginateHistorico(number + 1)}
                            isActive={currentPageHistorico === number + 1}
                            className="cursor-pointer"
                          >
                            {number + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            paginateHistorico(
                              currentPageHistorico <
                                Math.ceil(loja.length / rowsPerPage)
                                ? currentPageHistorico + 1
                                : currentPageHistorico
                            )
                          }
                          className="cursor-pointer"
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      <Footer />
    </section>
  );
}
