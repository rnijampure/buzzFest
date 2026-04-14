import React from "react";
import { NavMenu } from "./navigation";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";

const Header = () => {
  return (
    <div className="shadow-md sticky top-0 text-white flex flex-row  bg-[#75372A] p-1 z-10">
      <span className="inline justify-self-start">
        <CloudinaryImage
          src="logo.new_ndfwmw"
          width="85"
          height="85"
          className="rounded-3xl object-cover  "
          alt="Image with blur placeholder"
        />
      </span>
      <NavMenu />
    </div>
  );
};

export default Header;
