"use server";

import React from "react";
import Header from "../components/header";
import { Separator } from "@/components/ui/separator";
import VideoPlayer from "../components/videoplayer";
import TechTitle from "../components/techTitle";
import RemovedTechComponent from "../components/removedTech/removedTech";
import Footer from "../components/footer";
//import Layout from "../removedtech/layout";

const RemovedTech = () => {
  return (
    <div className="bg-slate-800 bg-cover bg-center h-full">
      <Header title="Removed tech" />
      <Separator />
      <div className="justify-center align-middle items-center flex-col flex ">
        <RemovedTechComponent
          id="Vantage Bounce"
          Name="Vantage Bounce"
          VideoLink="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Vantage%20bounce.mp4?t=2024-05-20T15%3A31%3A16.549Z"
        />
        <RemovedTechComponent
          id="Punch boosting"
          Name="Punch boosting"
          VideoLink="
        https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Punch%20boosting.mp4?t=2024-05-20T15%3A32%3A31.035Z"
        />

        <RemovedTechComponent
          id="Gravity canon tapstrafe"
          Name="Gravity canon tapstrafe"
          VideoLink="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Gravity%20canon%20tap%20strafe.mp4?t=2024-05-20T15%3A43%3A05.672Z"
        />

        <RemovedTechComponent
          id="Infinite stim with holosprays"
          Name="Infinite stim with holosprays"
          VideoLink=" https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/infinite%20stim.mp4?t=2024-05-20T15%3A47%3A46.430Z"
        />

        <RemovedTechComponent
          id="Loot ball yeet"
          Name="Loot ball yeet"
          VideoLink="
        https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/loot%20ball%20yeet.mp4?t=2024-05-20T17%3A23%3A29.926Z"
        />

        <RemovedTechComponent
          id="Vantage dash"
          Name="Vantage dash"
          VideoLink="
        https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/Vantage%20dash.mp4?t=2024-05-20T17%3A27%3A51.385Z"
        />

        <RemovedTechComponent
          id=" Newcastle slope super speed revive"
          Name="Newcastle slope super speed revive"
          VideoLink="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/newcastle%20super%20speed%20revive.mp4?t=2024-05-20T17%3A31%3A12.975Z"
        />

        <RemovedTechComponent
          id="Ult Dashing"
          Name="Ult Dashing"
          VideoLink="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/ult%20dashing.mp4?t=2024-05-20T17%3A35%3A47.892Z"
        />

        <RemovedTechComponent
          id="No mo wallbounce"
          Name="No mo wallbounce"
          VideoLink="https://hlgnifpdoxwdaezhvlru.supabase.co/storage/v1/object/public/Apex%20legends%20clips/Removed%20tech/nomowallbounce.mp4?t=2024-08-10T08%3A44%3A23.480Z"
        />
      </div>
      <Footer />
    </div>
  );
};

export default RemovedTech;
