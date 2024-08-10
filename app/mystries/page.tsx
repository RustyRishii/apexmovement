"use server"
import React from "react";
import Header from "../components/header";
import { Separator } from "@/components/ui/separator";
import VideoPlayer from "../components/videoplayer";

const Mystries = () => {
  return (
    <div className=" p-2 bg-black h-screen">
      <Header title="Misc & Mystries" />
      <Separator />
      <div>
        <h1 className="text-3xl text-neutral-100 my-2">Boop Glitch</h1>
        <VideoPlayer src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Mystries/boop%20glitch.mp4?t=2024-08-10T08%3A49%3A05.908Z" />
      </div>
    </div>
  );
};

export default Mystries;
