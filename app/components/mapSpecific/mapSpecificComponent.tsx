"use client";
import React from "react";
import TechTitle from "../techTitle";
import VideoPlayer from "../videoplayer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function MapSpecificComponent({
  Name,
  VideoLink,
  TutorialLink,
}: {
  Name: string;
  VideoLink: string;
  TutorialLink: string;
}) {
  return (
    <div className="px-2 justify-center align-middle  flex ">
      <div className="text-center">
        <TechTitle Name={Name} />
        <VideoPlayer src={VideoLink} />
        <Button className="bg-black my-5">
          <Link href={TutorialLink} target="_blank">
            Tutorial
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default MapSpecificComponent;
