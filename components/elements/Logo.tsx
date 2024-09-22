import Image from "next/image";
import Qreezy from "@/public/Qreezy.svg";

export const Logo = ({ width }: any) => {
  return (
    <div className="">
      <Image src={Qreezy} alt="Qreezy Logo" width={width} />
    </div>
  );
};
