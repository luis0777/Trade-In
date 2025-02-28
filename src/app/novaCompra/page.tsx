import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NovaCompra() {
  const devices = [
    { name: "Smartphone", img: "/Smartphone.png", path: "/smartphone" },
    { name: "Smartwatch", img: "/smartWatch.png", path: "/smartwatch" },
    { name: "Notebook", img: "/notebook.png", path: "/notebook" },
    { name: "Tablet", img: "/tablet.png", path: "/tablet" },
  ] as const;

  return (
    <section className="mt-40 ">
      <Navbar />

      <div className="flex justify-center w-full py-5">
        <ul className="steps steps-horizontal w-full max-w-screen-xl">
          <li className="step ">Selecionar Aparelho</li>
          <li className="step  ">Selecionar Condição</li>
          <li className="step ">Cadastrar Cliente</li>
          <li className="step ">Fotos do Aparelho</li>
          <li className="step ">Finalizar</li>
          <li className="step ">Imprimir Contrato</li>
        </ul>
      </div>

      <div className="container mx-auto  max-w-screen-xl  ">
        <div className="text-center">
          <b className="text-3xl sm:text-2xl pt-5">Tipos de dispositivos</b>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4  gap-8 lg:gap-44  max-w-[70rem] w-full  ">
          {devices.map((device, index) => (
            <div key={index} className=" p-4 mt-10 flex justify-center">
              <Link href={device.path} className="w-full">
                <Button className="w-[100rem] h-auto max-w-xs  bg-white text-black font-bold text-xl sm:text-2xl shadow-md hover:bg-slate-50 flex flex-col items-center">
                  {device.name}
                  <Image
                    src={device.img}
                    alt={device.name}
                    width={300}
                    height={300}
                    className="w-28 sm:w-36 md:w-44 lg:w-52  h-auto mt-2 mx-auto sm:mx-0"
                  />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}
