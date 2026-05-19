//app\acomponent\UI\section-divider\SectionDivider.tsx
import React from "react";

type Props = {
  title: string;
  align?: "left" | "center" | "right";
};
const SectionDivider = ({ title, align = "center" }: Props) => {
  const alignment = {
    left: "left-4",
    center: "left-1/2 -translate-x-1/2",
    right: "right-4",
  };

  return (
    <div className="relative w-full my-6">
      {/* Line (FIXED) */}
      <div className="w-full h-px bg-gray-300" />

      {/* Text */}
      {title && (
        <span
          className={`absolute -top-3 px-4 bg-white italic font-semibold whitespace-nowrap ${alignment[align]}`}
        >
          {title}
        </span>
      )}
    </div>
  );
};

export default SectionDivider;
