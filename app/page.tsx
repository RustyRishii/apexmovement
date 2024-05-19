"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

//https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/legends-concept-art/apex-concept-art-wallpaper-octane.jpg

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
          href="https://linktr.ee/rustyrishii"
          className="transform hover:scale-110 hover:underline transition-transform "
          target="blank"
        >
          <p className="text-neutral-100 text-center ">By RustyRishii ↗</p>
        </a>
        <Button
          className="m-10 font-bold"
          variant={"secondary"}
          onClick={handleScroll}
        >
          Start Exploring ↓
        </Button>
      </div>

      {/* <div
        id="explore-section"
        className=" flex flex-wrap justify-center items-center bg-stone-950"
      >
        <Link
          className="border p-40 m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100"
          href={"/general"}
        >
          General Tech
        </Link>
        <Link
          className="border p-40 m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100 "
          href={"/general"}
        >
          Legend Tech
        </Link>
        <Link
          className="border p-40 m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100 "
          href={"/general"}
        >
          Map tech
        </Link>
        <Link
          className="border p-40 m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100 "
          href={"/general"}
        >
          Misc/Mystries
        </Link>
        <Link
          className="border p-40 m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100"
          href={"/general"}
        >
          Removed
        </Link>
        <Link
          className="border p-40 m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100 "
          href={"/general"}
        >
          Supergliding
        </Link>
      </div> */}

      <div
        id="explore-section"
        className=" flex flex-wrap justify-center items-center bg-stone-950"
      >
        <Link
          className="border h-96 w-96 m-10 flex justify-center items-center align-middle bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100 text-2xl "
          href={"/general"}
        >
          General Movement Tech
        </Link>
        <Link
          className="border bg-[url('https://editors.dexerto.com/wp-content/uploads/2024/01/03/33512956188_4a169738ea_h-1200x675-1.jpg')] bg-cover bg-center bg-no-repeat h-96 w-96 flex m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100 text-2xl "
          href={"/legendspecific"}
        >
          Legend Specific Tech
        </Link>
        <Link
          className="border bg-[url('https://pbs.twimg.com/media/FxeNjHuWAAoMo4c.jpg')]
           bg-cover bg-center bg-no-repeat h-96 w-96 flex m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100 text-2xl "
          href={"/general"}
        >
          Map Specific tech
        </Link>
        <Link
          className="border h-96 w-96 flex m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform  text-2xl text-neutral-100 "
          href={"/general"}
        >
          Misc & Mystries
        </Link>
        <Link
          className="border h-96 w-96 flex m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-2xl text-neutral-100"
          href={"/general"}
        >
          Removed tech
        </Link>
        <Link
          className="border bg-[url('https://c4.wallpaperflare.com/wallpaper/24/677/207/video-game-apex-legends-octane-apex-legends-hd-wallpaper-preview.jpg')]
          bg-cover bg-center bg-no-repeat text-2xl h-96 w-96 flex m-10 justify-center items-center bg-stone-900 hover:bg-stone-800 rounded-xl hover:scale-105 transition-transform text-neutral-100"
          href={"/general"}
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
