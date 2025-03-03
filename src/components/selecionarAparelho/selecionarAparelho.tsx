import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { SmartwatchComponent } from "@/components/smartwatchComponent/smartwatchComponent";
import { NotebookComponent } from "@/components/notebookComponent/notebookComponent";
import { TabletComponent } from "@/components/tabletComponent/tabletComponent";
import { SmartphoneComponent } from "@/components/smartphoneComponent/smartphoneComponent";

interface SelecionarAparelhoProps {
  toStep2: (type: string) => void;
}

export function SelecionarAparelho({ toStep2 }: SelecionarAparelhoProps) {
  const [selectedComponent, setSelectedComponent] =
    useState<JSX.Element | null>(null);

  const devices = [
    {
      name: "Smartphone",
      img: "/Smartphone.png",
      component: <SmartphoneComponent />,
    },
    {
      name: "Smartwatch",
      img: "/smartWatch.png",
      component: <SmartwatchComponent toStep2={toStep2} />,
    },
    {
      name: "Notebook",
      img: "/notebook.png",
      component: <NotebookComponent />,
    },
    { name: "Tablet",
      img: "/tablet.png",
      component: <TabletComponent toStep2={toStep2}/> 
    },
  ] as const;

  const handleDeviceClick = (component: JSX.Element) => {
    setSelectedComponent(component);
  };

  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="text-center">
        <b className="text-3xl sm:text-2xl pt-5">Tipos de dispositivos</b>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-44 max-w-[70rem] w-full">
        {devices.map((device, index) => (
          <div key={index} className="p-4 mt-10 flex justify-center">
            <div className="w-full">
              <Button
                onClick={() => handleDeviceClick(device.component)}
                className="w-[100rem] h-auto max-w-xs bg-white text-black font-bold text-xl sm:text-2xl shadow-md hover:bg-slate-50 flex flex-col items-center"
              >
                {device.name}
                <Image
                  src={device.img}
                  alt={device.name}
                  width={300}
                  height={300}
                  className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto mt-2 mx-auto sm:mx-0"
                />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Renderiza o componente selecionado */}
      <div className="mt-8">{selectedComponent}</div>
    </div>
  );
}
