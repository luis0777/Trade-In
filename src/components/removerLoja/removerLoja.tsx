"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function RemoverLoja() {
  const [open, setOpen] = useState(false);

  const { toast } = useToast();
  const handleSave = () => {
    setOpen(false);
    toast({
      title: "Sucesso!",
      description: "Loja removida com sucesso!",
      duration: 2500,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-white hover:bg-red-50 ">
          <Trash2 className="text-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[15rem]">
        <DialogHeader>
          <DialogTitle className="flex justify-center pb-7">
            CONFIRMAÇÃO
          </DialogTitle>
          <DialogDescription className="flex justify-center">
            <TriangleAlert
              className="pb-2 text-red-500"
              style={{ transform: "scale(4)" }}
            />
          </DialogDescription>
          <DialogDescription className="flex justify-center">
            Confirma a remoção da loja?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="bg-blue-700"
            type="submit"
            onClick={() => setOpen(false)}
          >
            NÃO
          </Button>
          <Button className="bg-blue-700" type="submit" onClick={handleSave}>
            SIM
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
