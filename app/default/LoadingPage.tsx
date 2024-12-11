import Image from "next/image";
import light from "@/app/e-light.png";
import dark from "@/app/e-dark.png";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div>
        <Image
          src={light}
          alt="Picture of the author"
          className="w-auto h-[30vh] rounded dark:hidden animate-spin"
        />
        <Image
          src={dark}
          alt="Picture of the author"
          className="w-auto h-[30vh] rounded hidden dark:block animate-spin"
        />
      </div>
    </div>
  );
}
