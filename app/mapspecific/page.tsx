"use server";
import React from "react";
import Header from "../components/header";
import { Separator } from "@/components/ui/separator";
import MapSpecificComponent from "../components/mapSpecific/mapSpecificComponent";

function Page() {
  return (
    <div className="bg-neutral-900 bg-no-repeat bg-cover bg-center p-2 w-full min-h-screen h-full">
      <Header title="Map Specific" />
      <Separator />
      <h1 className="text-3xl text-white">Magnetism</h1>
      <div className="flex flex-row">
        <MapSpecificComponent
          Name="Tap jump"
          VideoLink="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Map%20Specific%20Tech/tap%20jump.mp4?t=2024-08-10T07%3A09%3A15.485Z"
          TutorialLink="https://youtu.be/UU_rb7VZcf8?si=ogEWH2Ah0XXmO1tD"
        />
        <MapSpecificComponent
          Name="Mag Leap"
          VideoLink="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Map%20Specific%20Tech/magleap.mp4?t=2024-08-10T08%3A33%3A18.084Z"
          TutorialLink="https://youtu.be/LZu99itsV4w?si=-ziH57DMxGMHB8Zp"
        />
      </div>
      <div >
        <h1 className="text-3xl text-white">Gravity Canon</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0ZUBy-VCXfk?si=DMw-tKUSWw7gi-MC"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Page;
