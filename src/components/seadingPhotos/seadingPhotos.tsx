"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Camera, ArrowBigRight, ArrowBigLeft } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";

interface SeadingPhotosProps {


  onContinueTo: () => void;
  onPreviousTo: () => void;
}

export function SeadingPhotos({

  
  onContinueTo,
  onPreviousTo,
}: SeadingPhotosProps) {
  const [showNextComponent, setShowNextComponent] = React.useState(false);
  const [showPreviousComponent, setShowPrevComponent] = React.useState(false);
  

  const handleNext = () => {
    setShowNextComponent(true);
  };
  const handlePrevious = () => {
    setShowPrevComponent(true)
  };

  return showNextComponent ? (
    <>{onContinueTo}</>
  ) : showPreviousComponent ? (
    <>{onPreviousTo}</>
  ) : (
    <section className="py-16">
      <div className="w-full flex items-center justify-center">
        <div className="w-full px-48">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h3 className="text-lg font-semibold">Instruções (Ajuda)</h3>
              </AccordionTrigger>
              <AccordionContent>
                <div className="w-full flex justify-center ">
                  <div className=" w-1/3 flex justify-center  ">
                    <Card className="w-[350px] mt-4 ">
                      <CardContent>
                        <div className="w-full mt-10">
                          <div className="w-full h-40  flex justify-center items-center">
                            <div className="  ">
                              <img src="primeira.jpg" alt="11° foto" />
                            </div>
                          </div>
                          <div className="w-full h-40 flex-col flex justify-center items-center px-2 text-center ">
                            <b className="text-lg">1° FOTO</b>
                            Imagem do aparelho ligado, com a tela exibindo um
                            fundo branco.
                          </div>
                          <div className="w-full h-10  flex justify-center items-center">
                            <Button
                              asChild
                              className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-700  "
                            >
                              <label
                                htmlFor="picture"
                                className="cursor-pointer"
                              >
                                Selecionar Arquivo 📤
                              </label>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className=" w-1/3 flex justify-center  ">
                    <Card className="w-[350px] mt-4">
                      <CardContent>
                        <div className="w-full mt-10">
                          <div className="w-full h-40  flex justify-center items-center">
                            <div className="  ">
                              <img src="segunda.jpg" alt="11° foto" />
                            </div>
                          </div>
                          <div className="w-full h-40 flex-col flex justify-center items-center px-2 text-center ">
                            <b className="text-lg">2° FOTO</b>
                            IMEI/Serial Number legível na tela (digite *#06#
                            para exibir).
                          </div>
                          <div className="w-full h-10  flex justify-center items-center">
                            <Button
                              asChild
                              className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-700  "
                            >
                              <label
                                htmlFor="picture"
                                className="cursor-pointer"
                              >
                                Selecionar Arquivo 📤
                              </label>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className=" w-1/3 flex justify-center  ">
                    <Card className="w-[350px] mt-4">
                      <CardContent>
                        <div className="w-full mt-10">
                          <div className="w-full h-40  flex justify-center items-center">
                            <div className="  ">
                              <img src="terceira.jpg" alt="11° foto" />
                            </div>
                          </div>
                          <div className="w-full h-40 flex-col flex justify-center items-center px-2 text-center ">
                            <b className="text-lg">3° FOTO</b>
                            Fotografias detalhadas das laterais aparecendo
                            botões do aparelho.
                          </div>
                          <div className="w-full h-10  flex justify-center items-center">
                            <Button
                              asChild
                              className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-700  "
                            >
                              <label
                                htmlFor="picture"
                                className="cursor-pointer"
                              >
                                Selecionar Arquivo 📤
                              </label>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="w-full flex justify-center ">
                  <div className=" w-1/3 flex justify-center  ">
                    <Card className="w-[350px] mt-8 ">
                      <CardContent>
                        <div className="w-full mt-10">
                          <div className="w-full h-40  flex justify-center items-center">
                            <div className="  ">
                              <img src="quarta.jpg" alt="4° foto" />
                            </div>
                          </div>
                          <div className="w-full h-40 flex-col flex justify-center items-center px-2 text-center ">
                            <b className="text-lg">4° FOTO</b>
                            Foto da parte traseira do aparelho, evidenciando
                            características
                          </div>
                          <div className="w-full h-10  flex justify-center items-center">
                            <Button
                              asChild
                              className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-700  "
                            >
                              <label
                                htmlFor="picture"
                                className="cursor-pointer"
                              >
                                Selecionar Arquivo 📤
                              </label>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className=" w-1/3 flex justify-center  ">
                    <Card className="w-[350px] mt-8">
                      <CardContent>
                        <div className="w-full mt-10">
                          <div className="w-full h-40  flex justify-center items-center">
                            <div className="  ">
                              <img
                                src="quinta.jpg"
                                alt="5° foto"
                                className="h-60"
                              />
                            </div>
                          </div>
                          <div className="w-full h-40 flex-col flex justify-center items-center px-2 text-center ">
                            <b className="text-lg">5° FOTO</b>
                            Imagem que confirme a remoção da conta associada ao
                            aparelho.
                          </div>
                          <div className="w-full h-10  flex justify-center items-center">
                            <Button
                              asChild
                              className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-700  "
                            >
                              <label
                                htmlFor="picture"
                                className="cursor-pointer"
                              >
                                Selecionar Arquivo 📤
                              </label>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className=" w-1/3 flex justify-center  ">
                    <Card className="w-[350px] mt-8">
                      <CardContent>
                        <div className="w-full mt-10">
                          <div className="w-full h-40  flex justify-center items-center">
                            <div className="  ">
                              <img
                                src="https://thumbs.dreamstime.com/b/finger-print-scan-icon-biometric-identification-symbol-white-background-201765268.jpg"
                                alt="6° foto"
                              />
                            </div>
                          </div>
                          <div className="w-full h-40 flex-col flex justify-center items-center px-2 text-center ">
                            <b className="text-lg">3° FOTO</b>
                            Imagem demonstrando a configuração ou uso da
                            biometria facial e/ou digital.
                          </div>
                          <div className="w-full h-10  flex justify-center items-center">
                            <Button
                              asChild
                              className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-700  "
                            >
                              <label
                                htmlFor="picture"
                                className="cursor-pointer"
                              >
                                Selecionar Arquivo 📤
                              </label>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="w-full flex justify-center ">
                  <div className=" w-1/3 flex justify-center  ">
                    <Card className="w-[350px] mt-8">
                      <CardContent>
                        <div className="w-full mt-10">
                          <div className="w-full h-40  flex justify-center items-center">
                            <div className="  ">
                              <img src="setima.jpg" alt="6° foto" />
                            </div>
                          </div>
                          <div className="w-full h-40 flex-col flex justify-center items-center px-2 text-center ">
                            <b className="text-lg">7° FOTO</b>
                            Identidade do cliente, pode ser RG ou CNH.
                          </div>
                          <div className="w-full h-10  flex justify-center items-center">
                            <Button
                              asChild
                              className="w-full bg-blue-600 text-white font-semibold hover:bg-blue-700  "
                            >
                              <label
                                htmlFor="picture"
                                className="cursor-pointer"
                              >
                                Selecionar Arquivo 📤
                              </label>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex flex-wrap items-center justify-center gap-16 p-8">
          <Button  className="w-60 bg-blue-600 text-lg font-semibold shadow-md flex items-center justify-center gaptransition-all duration-300 hover:scale-110 hover:shadow-xl" onClick={handlePrevious}>
            <ArrowBigLeft size={24} /> Voltar
          </Button>

          <Button className="w-60 bg-blue-600 text-lg font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-xl">
            Habilitar câmera <Camera size={24} />
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-60 bg-blue-600 text-lg font-semibold shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:scale-110 hover:shadow-xl">
                Continuar sem foto <ArrowBigRight size={24} />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirmação</AlertDialogTitle>
                <AlertDialogDescription className="text-lg">
                  Se continuar, você confirma o estado do aparelho. Deseja
                  avançar mesmo assim?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="  shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105  hover:shadow-xl">
                  NÃO
                </AlertDialogCancel>
                <AlertDialogAction
                  className=" bg-blue-600  shadow-md flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105  hover:shadow-xl"
                  onClick={handleNext}
                >
                  SIM
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
}
