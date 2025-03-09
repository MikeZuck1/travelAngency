import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <>
      <section>
        <div className="flex-row justify-center items-center pt-[2rem] pb-[6rem]">
          <div className="flex-row px-[12.5rem]">
            <h1 className="text-center uppercase font-bold text-3xl text-[#444]">
              contactez-nous
            </h1>
            <div className="flex justify-center">
              <hr className="mt-[1rem] w-[25rem] text-[#02b8dd]" />
            </div>
            <p className="text-center text-[#444] mt-[1.5rem]">
              Chez Travel Agency nous savons que voyager est une aventure
              humaine mais également un engagement financier important pour
              vous. C&apos;est pourquoi nous mettons un point d&apos;honneur à
              prendre en compte chacune de vos attentes pour vous aider dans la
              préparation de votre séjour, circuit ou voyage sur mesure.
            </p>
          </div>

          <div className="flex justify-around">
            <div className="flex w-[55rem] items-center gap-1.5 mt-[3rem]">
              <Label
                htmlFor="email"
                className="text-[#444] mr-[.3rem] text-lg font-bold"
              >
                Nom
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Votre nom"
                className="w-[25rem] py-[1.5rem] rounded-sm mr-[1rem]"
              />
              <Label
                htmlFor="email"
                className="text-[#444] mr-[.3rem] text-lg font-bold"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Votre Email"
                className="w-[25rem] py-[1.5rem] rounded-sm mr-[1rem]"
              />
              <Button className="p-[1.5rem] w-[2rem] bg-[#02b8dd] border-radius rounded-sm hover:bg-[#444] cursor-pointer font-bold text-lg">
                OK
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
