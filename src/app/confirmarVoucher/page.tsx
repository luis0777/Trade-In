"use client";

import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { EditarColaborador } from "@/components/editarColaborador/editarColaborador";
import { AlterarSenhaColaborador } from "@/components/alterarSenhaColaborador/alterarSenhaColaborador";
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

const colaborador = [
    {
      voucher: "",
      dataAbertura: "",
      IMEI: "",
      codigoLoja: "",
      nomeLoja: "",
      dispositivo: "",
    },
  ];

export default function ConfirmarVoucher() {
    const [currentPage, setCurrentPage] = useState(1);
    const [colaboradores, setColaboradores] = useState(colaborador);
    const rowsPerPage = 10;
  
    
  
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  
    const currentRows = colaboradores.slice(indexOfFirstRow, indexOfLastRow);
  
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
    return (
      <section className="py-16">
        <Toaster />
        <Navbar />
  
        <div>
          <div className="w-full">
            <b className="flex justify-center text-3xl pt-5">Confirmar voucher</b>
          </div>
  
          <div className="p-16">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100 ">
                  <TableHead className=" font-bold text-black">Voucher</TableHead>
                  <TableHead className=" font-bold text-black">Data de Abertura</TableHead>
                  <TableHead className=" font-bold text-black">IMEI</TableHead>
                  <TableHead className=" font-bold text-black">Código da Loja</TableHead>
                  <TableHead className=" font-bold text-black">Nome da Loja</TableHead>
                  <TableHead className=" font-bold text-black">Dispositivo</TableHead>
                </TableRow>
              </TableHeader>
              
            </Table>
  
            {/* Paginação */}
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      paginate(currentPage > 1 ? currentPage - 1 : currentPage)
                    }
                    className="cursor-pointer"
                  />
                </PaginationItem>
                {[...Array(Math.ceil(colaborador.length / rowsPerPage)).keys()].map(
                  (number) => (
                    <PaginationItem key={number + 1}>
                      <PaginationLink
                        onClick={() => paginate(number + 1)}
                        isActive={currentPage === number + 1}
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
                      paginate(
                        currentPage < Math.ceil(colaborador.length / rowsPerPage)
                          ? currentPage + 1
                          : currentPage
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
  