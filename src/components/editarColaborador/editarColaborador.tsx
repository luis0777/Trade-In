"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function EditarColaborador() {
  // Estado para controlar os valores dos inputs
  const [nome, setNome] = useState("Nestor");
  const [email, setEmail] = useState("nestor@gmail.com");

  const [open, setOpen] = useState(false);
  
  const { toast } = useToast();
  const handleSave = () => {
    setOpen(false);
    toast({
      title: "Alterações salvas",
      description: "As informações foram atualizadas com sucesso!",
      className: "bg-green-50 text-green-500",
      duration: 2500,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white hover:bg-blue-50">
          <Pencil className="text-blue-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Colaborador</DialogTitle>
          <DialogDescription>Dados do colaborador</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className=" grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className=" grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
            />
          </div>

          <div className="space-y-2 gap-4">
            <b>Logistíco</b>
            <RadioGroup defaultValue="logistico" className="flex flex-row ">
              <div className="flex items-center space-x-2 mb-4">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="sim">SIM</Label>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="nao">NÃO</Label>
              </div>
            </RadioGroup>
            <b>Perfil</b>
            <RadioGroup defaultValue="perfil" className="flex flex-row ">
              <div className="flex items-center space-x-2 mb-4">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="Vendendor">Vendendor</Label>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="Gerente">Gerente</Label>
              </div>
            </RadioGroup>
            <b>Rede</b>
            <RadioGroup defaultValue="rede" className="flex flex-col ">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">HOMOLOG-000163_002C&V</Label>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">HOMOLOG-000163_002C&V</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-gray-600 w-[5rem]" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button type="submit" className="bg-blue-700 w-[5rem]" onClick={handleSave}>
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
