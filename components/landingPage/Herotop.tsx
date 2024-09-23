import Image from "next/image";
import Qreezy from "@/public/qreezy-illustration.jpg";

export const Herotop = () => {
  return (
    <div
      className="mt-[8rem] flex h-full flex-col gap-6
         pb-8 pt-6 max-lg:flex-col px-6 lg:px-0 md:py-10 "
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <h1
          className="text-3xl font-extrabold leading-tight text-center
              tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl"
        >
          <span
            className="inline-block bg-black text-white
             px-1 py-2"
          >
            Générez
          </span>{" "}
          <u>Modifiez </u> <br />
          et Gérer Vos QR Codes en <br /> Toute Simplicité
        </h1>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="bg-black">
          <Image src={Qreezy} alt="illustartion" width={300} />
        </div>
      </div>
    </div>
  );
};
