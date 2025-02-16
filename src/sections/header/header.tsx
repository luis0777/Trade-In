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

export function Header() {
  const [selectedValue, setSelectedValue] = React.useState("portuguesBR");

  return (
    <header className="w-full bg-blue-700 flex justify-between items-center px-4 py-2">
      {/* Lado esquerdo */}
      <div className="flex gap-4 items-center">
        <div className="w-64 flex items-center pl-5">a</div>
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
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Selecione um idioma" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup>
                <SelectItem value="portuguesBR">Português-BR</SelectItem>
                <SelectItem value="espanholARG">Espanhol-ARG</SelectItem>
                <SelectItem value="espanholES">Espanhol-ES</SelectItem>
                <SelectItem value="espanholCO">Espanhol-CO</SelectItem>
                <SelectItem value="espanholPE">Espanhol-PE</SelectItem>
                <SelectItem value="espanholMX">Espanhol-MX</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center py-2 text-white">HOMOLOG-000163_002C&V</div>
        <div className="flex items-center py-2">Trainee</div>
      </div>
    </header>
  );
}
