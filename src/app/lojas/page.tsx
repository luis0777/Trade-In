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
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import { RemoverLoja } from "@/components/removerLoja/removerLoja";
import { Plus } from "lucide-react";

const loja = [
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
    {
      nome: "HOMOLOG-000163_002C&V",
      identificador: "000163_002CEV",
      editar: "",
      remover: "",
    },
]

export default function Lojas() {

    const [currentPage, setCurrentPage] = useState(1);
      const [colaboradores, setColaboradores] = useState(loja);
      const rowsPerPage = 10;
    
      const indexOfLastRow = currentPage * rowsPerPage;
      const indexOfFirstRow = indexOfLastRow - rowsPerPage;

      const currentRows = colaboradores.slice(indexOfFirstRow, indexOfLastRow);
    
    
      const paginate = (pageNumber: number) => setCurrentPage(pageNumber);



  return (
    <section className="py-16">
      <Navbar />








      <div>
        <div className="w-full">
          <b className="flex justify-center text-3xl pt-5">Lojas</b>
        </div>

        <div className="p-16">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 ">
                <TableHead className=" font-bold text-black">Nome</TableHead>
                <TableHead className=" font-bold text-black">Identificador</TableHead>
                <TableHead className="text-right font-bold text-black w-1/6">
                  Editar
                </TableHead>
                <TableHead className="text-right font-bold text-black w-1/6">
                  Remover
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentRows.map((row, index) => (
                <TableRow key={index}>
                  
                  <TableCell>{row.nome}</TableCell>
                  <TableCell>{row.identificador}</TableCell>
                  <TableCell className="text-right">
                    
                  </TableCell>
                  
                  <TableCell className="text-right">
                    <RemoverLoja />
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
                    paginate(currentPage > 1 ? currentPage - 1 : currentPage)
                  }
                  className="cursor-pointer"
                />
              </PaginationItem>
              {[...Array(Math.ceil(loja.length / rowsPerPage)).keys()].map(
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
                      currentPage < Math.ceil(loja.length / rowsPerPage)
                        ? currentPage + 1
                        : currentPage
                    )
                  }
                  className="cursor-pointer"
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <Link
            href="/cadastrarColaboradores"
            className="justify-end flex  rounded-md "
          >
            <Button className="bg-blue-700">
                <Plus />
                Adicionar loja</Button>
          </Link>
        </div>
      </div>



































      <Footer />
    </section>
  );
}
