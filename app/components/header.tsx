import React from "react";
import Link from "next/link";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex-row flex justify-between px-5">
      <Link className="text-3xl " href={"/"}>
        🏠
      </Link>
      <h1 className="text-3xl text-neutral-100 justify-center items-center  flex">
        {title}
      </h1>
      <Link
        className="text-3xl text-neutral-100"
        href="https://www.paypal.com/paypalme/rustyrishi"
        target="_blank"
      >
        ☕
      </Link>
    </div>
  );
};

export default Header;
