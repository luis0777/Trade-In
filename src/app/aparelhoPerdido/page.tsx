"use client";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import {
  Table,
  TableBody,
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
import { ArrowDownUp, ClockAlert } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
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
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const loja = [
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    VENDEDOR: "Nestor",
    PRODUTO: "IPHONE 13 PRO MAX",
    STATUS: "PAGO",
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
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
    STATUSATUAL: "APARELHO EM PREPARAÇÃO",
    VALORCONSUMIDOR: "R$ 2.700,00",
  },
];

export default function AparelhoPerdido() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = () => {
    if (!searchTerm.trim()) {
      setShowErrors(true);
      return;
    }
  };

  const { toast } = useToast();
  const handleSave = () => {
    toast({
      title: "Sucesso!",
      description: "Aparelho enviado para perdidos!",
      className: "bg-green-50 text-green-500",
      duration: 2000,
    });
  };


  //Data Inicial
  const [dateStart, setDateStart] = useState<Date | undefined>(undefined);
  const [isCalendarOpenStart, setIsCalendarOpenStart] = useState(false);

  const handleDateSelectStart = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDateStart(selectedDate);
      setIsCalendarOpenStart(false);
    }
  };

  // Data Final
  const [dateEnd, setDateEnd] = useState<Date | undefined>(undefined);
  const [isCalendarOpenEnd, setIsCalendarOpenEnd] = useState(false);

  const handleDateSelectEnd = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDateEnd(selectedDate);
      setIsCalendarOpenEnd(false);
    }
  };

  const [currentPageLoja, setCurrentPageLoja] = useState(1);
  const rowsPerPage = 10;

  const currentRowsLoja = loja.slice(
    (currentPageLoja - 1) * rowsPerPage,
    currentPageLoja * rowsPerPage
  );

  const paginateLoja = (pageNumber: number) => setCurrentPageLoja(pageNumber);

  return (
    <section className="py-16 ">
      <Toaster />
      <Navbar />
      <div className="pt-5">
        <div className="flex justify-center items-center">
          <p className="text-3xl font-bold">Aparelho perdido</p>
        </div>

        <div className="p-6   ">
          <div className="flex w-full ">
            <div className="flex w-1/3 justify-center item-center ">
              <div className="flex items-center relative gap-2 ">
                <b className="text-sm flex ">INICIO</b>
                <Input
                  type="text"
                  value={dateStart ? dateStart.toLocaleDateString() : ""}
                  onClick={() => setIsCalendarOpenStart(!isCalendarOpenStart)}
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
            </div>
            <div className="flex w-1/3 justify-center item-center  ">
              <div className="flex items-center relative gap-2">
                <b className="text-sm">FIM</b>
                <Input
                  type="text"
                  value={dateEnd ? dateEnd.toLocaleDateString() : ""}
                  onClick={() => setIsCalendarOpenEnd(!isCalendarOpenEnd)}
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
            <div className="flex w-1/3 justify-center item-center gap-2 ">
            <div className="flex flex-col gap-1 w-full">
              <Input
                type="text"
                placeholder="Digite o produto para procurar..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowErrors(false);
                }}
                className={showErrors ? "border-red-500" : ""}
              />
              {showErrors && (
                <p className="text-red-500 text-sm">Campo obrigatório!</p>
              )}
            </div>
              <Button
                variant="default"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600"
              >
                Buscar
              </Button>
            </div>
          </div>

          <div className="mt-4">
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
                  <TableHead className="text-left font-bold text-black">
                    <div className="flex items-center">
                      VALOR CONSUMIDOR
                      <ArrowDownUp className="h-4 ml-2" />
                    </div>
                  </TableHead>
                  <TableHead className="text-left font-bold text-black">
                    <div className="flex items-center"></div>
                  </TableHead>
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
                    <TableCell className=" ">{row.STATUS}</TableCell>
                    <TableCell className=" ">{row.STATUSATUAL}</TableCell>
                    <TableCell className=" ">{row.VALORCONSUMIDOR}</TableCell>
                    <TableCell className=" ">
                      <div></div>
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <div className="bg-blue-500 p-2 rounded">
                            <ClockAlert className="text-white" />
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-center">
                              Enviar para aparelhos perdidos?
                            </AlertDialogTitle>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Fechar</AlertDialogCancel>

                            <AlertDialogAction onClick={handleSave}>
                              Enviar
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
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
                {[...Array(Math.ceil(loja.length / rowsPerPage)).keys()].map(
                  (number) => (
                    <PaginationItem key={number + 1}>
                      <PaginationLink
                        onClick={() => paginateLoja(number + 1)}
                        isActive={currentPageLoja === number + 1}
                        className="cursor-pointer"
                      >
                        {number + 1}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      paginateLoja(
                        currentPageLoja < Math.ceil(loja.length / rowsPerPage)
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
        </div>
      </div>

      <Footer />
    </section>
  );
}
