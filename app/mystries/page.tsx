import React from "react";
import Header from "../components/header";
import { Separator } from "@/components/ui/separator";

const Mystries = () => {
  return (
    <div className="bg-black h-screen">
      <Header title="Misc & Mystries" />
      <Separator />
      <div className="p-2">
        <h1 className="text-3xl text-neutral-100">Boop Glitches</h1>
        <iframe
          src="https://www.redditmedia.com/r/Apexrollouts/comments/p1b60l/interesting_grapple/?ref_source=embed&ref=share&embed=true"
          style={{ height: 500, width: 500 }}
          frameBorder="0"
          allowFullScreen
          title="Reddit Video"
        ></iframe>
      </div>
    </div>
  );
};

export default Mystries;
