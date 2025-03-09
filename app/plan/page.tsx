import Image from "next/image";
import styloIcon from "@/public/image/steps-icon-1.png";
import organisationIcon from "@/public/image/steps-icon-2.png";
import travelIcon from "@/public/image/steps-icon-3.png";
export default function Page() {
  return (
    <>
      <section>
        <div className="mt-[2rem] pt-[2rem] pb-[6rem] px-[15rem]">
          <div className="flex flex-row justify-between items-center">
            <div className="px-[1rem] pt-[4rem] w-[20rem] text-center">
              <Image src={styloIcon} alt="Stylo Icon" className="mx-auto" />
              <h3 className="mt-[1rem] font-bold uppercase text-[#444]">
                planifier
              </h3>
              <p className="mt-[.9rem] text-center text-sm text-[#777]">
                Confiez-nous vos rêves d’évasion : en famille ou entre amis,
                nous trouverons la formule qui comblera vos attentes.
              </p>
            </div>

            <div className="px-[1rem] pt-[4rem] w-[20rem] text-center">
              <Image
                src={organisationIcon}
                alt="Organisation Icon"
                className="mx-auto"
              />
              <h3 className="mt-[1rem] text-center font-bold uppercase text-[#444]">
                organiser
              </h3>
              <p className="mt-[.9rem] text-center text-sm text-[#777]">
                Bénéficiez de l’expertise de nos spécialistes de chaque
                destination, ils vous accompagnent dans la réalisation de votre
                voyage.
              </p>
            </div>
            <div className="px-[1rem] pt-[4rem] w-[20rem] text-center">
              <Image src={travelIcon} alt="Travel Icon" className="mx-auto" />
              <h3 className="mt-[1rem] text-center font-bold uppercase text-[#444]">
                voyager
              </h3>
              <p className="mt-[.9rem] text-center text-sm text-[#777]">
                Nous nous chargeons d’assurer votre sécurité et de veiller à
                votre pleine sérénité tout au long de votre voyage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
