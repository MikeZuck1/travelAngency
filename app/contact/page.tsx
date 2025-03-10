import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center pt-[2rem] pb-[6rem] px-4 md:px-[12.5rem]">
          <div className="w-full text-center">
            <h1 className="uppercase font-bold text-3xl text-[#444]">
              contactez-nous
            </h1>
            <div className="flex justify-center">
              <hr className="mt-[1rem] w-[10rem] md:w-[25rem] border-[#02b8dd]" />
            </div>
            <p className="text-[#444] mt-[1.5rem] text-base md:text-lg leading-relaxed">
              Chez Travel Agency nous savons que voyager est une aventure
              humaine mais également un engagement financier important pour
              vous. C&apos;est pourquoi nous mettons un point d&apos;honneur à
              prendre en compte chacune de vos attentes pour vous aider dans la
              préparation de votre séjour, circuit ou voyage sur mesure.
            </p>
          </div>

          {/* Formulaire responsive */}
          <div className="flex flex-col md:flex-row w-full md:w-[55rem] items-center gap-4 mt-[3rem]">
            {/* Nom */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-2">
              <Label htmlFor="name" className="text-[#444] text-lg font-bold w-20 md:w-auto">
                Nom
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Votre nom"
                className="w-full md:w-[20rem] py-[1.5rem] rounded-sm"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-2">
              <Label htmlFor="email" className="text-[#444] text-lg font-bold w-20 md:w-auto">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Votre Email"
                className="w-full md:w-[20rem] py-[1.5rem] rounded-sm"
              />
            </div>

            {/* Bouton */}
            <Button className="w-full md:w-auto px-3 py-[1.5rem] bg-[#02b8dd] rounded-sm hover:bg-[#444] text-white font-bold text-lg cursor-pointer">
              OK
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
