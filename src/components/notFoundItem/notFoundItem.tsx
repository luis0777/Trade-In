import { Button } from "@/components/ui/button";

export function NotFoundItem() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <p className="text-lg mb-4">
        Configurações do item não encontradas para continuar, contate o suporte
        técnico.
      </p>
      <Button className="bg-blue-700 text-white" >Voltar</Button>
    </div>
  );
}
