import { Heart, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className=" my-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Link href="https://twitter.com/mouhamedhanne13">
            <Linkedin size={16} />
          </Link>
          <Link href="https://www.instagram.com/rassoul_404">
            <Instagram size={16} />
          </Link>
          <Link href="https://github.com/mouhamedhanne" target="_blank">
            <Github size={16} />
          </Link>
        </div>
        <div className="flex items-center justify-center mb-3">
          <div className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-3 py-2  font-bold transition-all hover:brightness-110">
            <Image
              className="size-12 rounded-full"
              src="/qreezy.png"
              alt="my face"
              width={30}
              height={20}
            />
            <div className="flex flex-col gap-0">
              <p className="text-lg font-semibold">
                Made by
                <Link
                  className="font-extrabold text-primary hover:underline"
                  href="https://melvynx.com"
                >
                  Melvynx
                </Link>
              </p>
              <Link
                className="text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline"
                href="https://twitter.com/melvyn_me"
              >
                Follow me on Twitter
              </Link>
            </div>
          </div>
        </div>
        <p className="text-base flex justify-center text-neutral-600">
          Propulsé avec {"  "} <Heart className="text-red-500" />
          <Link href="https://mouhamedhanne.vercel.app/">
            {"  "}
            <u>@mouhamedhanne</u>
          </Link>
        </p>
      </div>
    </footer>
  );
};
