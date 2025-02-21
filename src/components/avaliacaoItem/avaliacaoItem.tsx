import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {EditarColaborador} from "@/components/editarColaborador/editarColaborador";

interface AvaliacaoItemProps {
    showAvaliacao: boolean;
    setShowForm: (value: boolean) => void;
    setShowAvaliacao: (value: boolean) => void;
}

const TradeInDetailsAvaliacaoItem: React.FC<AvaliacaoItemProps> = ({
  showAvaliacao,
  setShowForm,
  setShowAvaliacao,
}) => {
  return showAvaliacao ? (
    <EditarColaborador />
    // criar componente
  ) : (
    <div className="w-full h-[40rem] flex items-center justify-center ">
      <Card className=" flex-col justify-center">
        <CardHeader className="flex flex-col items-center">
          <CardTitle>Seu aparelho vale até R$</CardTitle>
          <CardDescription className="text-4xl">790,00</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <p>Código de identificação</p>
          <Input
            className="w-80 border-black"
            placeholder="Código de identificação"
          />
          <div className="flex w-80 justify-between mt-4">
            <Button onClick={() => setShowForm(true)} className="bg-blue-700">
              Refazer
            </Button>
            <Button
              onClick={() => setShowAvaliacao(true)}
              className="bg-blue-700"
            >
              Continuar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradeInDetailsAvaliacaoItem;
