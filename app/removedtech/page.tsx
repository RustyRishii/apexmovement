"use client";

import React from "react";
import Header from "../components/header";
import YouTube from "react-youtube";
import { Link } from "lucide-react";
import { Video } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const RemovedTech = () => {
  return (
    <div className="bg-neutral-900 bg-no-repeat bg-cover bg-center h-full">
      <Header title="Removed tech" />
      <Separator />
      <div className="p-2">
        <h1 className="text-3xl text-neutral-100">Vantage Bounce</h1>
        <video width="500" height="500" controls preload="none">
          <source
            src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Vantage%20bounce.mp4?t=2024-05-20T15%3A31%3A16.549Z"
            //type="video/mp4"
          />
          <track
            //src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
        <h1 className="text-3xl text-neutral-100 py-2">Punch Boosting</h1>
        <video width="500" height="500" controls preload="none">
          <source
            src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Punch%20boosting.mp4?t=2024-05-20T15%3A32%3A31.035Z"
            //type="video/mp4"
          />
          <track
            //src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
        <h1 className="text-3xl text-neutral-100">Gravity canon tapstrafe</h1>
        <video width="500" height="500" controls preload="none">
          <source
            src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Gravity%20canon%20tap%20strafe.mp4?t=2024-05-20T15%3A43%3A05.672Z"
            //type="video/mp4"
          />
          <track
            //src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
        <h1 className="text-3xl text-neutral-100 py-5">
          Infinite stim with holosprays
        </h1>
        <video width="500" height="500" controls preload="none">
          <source
            src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/infinite%20stim.mp4?t=2024-05-20T15%3A47%3A46.430Z"
            //type="video/mp4"
          />
          <track
            //src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
        <h1 className="text-3xl text-neutral-100">Loot ball yeet</h1>
        <video width="500" height="500" controls preload="none">
          <source
            src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/loot%20ball%20yeet.mp4?t=2024-05-20T17%3A23%3A29.926Z"
            //type="video/mp4"
          />
          <track
            //src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
        <h1 className="text-3xl text-neutral-100">Vantage dash</h1>
        <video width="500" height="500" controls preload="none">
          <source
            src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Vantage%20dash.mp4?t=2024-05-20T17%3A27%3A51.385Z"
            //type="video/mp4"
          />
          <track
            //src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
        <h1 className="text-3xl text-neutral-100">
          Newcastle slope super speed revive
        </h1>
        <video width="500" height="500" controls preload="none">
          <source
            src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/newcastle%20super%20speed%20revive.mp4?t=2024-05-20T17%3A31%3A12.975Z"
            //type="video/mp4"
          />
          <track
            //src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
        <h1 className="text-3xl text-neutral-100">Ult Dashing</h1>
        <video width="500" height="500" controls preload="none">
          <source
            src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/ult%20dashing.mp4?t=2024-05-20T17%3A35%3A47.892Z"
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
