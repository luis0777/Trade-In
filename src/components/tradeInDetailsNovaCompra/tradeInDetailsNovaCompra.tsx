import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelecionarCondicaoSmartwatch } from "../selecionarCondicaoSmartwatch/selecionarCondicaoSmartwatch";

interface TradeInDetailsProps {
  showTradeInDetails: boolean;
  setShowForm: (value: boolean) => void;
  setShowTradeInDetails: (value: boolean) => void;
  resetChoices?: () => void;
}

const TradeInDetailsNovaCompra: React.FC<TradeInDetailsProps> = ({ 
    showTradeInDetails, 
    setShowForm, 
    setShowTradeInDetails,
    resetChoices 
}) => {
    const handleReset = () => {
        if (resetChoices) {
            resetChoices(); 
        }
        setShowForm(true); 
    };

    return showTradeInDetails ? (
        <SelecionarCondicaoSmartwatch />
    ) : (
        <div className="w-full h-[40rem] flex items-center justify-center ">
            <Card className=" flex-col justify-center">
                <CardHeader className="flex flex-col items-center">
                    <CardTitle>Seu aparelho vale até R$</CardTitle>
                    <CardDescription className="text-4xl">1400,00</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <p>Código de identificação</p>
                    <Input className="w-80 border-black" placeholder="Código de identificação" />
                    <div className="flex w-80 justify-between mt-4">
                        <Button onClick={handleReset} className="bg-blue-700">Refazer</Button>
                        <Button onClick={() => setShowTradeInDetails(true)} className="bg-blue-700">Continuar</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default TradeInDetailsNovaCompra;
