import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <>
      <Separator />
      <div className="bg-slate-800 flex flex-col items-center justify-center align-middle text-white h-56">
        <p className=" text-lg">Built by </p>
        <Link
          className="text-xl transform hover:scale-110 transition-transform "
          href={"https://linktr.ee/rustyrishi"}
          target="_blank"
        >
          @RustyRishi
        </Link>
      </div>
    </>
  );
}
// bg-slate-800 flex flex-col items-center justify-center align-middle text-white h-28

export default Footer;
