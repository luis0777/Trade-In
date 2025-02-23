import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface productEvaluationProps {
  productValue: number;  
  showproductEvaluation: boolean;
  setShowForm: (value: boolean) => void;
  setShowproductEvaluation: (value: boolean) => void;
  resetChoices?: () => void;
  onContinueTo: React.ReactNode; 
  onResetTo: React.ReactNode;    
}

const ProductEvaluation: React.FC<productEvaluationProps> = ({ 
    productValue,
    showproductEvaluation, 
    setShowForm, 
    setShowproductEvaluation,
    resetChoices,
    onContinueTo,
    onResetTo 
}) => {
    return showproductEvaluation ? (
        <>{onContinueTo}</>
    ) : (
        <div className="w-full h-[40rem] flex items-center justify-center ">
            <Card className=" flex-col justify-center">
                <CardHeader className="flex flex-col items-center">
                    <CardTitle>Seu aparelho vale até R$</CardTitle>
                    <CardDescription className="text-4xl">{productValue.toFixed(2)}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    <p>Código de identificação</p>
                    <Input className="w-80 border-black" placeholder="Código de identificação" />
                    <div className="flex w-80 justify-between mt-4">
                        <Button 
                            onClick={() => {
                                if (resetChoices) resetChoices();
                                setShowForm(true);
                            }} 
                            className="bg-blue-700"
                        >
                            Refazer
                        </Button>
                        <Button 
                            onClick={() => setShowproductEvaluation(true)} 
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

export default  ProductEvaluation;