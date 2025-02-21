import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function TradeInError() {
  return (
    <div className="w-full h-[40rem] flex items-center justify-center">
      <Card className="w-[450px] h-[15rem]">
        <CardHeader></CardHeader>
        <CardContent className="mt-10">
          <form>
            <div className="grid w-full items-center gap-4 text-center ">
              <div className="flex justify-center">
                <TriangleAlert
                  className="pb-2 text-red-500"
                  style={{ transform: "scale(8)" }}
                />
              </div>
              <b>Desculpe, mas no momento não compramos este aparelho.</b>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/novaCompra">
            <Button className="bg-blue-700 text-white">Tela inicial</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
