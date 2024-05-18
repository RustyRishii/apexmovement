import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
//https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-concept-art/apex-concept-art-wallpaper-octane.jpg
export default function Home() {
  return (
    <main className="h-screen">
      <div className="bg-[url('https://wallpapers.com/images/hd/apex-legends-octane-black-background-59m8zdwc855zxubr.jpg')] bg-cover bg-center bg-no-repeat h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold p-5 text-neutral-100  text-center ">
          Directory of all the Apex Legends movement Techniques
        </h1>
        <a
          href="https://linktr.ee/rustyrishii"
          className="transform hover:scale-110 hover:underline transition-transform "
          target="blank"
        >
          <p className="text-neutral-100 text-center ">By RustyRishii ↗</p>
        </a>
      </div>
      <div className="">
        <Link className="p-10" href="/general">
          General Movement Tech
        </Link>
        <Link className="p-10" href="/legendspecific">
          Legend Specific Tech
        </Link>
        <Link className="p-10" href="/legendspecific">
          Map Specific tech
        </Link>
        <Link className="p-10" href="/legendspecific">
          Misc & Mysteries
        </Link>
        <Link className="p-10" href="/legendspecific">
          Removed tech
        </Link>
      </div>
    </main>
  );
}
