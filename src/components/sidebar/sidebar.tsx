"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Layers,
  ShoppingCart,
  Phone,
  Truck,
  Briefcase,
  Smartphone,
  ScrollText,
  LogOut,
  ChevronDown,
  ChevronUp,
  User,
  LockKeyhole,
  Store,
  Contact,
  UserPlus,
  Users,
  TicketCheck,
  TriangleAlert,
  Link2,
} from "lucide-react";
import Link from "next/link";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function SidebarComponent() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna o estado de visibilidade
  };
  return (
    <section className="z-[200]">
      <div className="gap-2">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button className="bg-transparent border-white">
                <Layers
                  className="mr-2 text-white"
                  style={{ transform: "scale(2)" }}
                />
              </Button>
            </SheetTrigger>
            <SheetContent
              side={side}
              className="w-[200px] sm:w-[325px] overflow-y-auto"
            >
              <SheetHeader>
                <SheetTitle className="flex justify-start items-center pb-2">
                  <Image src="/Assurant.png" alt="" width={200} height={50} />
                </SheetTitle>
              </SheetHeader>

              <SheetTitle>
                <Link
                  href="/novaCompra"
                  className="flex justify-start items-center p-4 pl-0  hover:bg-gray-200 hover:rounded-2xl"
                >
                  <ShoppingCart className="mr-2 text-black" />
                  Nova compra
                </Link>
              </SheetTitle>

              <SheetTitle>
                <Link
                  href="/historico"
                  className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                >
                  <ScrollText className="mr-2 text-black" />
                  Historico de compra
                </Link>
              </SheetTitle>

              <SheetTitle>
                <Link
                  href="/novaCompra"
                  className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                >
                  <Briefcase className="mr-2 text-black" />
                  Mala de despacho
                </Link>
              </SheetTitle>

              <SheetTitle>
                <Link
                  href="/novaCompra"
                  className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                >
                  <Smartphone className="mr-2 text-black" />
                  Aparelho perdido
                </Link>
              </SheetTitle>

              <SheetTitle>
                <Link
                  href="/novaCompra"
                  className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                >
                  <Truck className="mr-2 text-black" />
                  Expedição
                </Link>
              </SheetTitle>

              <SheetTitle>
                <Link
                  href="/novaCompra"
                  className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                >
                  <Phone className="mr-2 text-black" />
                  Suporte
                </Link>
              </SheetTitle>

              <SheetTitle>
                <Link
                  href="#"
                  className="flex justify-start items-center p-4 pl-0 gap-36 hover:bg-gray-200 hover:rounded-2xl"
                  onClick={toggleMenu}
                >
                  AJUSTE
                  {isOpen ? (
                    <ChevronUp className="ml-2 text-black "></ChevronUp>
                  ) : (
                    <ChevronDown className="ml-2 text-black"></ChevronDown>
                  )}
                </Link>
              </SheetTitle>

              {isOpen && (
                <>
                  <SheetTitle>
                    <Link
                      href="/perfil"
                      className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                    >
                      <User className="mr-2 text-black" />
                      Perfil
                    </Link>
                  </SheetTitle>

                  <SheetTitle>
                    <Link
                      href="/trocarSenha"
                      className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                    >
                      <LockKeyhole className="mr-2 text-black" />
                      Trocar de senha
                    </Link>
                  </SheetTitle>

                  <SheetTitle>
                    <Link
                      href="/cadastrarLoja"
                      className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                    >
                      <Store className="mr-2 text-black" />
                      Cadastrar Loja
                    </Link>
                  </SheetTitle>

                  <SheetTitle>
                    <Link
                      href="/lojas"
                      className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                    >
                      <Contact className="mr-2 text-black" />
                      Lojas
                    </Link>
                  </SheetTitle>

                  <SheetTitle>
                    <Link
                      href="/cadastrarColaboradores"
                      className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                    >
                      <UserPlus className="mr-2 text-black" />
                      Cadastrar colaborador
                    </Link>
                  </SheetTitle>

                  <SheetTitle>
                    <Link
                      href="/colaboradores"
                      className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                    >
                      <Users className="mr-2 text-black" />
                      Colaboradores
                    </Link>
                  </SheetTitle>

                  <SheetTitle>
                    <Link
                      href="/confirmarVoucher"
                      className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                    >
                      <TicketCheck className="mr-2 text-black" />
                      Confirmar Voucher
                    </Link>
                  </SheetTitle>

                  <SheetTitle>
                    <Link
                      href="/motivosCancelamentos"
                      className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                    >
                      <TriangleAlert className="mr-2 text-black" />
                      Motivos/Cancelamentos
                    </Link>
                  </SheetTitle>

                  <SheetTitle>
                    <Link
                      href="/novaCompra"
                      className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                    >
                      <Link2 className="mr-2 text-black" />
                      Vincular Item Compra
                    </Link>
                  </SheetTitle>
                </>
              )}

              <SheetTitle>
                <Link
                  href="/"
                  className="flex justify-start items-center p-4 pl-0 hover:bg-gray-200 hover:rounded-2xl"
                >
                  <LogOut className="mr-2 text-black" />
                  Sair
                </Link>
              </SheetTitle>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </section>
  );
}
