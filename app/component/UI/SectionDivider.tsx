import React from "react";
type props = {
  title: string;
};
const SectionDivider = ({ title }: props) => {
  return (
    <div className="m-5 flex w-full relative mt-5">
      <hr className="my-4 border-gray-900 w-full dark:border-gray-700" />
      <p className=" absolute bg-white z-10 left-[45%] px-4 top-0.5 italic font-semibold">
        {title}
      </p>
    </div>
  );
};

export default SectionDivider;
