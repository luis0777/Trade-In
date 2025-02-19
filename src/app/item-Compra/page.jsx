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
import { ArrowDownUp, Plus, X, BadgeCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { Toast } from "@radix-ui/react-toast";
import { Toaster } from "@/components/ui/toaster";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const loja = [
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
  {
    ID: "1966",
    IMEI: "356656423411940",
    DATA: "12/12/2024",
    CLIENTE: "ANEZIO",
    PRODUTO: "IPHONE 13 PRO MAX",
    CAMPANHA: "NENHUMA CAMPANHA",
  },
];

export default function ItemCompra() {
  const { toast } = useToast();
  const handleSave = () => {
    toast({
      title: "Sucesso!",
      description: "Aparelho enviado para perdidos!",
      className: "bg-green-50 text-green-500",
      duration: 2000,
    });
  };

  const [currentPageLoja, setCurrentPageLoja] = useState(1);
  const rowsPerPage = 10;

  const currentRowsLoja = loja.slice(
    (currentPageLoja - 1) * rowsPerPage,
    currentPageLoja * rowsPerPage
  );

  const paginateLoja = (pageNumber) => setCurrentPageLoja(pageNumber);

  return (
    <section className="py-16 w-full h-full">
      <Toaster />
      <Navbar />
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full text-center text-3xl font-bold mt-4 ">
          Adicionar IMEI do aparelho adquirido
        </div>
        <div className="w-3/4 mt-4 flex justify-center  ">
          <Input
            type="email"
            placeholder="Digite o produto para procurar..."
            className="w-12rem"
          />
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
            Buscar
          </Button>
        </div>

        <div className=" px-12 mt-4 w-full">
          <div className="">
            <h6 className="font-semibold">
              Lista com todos os aparelhos que estão aguardando a retirada do
              operador logístico.
            </h6>
          </div>
          <div className=" mt-3">
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
                      PRODUTO
                      <ArrowDownUp className="h-4 ml-2" />
                    </div>
                  </TableHead>
                  <TableHead className="text-left font-bold text-black">
                    <div className="flex items-center">
                      CAMPANHA
                      <ArrowDownUp className="h-4 ml-2" />
                    </div>
                  </TableHead>
                  <TableHead className="text-left font-bold text-black">
                    <div className="flex items-center ">
                      IMEI/NÚMERO DE SÉRIE DA NOVA COMPRA
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
                    <TableCell className=" ">{row.PRODUTO}</TableCell>
                    <TableCell className=" ">{row.CAMPANHA}</TableCell>
                    <TableCell className="flex justify-center gap-2 ">
                      <div>
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <div className="p-2 rounded bg-white text-blue-500 shadow-md hover:bg-blue-500 hover:text-white hover:shadow-lg transition duration-300">
                              <BadgeCheck />
                            </div>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogTitle className="text-start flex justify-between">
                              Compras vinculadas
                              <AlertDialogAction className="bg-transparent hover:bg-red-500">
                                <X className="text-black" />
                              </AlertDialogAction>
                            </AlertDialogTitle>

                            <AlertDialogFooter>
                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead className="w-[100px] font-bold">
                                      Tipo
                                    </TableHead>
                                    <TableHead className="font-bold">
                                      Código
                                    </TableHead>
                                    <TableHead className="font-bold">
                                      Descrição
                                    </TableHead>
                                    <TableHead className=" font-bold">
                                      Criação
                                    </TableHead>
                                  </TableRow>
                                </TableHeader>
                              </Table>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>

                      <div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline">
                              <Plus />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="">
                            <DialogHeader>
                              <DialogTitle className="p-2">
                                Adicionar Imei / número de série
                              </DialogTitle>

                              <div className="mt-4">
                                <RadioGroup defaultValue="option-one">
                                  <div className="flex space-x-4">
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem
                                        value="option-one"
                                        id="option-one"
                                        className="form-radio text-blue-500"
                                      />
                                      <Label htmlFor="option-one">
                                        {" "}
                                        Aparelho{" "}
                                      </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem
                                        value="option-two"
                                        id="option-two"
                                        className="form-radio text-blue-500"
                                      />
                                      <Label htmlFor="option-two">
                                        Acessório{" "}
                                      </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem
                                        value="option-three"
                                        id="option-three"
                                        className="form-radio text-blue-500"
                                      />
                                      <Label htmlFor="option-three">
                                        {" "}
                                        SmartWatch{" "}
                                      </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem
                                        value="option-four"
                                        id="option-four"
                                        className="form-radio text-blue-500"
                                      />
                                      <Label htmlFor="option-four">
                                        Outros
                                      </Label>
                                    </div>
                                  </div>
                                </RadioGroup>
                              </div>
                            </DialogHeader>
                            <div className="grid gap-4 py-4 justify-center">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Input
                                  id="codigo"
                                  placeholder="Código Imei"
                                  className="col-span-3"
                                />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Input
                                  id="username"
                                  placeholder="Descrição"
                                  className="col-span-3  "
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <div className=" ">
                                <Button
                                  type="submit"
                                  className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 cursor-pointer mt-4"
                                >
                                  Vincular novo item
                                </Button>
                              </div>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
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
