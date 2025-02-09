import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";

interface ButtonProps {
  textValue: string;
  allCount: number;
  onClick: () => void;
  isCurrent: string;
}

const Button = ({ textValue, allCount, onClick, isCurrent }: ButtonProps) => {
  const isCurrent1 = isCurrent === textValue;
  return (
    <button
      onClick={onClick}
      className={`  ${
        isCurrent1 ? "bg-blue-200 " : "bg-gray-100"
      } hover:bg-blue-200 border-[1.5px] hover:border-slate-50 border-[#E4E7EC] py-3 flex gap-[7px] transition-all ease-in-out duration-150 items-center justify-between  px-[15px] rounded-[6px] group`}
    >
      <IoDocumentTextOutline
        className={`${
          isCurrent1 ? "text-[#2B71F0] " : "text-gray-400"
        } text-[15px] group-hover:text-[#2B71F0] `}
      />

      <p className="text-[12px] group-hover:text-[#101928] text-[#344054]">
        {textValue} Completed
      </p>
      <div
        className={`${
          isCurrent1 ? "bg-[#2B71F0]" : "bg-gray-300"
        }  group-hover:bg-[#2B71F0] px-[13px] rounded-full`}
      >
        <span
          className={`${
            isCurrent1 && "text-white"
          } text-[#344054] group-hover:text-white text-[12px] p-[0px]`}
        >
          {allCount}
        </span>
      </div>
    </button>
  );
};

export default Button;
