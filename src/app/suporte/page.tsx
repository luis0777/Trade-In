"use client";
import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  const { toast } = useToast();
  return (
    <section className="py-16  ">
      
      <Navbar />

      <div className="space-y-16">
        <div className="w-full ">
          <b className="flex justify-center text-3xl pt-5">Suporte - contato</b>
        </div>

        <div className="flex justify-center ">
          <Card className="w-[550px]">
            <CardHeader>
              <CardTitle>Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input id="assunto" placeholder="Assunto" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                  <Textarea placeholder="Descrição"  rows={10} />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className=" w-full flex ">
              <Button className="bg-blue-700 w-full"  onClick={() => {
                    toast({
                      title: "Sucesso!",
                      description: "A mensagem foi enviada com sucesso!",
                      duration: 2000,
                    });
                  }}>Alterar senha</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <Footer />
    </section>
  );
}
