"use client";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Smartwatch() {
  const [selectedFabricante, setSelectedFabricante] = useState("");

  const fabricantes = [
    { value: "dell", label: "Dell" },
    { value: "lenovo", label: "Lenovo" },
    { value: "apple", label: "Apple" },
    { value: "samsung", label: "Samsung" },
  ];

  const modelos = {
    dell: ["Inspiron", "XPS", "Latitude"],
    lenovo: ["ThinkPad", "IdeaPad", "Legion"],
    apple: ["MacBook Air", "MacBook Pro", "iMac"],
    samsung: ["Galaxy Book", "Notebook 9", "Odyssey"],
  };

  return (
    <section className="py-20">
      <Navbar />

      <div className="w-full flex h-[5rem] justify-center items-center">
        <div className="w-11/12 flex justify-center text-3xl pl-36">
          <b>Seção Notebook</b>
        </div>
        <div className="w-1/12 flex justify-center text-3xl">
          <Link href="/novaCompra">
            <Button className="bg-transparent text-blue-700 shadow-md font-bold hover:bg-slate-50">
              Home
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full h-[40rem] flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Identifique seu Notebook</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Select
                    onValueChange={(value) => setSelectedFabricante(value)}
                  >
                    <SelectTrigger id="fabricante">
                      <SelectValue placeholder="Selecione o fabricante" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {fabricantes.map((fabricante) => (
                        <SelectItem
                          key={fabricante.value}
                          value={fabricante.value}
                        >
                          {fabricante.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedFabricante && (
                  <div className="">
                    <Select>
                      <SelectTrigger id="modelo">
                        <SelectValue placeholder="Selecione o modelo" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {modelos[
                          selectedFabricante as keyof typeof modelos
                        ]?.map((modelo, index) => (
                          <SelectItem key={index} value={modelo}>
                            {modelo}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </section>
  );
}
