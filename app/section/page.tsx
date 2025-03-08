import Image from "next/image";
import pont from "@/app/image/main.jpg";
import { Button } from "@/components/ui/button";
export default function Section() {
  return (
    <>
      <section className="relative w-full h-[450px]">
        <Image src={pont} alt="pont mer" className="" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="flex flex-col text-center text-[#444] text-5xl uppercase mb-[3.9rem]">
            organisez votre <span className="font-bold">voyage sur mesure</span>
          </h1>
          <Button
            variant="outline"
            className="mt-[1rem] px-[2.2rem] py-[1.6rem] border-none bg-[#ff7a00] text-[#fff] hover:bg-[#02b8dd] hover:text-[#fff] cursor-pointer"
          >
            Par ici
          </Button>
        </div>
      </section>
    </>
  );
}
