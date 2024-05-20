import React from "react";
import { Separator } from "@/components/ui/separator";
import Header from "../components/header";

const Page = () => {
  return (
    <div className="bg-black h-screen p-2">
      <Header title="General Movement" />
      <Separator />
      <div className="flex justify-center items-center text-center">
        <h1 className="text-3xl text-neutral-100  ">Coming Soon</h1>
      </div>
    </div>
  );
};

export default Page;
