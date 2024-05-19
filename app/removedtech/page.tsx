"use client";

import React from "react";
import Header from "../components/header";
import YouTube from "react-youtube";
import { Link } from "lucide-react";
import { Video } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const RemovedTech = () => {
  return (
    <div className="bg-black h-screen">
      <Header title="Removed tech" />
      <Separator />
      <div className="p-2">
        <h1 className="text-3xl text-neutral-100">Vantage Bounce</h1>
        <video width="500" height="500" controls preload="none">
          <source
            src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Superglide/Apex%20Legends%202022.11.29%20-%2020.13.47.05.DVR_Trim.mp4?t=2024-05-19T15%3A28%3A07.586Z"
            //type="video/mp4"
          />
          <track
            //src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
      </div>
    </div>
  );
};

export default RemovedTech;
