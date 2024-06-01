"use client";

import React from "react";
import Header from "../components/header";
import { Separator } from "@/components/ui/separator";
import VideoPlayer from "../components/videoplayer";
//import Layout from "../removedtech/layout";

const RemovedTech = () => {
  return (
    <div className="bg-neutral-900 bg-no-repeat bg-cover bg-center h-full">
      <Header title="Removed tech" />
      <Separator />
      <div className="p-2">
        <h1 className="text-3xl text-neutral-100">Vantage Bounce</h1>
        <VideoPlayer src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Vantage%20bounce.mp4?t=2024-05-20T15%3A31%3A16.549Z" />
        <Separator style={{ marginTop: 10, marginBottom: 10 }} />
        <h1 className="text-3xl text-neutral-100 ">Punch Boosting</h1>
        <VideoPlayer src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Punch%20boosting.mp4?t=2024-05-20T15%3A32%3A31.035Z" />
        <Separator style={{ marginTop: 10, marginBottom: 10 }} />
        <h1 className="text-3xl text-neutral-100">Gravity canon tapstrafe</h1>
        <VideoPlayer src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Gravity%20canon%20tap%20strafe.mp4?t=2024-05-20T15%3A43%3A05.672Z" />
        <Separator style={{ marginTop: 10, marginBottom: 10 }} />
        <h1 className="text-3xl text-neutral-100 ">
          Infinite stim with holosprays
        </h1>
        <VideoPlayer src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/infinite%20stim.mp4?t=2024-05-20T15%3A47%3A46.430Z" />
        <Separator style={{ marginTop: 10, marginBottom: 10 }} />
        <h1 className="text-3xl text-neutral-100">Loot ball yeet</h1>
        <VideoPlayer src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/loot%20ball%20yeet.mp4?t=2024-05-20T17%3A23%3A29.926Z" />
        <Separator style={{ marginTop: 10, marginBottom: 10 }} />
        <h1 className="text-3xl text-neutral-100">Vantage dash</h1>
        <VideoPlayer src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Vantage%20dash.mp4?t=2024-05-20T17%3A27%3A51.385Z" />
        <Separator style={{ marginTop: 10, marginBottom: 10 }} />
        <h1 className="text-3xl text-neutral-100">
          Newcastle slope super speed revive
        </h1>
        <VideoPlayer src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/newcastle%20super%20speed%20revive.mp4?t=2024-05-20T17%3A31%3A12.975Z" />
        <Separator style={{ marginTop: 10, marginBottom: 10 }} />
        <h1 className="text-3xl text-neutral-100">Ult Dashing</h1>
        <VideoPlayer src="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/ult%20dashing.mp4?t=2024-05-20T17%3A35%3A47.892Z" />
      </div>
    </div>
  );
};

export default RemovedTech;
