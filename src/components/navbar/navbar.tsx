"use client";

import React from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Navbar() {
  const [selectedValue, setSelectedValue] = React.useState("portuguesBR");

  return (
    <header className="w-full bg-blue-700 flex justify-between items-center px-4 py-2 text-white">
      {/* Lado esquerdo */}
      <div className="flex gap-4 items-center">
        <div className=" flex items-center pl-5">a</div>
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
    </header>
  );
}
