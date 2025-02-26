"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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

export default function Home() {
  const { toast } = useToast();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email === "trainne@assurant.com" && senha === "1910") {
      router.push("/novaCompra");
    } else {
      toast({
        title: "Erro!!!",
        description: "Credenciais incorretas",
        duration: 2000,
        variant: "destructive",
      });
    }
  };

  const copiarTexto = (texto: string) => {
    navigator.clipboard.writeText(texto).then(() => {
      toast({
        title: "Sucesso!!!",
        description: "Email copiado para a área de transferência",
        duration: 2000,
      });
    });
  };

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
        <Card className="w-[400px]">
          <CardHeader className="flex flex-row items-center justify-center">
            <Image
              src="/Assurant.png"
              alt="Logo Assurant"
              width={200}
              height={50}
            />
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center">
            <Button
              className="w-full bg-blue-700 hover:bg-blue-400"
              onClick={handleLogin}
            >
              Entrar
            </Button>
            <div className="text-sm text-center mt-3">
              <p>Problemas ao fazer login?</p>
              <p>Fale com seu gerente ou envie um email para:</p>
              <Button
                variant="outline"
                className="mt-2 text-black hover:bg-gray-100"
                onClick={() => copiarTexto("revendedortradein@mywit.com")}
              >
                revendedortradein@mywit.com
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
