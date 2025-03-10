import Image from "next/image";
import styloIcon from "@/public/image/steps-icon-1.png";
import organisationIcon from "@/public/image/steps-icon-2.png";
import travelIcon from "@/public/image/steps-icon-3.png";

export default function Page() {
  return (
    <section className="py-9 pb-[5rem] px-6 md:px-[15rem]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="px-4 pt-8 w-full md:w-[20rem] text-center">
          <Image src={styloIcon} alt="Stylo Icon" className="mx-auto" />
          <h3 className="mt-4 font-bold uppercase text-[#444]">Planifier</h3>
          <p className="mt-2 text-sm text-[#777]">
            Confiez-nous vos rêves d’évasion : en famille ou entre amis, nous trouverons la formule qui comblera vos attentes.
          </p>
        </div>

        <div className="px-4 pt-8 w-full md:w-[20rem] text-center">
          <Image src={organisationIcon} alt="Organisation Icon" className="mx-auto" />
          <h3 className="mt-4 font-bold uppercase text-[#444]">Organiser</h3>
          <p className="mt-2 text-sm text-[#777]">
            Bénéficiez de l’expertise de nos spécialistes de chaque destination, ils vous accompagnent dans la réalisation de votre voyage.
          </p>
        </div>

        <div className="px-4 pt-8 w-full md:w-[20rem] text-center">
          <Image src={travelIcon} alt="Travel Icon" className="mx-auto" />
          <h3 className="mt-4 font-bold uppercase text-[#444]">Voyager</h3>
          <p className="mt-2 text-sm text-[#777]">
            Nous nous chargeons d’assurer votre sécurité et de veiller à votre pleine sérénité tout au long de votre voyage.
          </p>
        </div>
      </div>
    </section>
  );
}
