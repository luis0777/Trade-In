"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function Home() {
  const { toast } = useToast();

  return (
    <section
      className="relative w-full h-screen"
      style={{
        backgroundImage: "url(/Home.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center h-screen px-8">
        <Card className="w-[400px] ">
          <CardHeader className="flex flex-row items-center justify-center">
            <Image src="/Assurant.png" alt="" width={200} height={50} />
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="email" placeholder="Digite seu email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Senha</Label>
                  <Input id="senha" placeholder="Digite sua senha" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col justify-center">
            <Link href="/novaCompra">
              <Button className="bg-blue-700  hover:bg-blue-400">Entrar</Button>
            </Link>
            <div className="justify-center pt-2  text-sm">
              <p className="flex justify-center">Problemas ao fazer login?</p>
              <p className="flex justify-center">
                Fale com seu gerente ou envie um email para:
              </p>
              <div className="flex justify-center">
                <Button
                  className="px-8 py-4 font-bold bg-transparent border-transparent text-black hover:bg-white "
                  variant="outline"
                  onClick={() => {
                    toast({
                      title: "Texto copiado para a área de transferência!",
                      duration: 2000,
                    });
                  }}
                >
                  revendedortradein@mywit.com
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
