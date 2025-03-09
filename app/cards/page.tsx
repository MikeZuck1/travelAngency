import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import imageFirst from "@/public/image/article-image-1.jpg";
import imageSecond from "@/public/image/article-image-2.jpg";
import { Button } from "@/components/ui/button";

export default function Cards() {
  return (
    <>
      <section>
        <div className="bg-gray-100 py-[3rem] px-[13rem]">
          <div className="flex flex-row justify-around">
            <Card className="w-[30rem] h-[18rem] relative overflow-hidden rounded-lg">
              {/* Image en arrière-plan */}
              <div className="absolute inset-0">
                <Image
                  src={imageFirst}
                  alt="Card Image"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenu de la carte au-dessus */}
              <div className="relative flex flex-col justify-between py-6 text-[#444] bg-[#fff] w-[12rem] h-full">
                <CardHeader>
                  <CardTitle className="uppercase text-center mb-[.8rem] text-2xl font-bold">
                    Partez en famille
                  </CardTitle>
                  <div className="flex justify-center">
                    <hr className="w-[10rem]" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center bg-amber-300 h-[6rem] w-[10.5rem] text-center">
                    <CardDescription className="italic">
                      Offrez le meilleur à ceux que vous aimez et partagez des
                      moments fabuleux !
                    </CardDescription>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-[7rem] bg-[#ff7a00] border-radius rounded-sm hover:bg-[#02b8dd] cursor-pointer">
                    Plus d&apos;infos
                  </Button>
                </CardFooter>
              </div>
            </Card>

            <Card className="w-[30rem] h-[18rem] relative overflow-hidden rounded-lg">
              {/* Image en arrière-plan */}
              <div className="absolute inset-0">
                <Image
                  src={imageSecond}
                  alt="Card Image"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenu de la carte au-dessus */}
              <div className="relative flex flex-col justify-between p-6 text-[#444] bg-[#fff] w-[12rem] h-full">
                <CardHeader>
                  <CardTitle className="uppercase text-center mb-[.8rem] text-2xl font-bold">
                    envie de s&apos;évader
                  </CardTitle>
                  <div className="flex justify-center">
                    <hr className="w-[10rem]" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center bg-amber-300 h-[6rem] w-[10.5rem] text-center">
                    <CardDescription className="italic text-center">
                      Parfois un peu d&apos;évasion serait le bienvenue et
                      ferait le plus grand bien !
                    </CardDescription>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-[7rem] bg-[#ff7a00] border-radius rounded-sm hover:bg-[#02b8dd] cursor-pointer">
                    Plus d&apos;infos
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
