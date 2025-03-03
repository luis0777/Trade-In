import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useStep } from "@/context/StepContext";

export function VerificaCPF() {
  const { setCurrentStep } = useStep();

  return (
    <section>
      <div className="w-full h-[40rem] flex items-center justify-center flex-col">
        <Card className="w-[450px]">
          <CardHeader className="flex flex-col items-center">
            <CardTitle>CPF</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4 text-center">
                <Input id="cpf" placeholder="___-___-___-__" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="flex flex-col gap-2">
              <div>
                <Button className="bg-blue-700 text-white">
                  Verificar existência no sistema
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
        <div className="flex justify-start w-[450px] mt-2">
          <Button className="bg-blue-700 text-white" onClick={() => setCurrentStep(2)}>Voltar</Button>
        </div>
      </div>
    </section>
  );
}
