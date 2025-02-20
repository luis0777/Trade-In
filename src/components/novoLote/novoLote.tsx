import * as React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  ChevronLeft,
  ChevronsRight,
  ChevronsLeft,
  ChevronUp,
  ChevronDown,
  ChevronsUp,
  ChevronsDown,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function NovoLote() {
  const [leftItems, setLeftItems] = useState(["Iphone", "Motorola", "Xiomi"]);
  const [rightItems, setRightItems] = useState(["Samsung", "Nokia"]);

  const moveOneToRight = () => {
    if (leftItems.length > 0) {
      const item = leftItems[0];
      setLeftItems(leftItems.slice(1));
      setRightItems([...rightItems, item]);
    }
  };

  const moveAllToRight = () => {
    setRightItems([...rightItems, ...leftItems]);
    setLeftItems([]);
  };

  const moveOneToLeft = () => {
    if (rightItems.length > 0) {
      const item = rightItems[0];
      setRightItems(rightItems.slice(1));
      setLeftItems([...leftItems, item]);
    }
  };

  const moveAllToLeft = () => {
    setLeftItems([...leftItems, ...rightItems]);
    setRightItems([]);
  };

  return (
    <section>
      <div className="w-full flex justify-between">
        <div className="w-[40%] flex flex-col space-y-1.5 p-2">
          <Label htmlFor="framework">Responsável</Label>
          <Select>
            <SelectTrigger id="responsavel">
              <SelectValue placeholder="TRAINNE" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="next">TRAINNE</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" w-[40%] flex flex-col space-y-1.5 p-2">
          <Label htmlFor="framework">Loja</Label>
          <Select>
            <SelectTrigger id="loja">
              <SelectValue placeholder="HOMOLOG-000163_002C&V" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="next">HOMOLOG-000163_002C&V</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className=" flex w-full p-12 justify-between">
        <div className="w-[5%] p-8">
          <div className="flex flex-col items-center gap-2">
            <button className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600">
              <ChevronUp size={24} />
            </button>

            <button className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600">
              <ChevronsUp size={24} />
            </button>

            <button className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600">
              <ChevronDown size={24} />
            </button>

            <button className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600">
              <ChevronsDown size={24} />
            </button>
          </div>
        </div>
        <div className=" w-[45%]">
          <div className="w-full h-[300px]">
            <Card className="w-full h-full rounded-none">
              <CardHeader>
                <CardTitle className="text-start">Pedidos</CardTitle>
                <div className="border-b border-gray-300 w-full mt-1"></div>
              </CardHeader>
              <CardContent>
                {leftItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 bg-gray-200 rounded mb-1 text-center"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
        <div className="w-[5%] p-8">
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={moveOneToRight}
              className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600"
            >
              <ChevronRight size={24} />
            </button>
            <button
              onClick={moveAllToRight}
              className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600"
            >
              <ChevronsRight size={24} />
            </button>
            <button
              onClick={moveOneToLeft}
              className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={moveAllToLeft}
              className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600"
            >
              <ChevronsLeft size={24} />
            </button>
          </div>
        </div>
        <div className=" w-[45%]">
          <div className="w-full h-[300px]">
            <Card className="w-full h-full rounded-none">
              <CardHeader>
                <CardTitle className="text-start">Itens do lote</CardTitle>
                <div className="border-b border-gray-300 w-full mt-1"></div>
              </CardHeader>
              <CardContent>
                {rightItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 bg-gray-200 rounded mb-1 text-center"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
              <CardFooter></CardFooter>
            </Card>
          </div>
        </div>
        <div className="w-[5%] p-8 ">
          <div className="flex flex-col items-center gap-2">
            <button className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600">
              <ChevronUp size={24} />
            </button>

            <button className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600">
              <ChevronsUp size={24} />
            </button>

            <button className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600">
              <ChevronDown size={24} />
            </button>

            <button className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white hover:bg-blue-600">
              <ChevronsDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
