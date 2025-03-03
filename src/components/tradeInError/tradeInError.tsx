import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function TradeInError() {
  return (
    <div className="w-[550px] flex flex-col items-center justify-center mt-20">
      <form>
        <div className="grid w-full items-center gap-4 text-center ">
          <div className="flex justify-center">
            <TriangleAlert
              className="pb-2 text-red-500"
              style={{ transform: "scale(8)" }}
            />
          </div>
          <b>Desculpe, mas no momento não compramos este aparelho.</b>
        </div>
      </form>
    </div>
  );
}
