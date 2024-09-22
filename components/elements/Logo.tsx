import Image from "next/image";
import Qreezy from "@/public/qreezy.svg";

export const Logo = ({ width }: any) => {
  return (
    <div className="">
      <Image src={Qreezy} alt="Qreezy Logo" width={width} />
    </div>
  );
};
