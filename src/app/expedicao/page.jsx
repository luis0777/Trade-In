"use client";

import { NovoLote } from "@/components/novoLote/novoLote";

import { Transferencia } from "@/components/transferencias/transferencia";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Expedicao() {
  return (
    <section className="w-full h-full py-16 flex flex-col  items-center ">
      <Navbar />
      <div className="w-full px-16 ">
        <div className="text-center font-bold text-3xl w-full p-4 ">
          EXPEDIÇÃO
        </div>
        <div className="w-full p-4  ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-slate-50 ">
                <div className="flex justify-start gap-2 p-2">
                  <ArrowRight />
                  <p> Filtrar Pedidos</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1.5 p-2">
                  <Label htmlFor="framework">Status</Label>
                  <Select>
                    <SelectTrigger id="Status">
                      <SelectValue placeholder="AGUARDANDO COLETA" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">AGUARDANDO COLETA</SelectItem>
                      <SelectItem value="sveltekit">COLETA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-full p-4 ">
          <Tabs defaultValue="account">
            <div className="w-[40%]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="novolote">Novo Lote</TabsTrigger>
                <TabsTrigger value="logistica">
                  Acompanhar Logística
                </TabsTrigger>
                <TabsTrigger value="transferencia">Transferência</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="novolote">
              <NovoLote />
            </TabsContent>
            <TabsContent value="logistica">
              <div className=" w-[40%] flex flex-col space-y-1.5 p-2">
                <Label htmlFor="framework">Outras Lojas</Label>
                <Select>
                  <SelectTrigger id="lojas">
                    <SelectValue placeholder="HOMOLOG-000163_002C&V" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">HOMOLOG-000163_002C&V</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>

            <TabsContent value="transferencia">
              <Transferencia />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </section>
  );
}
