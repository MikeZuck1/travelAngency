import Image from "next/image";
import pont from "@/public/image/main.jpg";
import { Button } from "@/components/ui/button";

export default function Section() {
  return (
    <section className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Image responsive en arrière-plan */}
      <Image
        src={pont}
        alt="pont mer"
        layout="fill"
        className="absolute inset-0"
        priority 
      />

      {/* Contenu centré */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-[#444] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase mb-6 leading-tight w-[40rem]">
          Organisez votre <span className="font-bold">voyage sur mesure</span>
        </h1>

        <Button
          variant="outline"
          className="mt-1 px-4 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 border-none bg-[#ff7a00] text-white 
          hover:bg-[#02b8dd] transition-all duration-300 ease-in-out focus:ring-4 focus:ring-[#02b8dd]"
        >
          Par ici
        </Button>
      </div>
    </section>
  );
}