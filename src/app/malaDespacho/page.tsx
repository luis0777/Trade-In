"use client";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
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
import { ArrowDownUp} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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

export default function MalaDespacho() {
  const [currentPageLoja, setCurrentPageLoja] = useState(1);

  const rowsPerPage = 10;

  const currentRowsLoja = loja.slice(
    (currentPageLoja - 1) * rowsPerPage,
    currentPageLoja * rowsPerPage
  );


  const paginateLoja = (pageNumber: number) => setCurrentPageLoja(pageNumber);



  return (
    <section className="py-16">
      <Navbar />
      <div className=" p-4 mt-6 ">
        <div className="flex justify-center items-center">
          <p className="text-3xl font-bold">Mala de despacho</p>
        </div>

        <div className="p-6 mt-4 h-screen">
          <div className="flex">
          <Input type="email" placeholder="Digite o produto para procurar..." />
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">Buscar</Button>

          </div>
          <div className="mt-6"><Table>
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
                </TableRow>
              ))}
            </TableBody>
          </Table></div>
          

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

      <Footer />
    </section>
  );
}
