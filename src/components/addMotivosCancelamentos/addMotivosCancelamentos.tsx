"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea"

export function AddMotivosCancelamentos() {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
  
    const handleSave = () => {
      // Lógica de salvamento aqui
      
      setOpen(false);
      toast({
        title: "Sucesso!",
        description: "Motivo de cancelamento cadastrado com sucesso.",
        duration: 2000,
      });
    };
  
    const handleCancel = () => {
      setOpen(false);
    };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-700 text-white">
          <Plus className="mr-2 h-4 w-4" />
          Adicionar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cadastrar cancelamento</DialogTitle>
        </DialogHeader>
        <div className=" gap-4 py-4">
          <div className=" grid-cols-4 items-center gap-4">
            <Label htmlFor="motivo" className="text-right font-bold">
              Motivo
            </Label>
            <Input
              id="motivo"
              className="col-span-3"
              placeholder="Digite o motivo do cancelamento"
            />
          </div>
          <div className=" grid-cols-4 items-center gap-4">
            <Label htmlFor="setor" className="text-right font-bold">
              Setor
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione o setor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="self">Self Triage</SelectItem>
                  <SelectItem value="aprovacao">Pré-aprovação OS</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className=" grid-cols-4 items-center gap-4">
            <Label htmlFor="motivo" className="text-right font-bold">
              Descrição
            </Label>
            <Textarea  />
          </div>
        </div>
        <DialogFooter>
        <Button className="bg-blue-700 text-white" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button className="bg-blue-700 text-white" onClick={handleSave}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
