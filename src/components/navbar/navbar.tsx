"use client";

import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarComponent } from "../sidebar/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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

export function Navbar() {
  const [selectedValue, setSelectedValue] = React.useState("portuguesBR");

  return (
    <header className="w-full">
      <div className="w-screen bg-blue-700 flex justify-between items-center px-4 py-2 text-white fixed top-0 z-[50]">
        {/* Lado esquerdo */}
        <div className="flex gap-4 items-center">
          <div className=" flex items-center pl-5">
            {" "}
            <SidebarComponent />
          </div>
          <div className="py-2">
            <Image
              src="/LogoAssurant.png"
              alt="Logo assurant"
              width={300}
              height={50}
            />
          </div>
        </div>

        <div className="flex  items-center gap-4 text-white ">
          <div className="flex items-center py-2">
            <Select value={selectedValue} onValueChange={setSelectedValue}>
              <SelectTrigger className="w-[180px] " style={{ color: "white" }}>
                <SelectValue placeholder="Selecione um idioma" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="portuguesBR" className="flex items-center">
                    <Image
                      src="/Brasil.jpg"
                      alt="Brasil"
                      width={20}
                      height={20}
                      className="mr-2 inline-block flex-shrink-0"
                    />
                    Português-BR
                  </SelectItem>
                  <SelectItem value="espanholARG" className="flex items-center">
                    <Image
                      src="/argentina.jpg"
                      alt="argentina"
                      width={20}
                      height={20}
                      className="mr-2 inline-block flex-shrink-0"
                    />
                    Espanhol-ARG
                  </SelectItem>
                  <SelectItem value="espanholES" className="flex items-center">
                    <Image
                      src="/espanha.jpg"
                      alt="espanha"
                      width={20}
                      height={20}
                      className="mr-2 inline-block flex-shrink-0"
                    />
                    Espanhol-ES
                  </SelectItem>
                  <SelectItem value="espanholCO" className="flex items-center">
                    <Image
                      src="/colombia.jpg"
                      alt="colombia"
                      width={20}
                      height={20}
                      className="mr-2 inline-block flex-shrink-0"
                    />
                    Espanhol-CO
                  </SelectItem>
                  <SelectItem value="espanholPE" className="flex items-center">
                    <Image
                      src="/peru.jpg"
                      alt="peru"
                      width={20}
                      height={20}
                      className="mr-2 inline-block flex-shrink-0"
                    />
                    Espanhol-PE
                  </SelectItem>
                  <SelectItem value="espanholMX" className="flex items-center">
                    <Image
                      src="/mexico.png"
                      alt="mexico"
                      width={20}
                      height={20}
                      className="mr-2 inline-block flex-shrink-0"
                    />
                    Espanhol-MX
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <span className="flex items-center py-2 text-white">
            HOMOLOG-000163_002C&V
          </span>
          <span className="flex items-center py-2 text-white">Trainne</span>
        </div>
      </div>
      {/* <Breadcrumb className="fixed left-0 top-20">
        <BreadcrumbList className="flex flex-col gap-2 ">
          <BreadcrumbItem>
            <BreadcrumbLink href="/novaCompra">
              <ShoppingCart className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/historico">
              <ScrollText className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">
              <Briefcase className="mr-2 text-black" size={16} />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">
              <Smartphone className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">
              <Truck className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/suporte">
              <Phone className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">
              <User className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/trocarSenha">
              <LockKeyhole className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cadastrarLoja">
              <Store className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/lojas">
              <Contact className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cadastrarColaboradores">
              <UserPlus className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/colaboradores">
              <Users className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/confirmarVoucher">
              <TicketCheck className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/motivosCancelamentos">
              <TriangleAlert className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">
              <Link2 className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <LogOut className="mr-2 text-black" size={16}/>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb> */}
    </header>
  );
}
