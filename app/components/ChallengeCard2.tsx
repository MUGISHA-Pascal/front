"use client";
import { RoleEnum } from "@/lib/redux/slices/authSlice";
import { RootState } from "@/lib/redux/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

interface Challenge {
  _id?: string;
  title: string;
  deadline: Date;
  duration: number;
  moneyPrice: number;
  contactEmail: string;
  projectBrief: string;
  requirements: string[];
  product_design: string[];
  deliverables: string[];
  category: string;
  status: string;
  createdAt?: string;
  seniority_level:string;
  skills_needed:string[];
  startingAt:Date
}
const ChallengeCard2: React.FC<{ challenge: Challenge }> = ({ challenge }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="challengeCard flex flex-col border-[2px] bg-white items-start pt-[10px] rounded-[8px] w-[320px] h-auto border-[#E4E7EC]">
      <div className="excluded relative px-3">
        <img
          src="/umuravaBg.webp"
          draggable={false}
          alt="umurava_bg"
          className="w-[300px] object-cover rounded-[8px] h-[160px]"
        />
        <span className={` ${challenge?.status == "completed" ? "bg-red-500 px-[7px] w-[80px]" : challenge.status =="open" ? "bg-[#0f973d] w-[52px]" : "bg-yellow-500 w-[60px]" } text-white absolute w-[52px] grid place-items-center h-[22px] rounded-full top-[8px] text-[12px] right-[17px]`}>
          {challenge.status}
        </span>
      </div>
      <h2 className="text-[#101928] mt-[18px] mb-3 text-[18px] font-semibold px-3">
        {challenge.title}
      </h2>
      <h2 className="text-[#25272B] text-[12px] font-semibold px-3">
        Skills Needed:
      </h2>
      <div className="excluded flex flex-wrap mt-2 gap-[8px] items-start justify-start mb-3 px-3">
       {
        challenge.skills_needed.map((skill, index) => (
          <button
           key={index}
           className="text-[#2B71F0] text-[11px] px-[6px] py-[4px] rounded-[10px] border-[#2B71F0] border-[1px]">
           {skill}
        </button>
       
        ))
       }
      </div>

      <div className="excluded space-x-[4px] mt-[8px] items-start justify-start px-3">
        <h2 className="text-[#25272B] text-[12px] font-semibold">
          Seniority Level:
        </h2>
        <h1 className="text-[#475367] text-[12px]">
          {challenge.seniority_level}
        </h1>
      </div>
      <div className="excluded flex space-x-[8px] mt-[8px] w-full items-start px-3 flex-row justify-start">
        <h2 className="text-[#25272B] text-[12px] font-semibold">Timeline:</h2>
        <h1 className="text-[#475367] text-[12px]">
          {challenge.duration} Days
        </h1>
      </div>
      <div className="excluded flex-1 w-full justify-left pl-[11px] border-t-[2px] flex items-center border-[#E4E7EC] my-[10px]">
        <Link
          href={`${
            user?.roles.includes(RoleEnum.TALENT)
              ? "/talent/challenges/" + challenge._id
              : "/admin/challenges/" + challenge._id
          }`}
          className="bg-[#2B71F0] text-[12px] font-semibold text-white py-2 text-center mt-2 w-[130px] rounded-[8px]"
        >
          View Challenge
        </Link>
      </div>
    </div>
  );
};

export default ChallengeCard2;
