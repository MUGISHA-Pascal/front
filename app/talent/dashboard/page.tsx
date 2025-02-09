"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import StatusCard from "../components/StatusCard";
import { FaAngleRight } from "react-icons/fa6";
import ChallengeCard2 from "@/app/components/ChallengeCard2";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/redux/store";
import { useGetChallengesQuery } from "@/lib/redux/slices/challengeSlice";
import Link from "next/link";
import { useGetChallengesByUserWithStatusQuery } from "@/lib/redux/slices/participantsSlice";
import { FaChevronRight } from "react-icons/fa";
const Dashboard = () => {
  const [openCount, setOpenCount] = useState(0);
  const [ongoingCount, setOngoingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const user = useSelector((state: RootState) => state.auth.user);
  const { data: openChallenges } = useGetChallengesByUserWithStatusQuery({
    userId: user?.id,
    status: "open",
  });
  const { data: ongoingChallenges } = useGetChallengesByUserWithStatusQuery({
    userId: user?.id,
    status: "ongoing",
  });
  const { data: completedChallenges } = useGetChallengesByUserWithStatusQuery({
    userId: user?.id,
    status: "completed",
  });
  useEffect(() => {
    if (openChallenges?.length) setOpenCount(openChallenges.length);
    if (ongoingChallenges?.length) setOngoingCount(ongoingChallenges.length);
    if (completedChallenges?.length)
      setCompletedCount(completedChallenges.length);
  }, [openChallenges, ongoingChallenges, completedChallenges]);
  const router = useRouter();

  useEffect(() => {
    if (user?.roles.toString() !== "talent") {
      router.push("/login");
    }
    console.log(user);
  }, [user, router]);

  const { data } = useGetChallengesQuery();

  console.log("data is found => ", data);

  return (
    <div className="p-[36px] excluded gap-[16px] bg-[#F9FAFB]">
      <div className="flex flex-row excluded justify-between">
        <div className="excludedDashBoard h-[56px] flex flex-col gap-[4px] mb-12 mt-[10px]">
          <h1 className="font-semibold text-[24px] leading-[28px]">
            Welcome back, {user?.username}
          </h1>
          <p className="text-[16px] leading-[23px] font-normal text-[#475367]">
            Build Work Experience through Skills Challenges
          </p>
        </div>
        <div className="excluded">
          <button className="py-[10px] flex h-[55px] flex-row items-center gap-2 px-[18px] bg-[#2B71F0] text-white rounded-lg">
            <MdOutlineRemoveRedEye className="w-[24px] h-[24px]" />
            View Profile
          </button>
        </div>
      </div>
      <div className="py-[16px] excluded flex w-full items-center">
        <div className="flex excluded gap-[20px] w-full flex-row">
          <StatusCard label="Completed Challenges" number={completedCount} />
          <StatusCard label="Open Challenges" number={openCount} />
          <StatusCard label="Ongoing Challenges" number={ongoingCount} />
        </div>
      </div>
      <div className="excludedDashBoard flex items-center justify-between mb-4">
        <h1 className="text-[18px] leading-[26px] font-semibold text-[#101928]">
          Recent Challenges
        </h1>
        {/* <button className="cursor-pointer" > */}
        <Link href="/admin/challenges" className="z-50">
          <button className="text-[#2B71F0] text-[13px] font-normal flex items-center gap-2 h-[14px]">
            <span>See all </span> <FaChevronRight />
          </button>
        </Link>
        {/* </button> */}
      </div>
      <div className="grid excluded grid-cols-3 gap-[20px]">
        {data && data?.length > 0 ? (
          data
            ?.slice(0, 3)
            .map((challenge) => (
              <ChallengeCard2 key={challenge._id} challenge={challenge} />
            ))
        ) : (
          <div>
            <h1>We have any Recents challenges currently</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
