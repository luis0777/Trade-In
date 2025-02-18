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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, LockKeyhole } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const data = [
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
  {
    status: "Ativo",
    nome: "Nestor",
    lojas: "HOMOLOG-000163_002C&V",
    editar: "",
    acesso: "",
    senha: "",
  },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section>
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
                  <TableCell className="font-medium">{row.status}</TableCell>
                  <TableCell>{row.nome}</TableCell>
                  <TableCell>{row.lojas}</TableCell>
                  <TableCell className="text-right">
                    <Button className="bg-white hover:bg-blue-50 ">
                      <Pencil className="text-blue-500" />
                    </Button>
                  </TableCell>
                  <TableCell className="text-right">
                    <Switch className="bg-blue-700"></Switch>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button className="bg-white hover:bg-red-50 ">
                      <LockKeyhole className="text-red-500" />
                    </Button>
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
              {[...Array(Math.ceil(data.length / rowsPerPage)).keys()].map(
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
                      currentPage < Math.ceil(data.length / rowsPerPage)
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
