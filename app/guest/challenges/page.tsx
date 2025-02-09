"use client";
import ChallengeCard from "@/app/components/ChallengeCard";
import ChallengeCard2 from "@/app/components/ChallengeCard2";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import { useGetChallengesQuery } from "@/lib/redux/slices/challengeSlice";
import Link from "next/link";
import React from "react";
import { VscArrowSmallLeft } from "react-icons/vsc";

const page = () => {
  const { data } = useGetChallengesQuery();
  if (data) {
    console.log("data is found => ", data);
  }
  return (
    <main className="">
      <NavBar />
      <main className="bg-[#f9fafb]">
        <div className="flex  flex-row items-center space-x-[20px] justify-start lg:px-[100px] lg:pt-[100px] max-md:pt-[30px] max-md:pl-[30px]">
          <Link
            href={"/"}
            className="border-[#E4E7EC] border-[1px] p-[3px] rounded-[5px] bg-white"
          >
            <VscArrowSmallLeft className="text-[21px]" />
          </Link>
          <h2 className="text-[#667185] text-[14px]">Go Back</h2>
          <h2 className="flex flex-row items-center justify-center text-[14px] space-x-[4px]">
            <span className="text-[#667185]">/</span>
            <span className="text-[#2B71F0]">Challenges & Hackathons</span>
          </h2>
        </div>
        <div className="challengeCard grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-[30px]  py-[20px] gap-[20px] px-[40px]  place-items-center">
          {data?.map((challenge, index) => (
            <ChallengeCard2 key={challenge._id} challenge={challenge} />
          ))}
        </div>
      </main>
      <Footer />
    </main>
  );
};

export default page;
