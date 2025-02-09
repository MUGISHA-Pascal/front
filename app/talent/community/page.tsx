import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import StatusCard from "../components/StatusCard";
import { FaAngleRight } from "react-icons/fa6";
import ChallengeCard from "@/app/components/ChallengeCard";

const Community = () => {
  return ( 
    <div className=" p-[36px] gap-[16px]">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-2xl font-bold">Welcome back Hilaire,</p>
          <p>
            Build work experience through skill challenges
          </p>
        </div>
        <div>
          <button className="py-[10px] flex h-[55px] flex-row items-center gap-2 px-[18px] bg-[#2B71F0] text-white rounded-lg">
            <MdOutlineRemoveRedEye className="w-[24px] h-[24px]" />
            View Profile
          </button>
        </div>
      </div>
      <div className="py-[16px] flex w-full items-center">
        <div className="flex gap-[20px] w-full flex-row">
          <StatusCard label="Completed Challenges" number={5} />
          <StatusCard label="Completed Challenges" number={5} />
          <StatusCard label="Completed Challenges" number={5} />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div>
          <p className="font-bold">Recent Challenges</p>
        </div>
        <div className="text-blue-600 flex flex-row items-center gap-2">
          <p>See All</p>
          <FaAngleRight />
        </div>
      </div>
      <div className="flex flex-row gap-[20px]">
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </div>
    </div>
  );
};

export default Community;
