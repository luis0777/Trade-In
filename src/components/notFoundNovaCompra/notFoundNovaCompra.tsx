import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function NotFoundNovaCompra() {
  return (
    <div className="w-full h-[40rem] flex items-center justify-center ">
    <Card className="flex justify-center ">
      <CardHeader className="flex flex-col items-center ">
        <CardTitle className="py-3">
          Configurações do item não encontradas para continuar, contate o
          suporte técnico.
        </CardTitle>
        <Link href="/novaCompra">
          <Button className="bg-blue-700 ">Voltar</Button>
        </Link>
      </CardHeader>
    </Card>
    </div>
  );
}
