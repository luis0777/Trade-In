import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { LockKeyhole } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AlterarSenhaColaborador() {
  const [open, setOpen] = useState(false);

  const { toast } = useToast();
  const handleSave = () => {
    setOpen(false);
    toast({
      title: "Senha salva!",
      description: "Senha alterada com sucesso!",
      duration: 2500,
    });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white hover:bg-red-50 ">
          <LockKeyhole className="text-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Redefinir a senha</DialogTitle>
          <DialogDescription>Insira a nova senha.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className=" grid-cols-4 items-center gap-4">
            <Input id="name" className="col-span-3" placeholder="Senha" />
          </div>
          <div className=" grid-cols-4 items-center gap-4">
            <Input
              id="username"
              className="col-span-3"
              placeholder="Confirme a senha"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-gray-600 w-[5rem]"
            onClick={() => setOpen(false)}
          >
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
