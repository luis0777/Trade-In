import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NovaCompra() {
  return (
    <section className="py-20">
      <Navbar />

      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center">
          <b className="text-3xl sm:text-4xl pt-5">Tipos de dispositivos</b>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {[
            { name: "Smartphone", img: "/Smartphone.png" },
            { name: "Smartwatch", img: "/smartWatch.png" },
            { name: "Notebook", img: "/notebook.png" },
            { name: "Tablet", img: "/tablet.png" },
          ].map((device, index) => (
            <div key={index} className="p-4 flex justify-center">
              <Button className="w-[100rem] h-auto max-w-xs md:max-w-md aspect-[4/3] bg-white text-black font-bold text-xl sm:text-2xl shadow-md hover:bg-slate-50 flex flex-col items-center">
                {device.name}
                <Image
                  src={device.img}
                  alt={device.name}
                  width={300}
                  height={300}
                  className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto mt-2"
                />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}
