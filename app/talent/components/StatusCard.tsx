import React from "react";
import { LuNotebookText } from "react-icons/lu";

interface StatusCardProps {
  label: string;
  number: number;
}
const StatusCard = ({ label, number }: StatusCardProps) => {
  return (
    <div className="flex bg-white items-center rounded-lg w-full h-[110px] px-[15px] border">
      <div className="flex relative justify-between w-full items-center h-[45px]">
        <div className="flex flex-col rounded-border pl-4">
          <div>
            <p className="text-[14px] text-gray-700">{label}</p>
          </div>
          <div>
            <p className="font-bold text-xl text-gray-600">{number}</p>
          </div>
        </div>
        <div className="flex justify-center text-blue-600 items-center rounded-full h-[48px] w-[48px] bg-[#D0E0FC]">
          <LuNotebookText />
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
