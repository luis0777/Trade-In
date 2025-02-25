import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { RegisterCustomer } from "../registerCustomer/registerCustomer";
import { SeadingPhotos } from "../seadingPhotos/seadingPhotos";
import { Completion } from "../completion/completion";
import { Confirmation } from "../confirmation/confirmation";

interface VerificarCPFClienteProps {
  setShowPreviousComponent: (value: boolean) => void;
  previousComponent: string;
}

export function VerificarCPFCliente({
  setShowPreviousComponent,
}: VerificarCPFClienteProps) {
  const [showRegisterCustomer, setShowRegisterCustomer] = useState(false);
  const [showSeadingPhotos, setShowSeadingPhotos] = useState(false);

  if (showRegisterCustomer) {
    return (
      <RegisterCustomer
        setShowPreviousComponent={setShowRegisterCustomer}
        previousComponent="verificarCPFCliente"
        onContinueTo={
          <SeadingPhotos
            setShowPreviousComponent={setShowSeadingPhotos}
            previousComponent="registerCustomer"
            onContinueTo={
              <Confirmation
                setShowPreviousComponent={setShowSeadingPhotos}
                previousComponent="registerCustomer"

                onContinueTo={
                  <Completion
                    setShowPreviousComponent={setShowSeadingPhotos}
                    previousComponent="confirmation"
                    onContinueTo={null}
                  />
                }
              />
            }
          />
        }
      />
    );
  }

  return (
    <>
      {!showRegisterCustomer ? (
        <div className="w-full h-[40rem] flex items-center justify-center flex-col">
          <Card className="w-[450px]">
            <CardHeader className="flex flex-col items-center">
              <CardTitle>CPF</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4 text-center">
                  <Input id="cpf" placeholder="..-" />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="flex flex-col gap-2">
                <div>
                  <Button
                    className="bg-blue-700 text-white"
                    onClick={() => setShowRegisterCustomer(true)}
                  >
                    Verificar existência no sistema
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
          <div className="flex justify-start w-[450px] mt-2">
            <Button
              className="bg-blue-700 text-white"
              onClick={() => setShowPreviousComponent(true)}
            >
              Voltar
            </Button>
          </div>
        </div>
      ) : (
        <RegisterCustomer
          setShowPreviousComponent={setShowRegisterCustomer}
          previousComponent="verificarCPFCliente"
          onContinueTo={
            <SeadingPhotos
              setShowPreviousComponent={setShowSeadingPhotos}
              previousComponent="registerCustomer"
              onContinueTo={
                <Confirmation
                  setShowPreviousComponent={setShowSeadingPhotos}
                  previousComponent="registerCustomer"

                  onContinueTo={
                    <Completion
                      setShowPreviousComponent={setShowSeadingPhotos}
                      previousComponent="confirmation"
                      onContinueTo={null}
                    />
                  }
                />
              }
            />
          }
        />
      )}
    </>
  );

}