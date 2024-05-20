"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

//https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-concept-art/apex-concept-art-wallpaper-octane.jpg

//bg-[url('https://gmedia.playstation.com/is/image/SIEPDC/apex-legends-clubs-screen-01-ps4-en-19jan21?$facebook$')] bg-no-repeat bg-cover

export default function Home() {
  const handleScroll = () => {
    const targetElement = document.getElementById("explore-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="h-screen">
      <div className="bg-[url('https://wallpapers.com/images/hd/apex-legends-octane-black-background-59m8zdwc855zxubr.jpg')] bg-cover bg-center bg-no-repeat brightness-100 contrast-125 h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold p-5 text-neutral-100  text-center brightness-200">
          Directory of all the Apex Legends movement Techniques
        </h1>
        <a
          href="https://linktr.ee/rustyrishi"
          className="transform hover:scale-110 transition-transform "
          target="blank"
        >
          <p className="text-neutral-100 text-center ">By RustyRishi ↗</p>
        </a>
        <Button
          className="m-10 font-bold"
          variant={"secondary"}
          onClick={handleScroll}
        >
          Start Exploring ↓
        </Button>
      </div>
      <div
        id="explore-section"
        className=" bg-gradient-to-r from-indigo-500 flex flex-wrap justify-center items-center bg-stone-950"
      >
        <Link
          className="border h-96 w-96 m-10 flex justify-center items-center align-middle bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100 text-2xl "
          href={"/general"}
        >
          General Movement Tech(Coming soon)
        </Link>
        <Link
          className="border bg-[url('https://editors.dexerto.com/wp-content/uploads/2024/01/03/33512956188_4a169738ea_h-1200x675-1.jpg')] bg-cover bg-center bg-no-repeat h-96 w-96 flex m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100 text-2xl "
          href={"/legendspecific"}
        >
          Legend Specific Tech(Coming soon)
        </Link>
        <Link
          className="border bg-[url('https://pbs.twimg.com/media/FxeNjHuWAAoMo4c.jpg')]
           bg-cover bg-center bg-no-repeat h-96 w-96 flex m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100 text-2xl "
          href={"/general"}
        >
          Map Specific tech(Coming soon)
        </Link>
        <Link
          className="border h-96 w-96 flex m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform  text-2xl text-neutral-100 "
          href={"/mystries"}
        >
          Misc & Mystries(Coming soon)
        </Link>
        <Link
          className="border h-96 w-96 flex m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-2xl text-neutral-100"
          href={"/removedtech"}
        >
          Removed tech
        </Link>
        <Link
          className="border bg-[url('https://c4.wallpaperflare.com/wallpaper/24/677/207/video-game-apex-legends-octane-apex-legends-hd-wallpaper-preview.jpg')]
          bg-cover bg-center bg-no-repeat text-2xl h-96 w-96 flex m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100"
          href={"https://apexmovement.tech/superglidetrainer/"}
          target="_blank"
        >
          Learn supergliding
        </Link>
      </div>
    </main>
  );
}

{
  /* <div className="h-screen justify-center items-center flex bg-black">
        <Link
          className="p-10 m-5 hover:bg-neutral-900 border rounded-lg hover:scale-110 transition-transform text-neutral-100 border-neutral-100"
          href="/general"
        >
          General Movement Tech
        </Link>
        <Link
          className="p-10 m-5 hover:bg-neutral-900 border rounded-lg hover:scale-110 transition-transform text-neutral-100 border-neutral-100"
          href="/legendspecific"
        >
          Legend Specific Tech
        </Link>
        <Link
          className="p-10 m-5 hover:bg-neutral-900 border rounded-lg hover:scale-110 transition-transform text-neutral-100 border-neutral-100"
          href="/legendspecific"
        >
          Map Specific tech
        </Link>
        <Link
          className="p-10 m-5 hover:bg-neutral-900 border rounded-lg hover:scale-110 transition-transform text-neutral-100 border-neutral-100"
          href="/legendspecific"
        >
          Misc & Mysteries
        </Link>
        <Link
          className="p-10 m-5 hover:bg-neutral-900 border rounded-lg hover:scale-110 transition-transform text-neutral-100 border-neutral-100"
          href="/legendspecific"
        >
          Removed tech
        </Link>
      </div> */
}
