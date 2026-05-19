import React from "react";
import { NavMenu } from "./navigation";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import ShoppingCartComponent from "./shoppingCart";
const Header = () => {
  return (
    <div className="shadow-md sticky top-0 z-10 flex flex-row bg-brand-brown p-1 text-primary-foreground">
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

      <ShoppingCartComponent />
    </div>
  );
};

export default Header;
