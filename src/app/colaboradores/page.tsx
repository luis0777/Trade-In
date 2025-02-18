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
    isActive: true,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: false,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: true,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: false,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: true,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: false,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: true,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: false,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: true,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: false,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: true,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: false,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: true,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: false,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: true,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: false,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    isActive: true,
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [colaboradores, setColaboradores] = useState(colaborador);
  const rowsPerPage = 10;

  const toggleStatus = (index: number) => {
    setColaboradores((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        ...newState[index],
        isActive: !newState[index].isActive,
      };
      return newState;
    });
  };

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
          <b className="flex justify-center text-3xl pt-5">Colaboradores</b>
        </div>

        <div className="p-16">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 ">
                <TableHead className=" font-bold text-black">Status</TableHead>
                <TableHead className=" font-bold text-black">Nome</TableHead>
                <TableHead className=" font-bold text-black">Lojas</TableHead>
                <TableHead className="text-right font-bold text-black w-1/6">
                  Editar
                </TableHead>
                <TableHead className="text-right font-bold text-black w-1/6">
                  Acesso
                </TableHead>
                <TableHead className="text-right font-bold text-black w-1/6">
                  Alterar senha
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {row.isActive ? "ATIVO" : "INATIVO"}
                  </TableCell>
                  <TableCell>{row.nome}</TableCell>
                  <TableCell>{row.lojas}</TableCell>
                  <TableCell className="text-right">
                    <EditarColaborador />
                  </TableCell>
                  <TableCell className="text-right">
                    <Switch
                      checked={row.isActive}
                      onCheckedChange={() =>
                        toggleStatus(index + indexOfFirstRow)
                      }
                      className="bg-blue-700"
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <AlterarSenhaColaborador />
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
          <Link
            href="/cadastrarColaboradores"
            className="justify-end flex  rounded-md "
          >
            <Button className="bg-blue-700">Adicionar colaborador</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
}
