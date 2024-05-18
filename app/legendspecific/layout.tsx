import React from "react";

const LegendLayout = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <p>This is a layout component</p>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <p>Component</p>
      </div>
    </div>
  );
};

export default LegendLayout;
