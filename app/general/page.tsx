import React from "react";
import { Separator } from "@/components/ui/separator";
import Header from "../components/header";

const Page = () => {
  return (
    <div className="bg-black h-screen p-2">
      <Header title="General Movement " />
      <Separator />
      <h1 className="text-3xl text-neutral-100 py-5">Fundamentals</h1>
    </div>
  );
};

export default Page;
