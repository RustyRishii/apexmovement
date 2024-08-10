"use server";
import React from "react";
import TechTitle from "../techTitle";
import VideoPlayer from "../videoplayer";
import { Separator } from "@/components/ui/separator";

function RemovedTechComponent({
  Name,
  VideoLink,
  id,
}: {
  Name: string;
  VideoLink: string;
  id: string;
}) {
  return (
    <div id={id} className="p-2">
      <TechTitle Name={Name} />
      <VideoPlayer src={VideoLink} />
      <Separator className="my-1" />
    </div>
  );
}

export default RemovedTechComponent;
