import React from "react";

function TechTitle({ Name }: { Name: string }) {
  return <h1 className="text-3xl text-neutral-100 py-1">{Name}</h1>;
}

export default TechTitle;
