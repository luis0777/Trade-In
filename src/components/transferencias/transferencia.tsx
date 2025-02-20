
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Transferencia() {
  return (
    <section className="py-16 w-full ">
      <div className="flex w-full">
        <div className="w-[30%]">
          <Label htmlFor="framework" className="font-bold">
            Outras Lojas
          </Label>
          <Select>
            <SelectTrigger id="lojas">
              <SelectValue placeholder="HOMOLOG-000163_002C&V" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="next">HOMOLOG-000163_002C&V</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=" w-[70%] flex justify-start flex-col px-60 font-semibold text-2xl">
          Solicitações de Entrada <br /> Nenhum registro encontrado... <br />{" "}
          Solicitações de Saída
        </div>
      </div>
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">CÓDIGO</TableHead>
              <TableHead className="font-bold">DESTINO</TableHead>
              <TableHead className=" font-bold">NUMERO LACRE</TableHead>
              <TableHead className="font-bold">STATUS</TableHead>
              <TableHead className="font-bold">SOLICITAÇÃO</TableHead>
              <TableHead className=" font-bold">SAÍDA </TableHead>
              <TableHead className="font-bold">CHEGADA</TableHead>
              <TableHead className="font-bold">ITENS</TableHead>
              <TableHead className=" font-bold">ALTERAR</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
      <div className=" font-semibold text-2xl text-center">
        Nenhum registro encontrado...
      </div>
    </section>
  );
}
