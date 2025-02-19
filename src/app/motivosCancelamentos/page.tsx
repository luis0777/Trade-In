import { Footer } from "@/components/footer/footer";
import { Navbar } from "@/components/navbar/navbar";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { AddMotivosCancelamentos } from "@/components/addMotivosCancelamentos/addMotivosCancelamentos";

export default function MotivosCancelamentos() {
  return (
    <section className="py-16">
      <Navbar />

      <div>
        <div className="w-full">
          <b className="flex justify-center text-3xl pt-5">Motivos/Cancelamentos</b>
        </div>

        <div className="w-full flex px-2">
            <div className="w-1/2 flex justify-start">
            <Select defaultValue="triage">
      <SelectTrigger className="w-[12rem]">
        <SelectValue  />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="triage">Self Triage</SelectItem>
          <SelectItem value="aprovacao">Pré-aprovação OS</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
            <div className="w-1/2 flex justify-end">
            <AddMotivosCancelamentos    />


            </div>

        </div>
      </div>
      <Footer />
    </section>
  );
}
