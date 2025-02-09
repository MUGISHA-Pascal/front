import React from "react";

interface SmallStatusCardProps {
  icon: React.JSX.Element;
  text: string;
  count: number;
  isCurrent: string;
  onClick: () => void;
}
const SmallStatusCard = ({
  icon,
  text,
  count,
  isCurrent,
  onClick,
}: SmallStatusCardProps) => {
  const isCurrent1 = isCurrent === text;

  return (
    <button
      className={`  ${
        isCurrent1 ? "bg-blue-200 " : "bg-gray-100"
      } hover:bg-blue-200 border-[1.5px] hover:border-slate-50 border-[#E4E7EC] py-3 flex gap-[7px] transition-all ease-in-out duration-150 items-center justify-between  px-[15px] rounded-[6px] group`}
      onClick={onClick}
    >
      <div
        className={`${
          isCurrent1 ? "text-[#2B71F0] " : "text-gray-400"
        } text-[15px] group-hover:text-[#2B71F0] `}
      >
        {icon}
      </div>
      <p className="text-[14px] group-hover:text-[#101928] text-[#344054]">
        {text} Completed
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
          {count}
        </span>
      </div>
    </button>
  );
};

export default SmallStatusCard;
