"use client";

import Link from "next/link";
import { CiDollar } from "react-icons/ci";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IoBagOutline,
  IoCalendarOutline,
  IoFilterOutline,
  IoSearchSharp,
} from "react-icons/io5";
import { RxFileText } from "react-icons/rx";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useParams } from "next/navigation";
import {
  ChallengeType,
} from "@/lib/redux/slices/challengeSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import {
  useGetStatusQuery,
  useStartChallengeMutation,
} from "@/lib/redux/slices/participantsSlice";

const Page = () => {
  const [createStartChallenge] = useStartChallengeMutation();
  const params = useParams<{ id: string }>(); // Move this to the top
  const user = useSelector((state: RootState) => state.auth.user);
  const [showStarted, setShowStarted] = useState(false);
  const [challenge, setChallenge] = useState<ChallengeType | null>(null);
  // Fetch challenge status
  const { data: statusData } = useGetStatusQuery(
    user ? { userId: user.id, challengeId: params.id } : undefined
  );


 
  useEffect(() => {
    if (statusData) {
      setShowStarted(statusData.status);
    }
  }, []);

  // Fetch challenge data
  useEffect(() => {
    const getChallenge = async () => {
      try {
        const response = await axios.get(
          `https://skills-challenge.onrender.com/challenges/${params.id}`
        );
        setChallenge(response.data.Challenge);
      } catch (error) {
        console.error("Error fetching challenge:", error);
      }
    };

    if (params.id) {
      getChallenge();
    }
  }, [params.id]);


  return (
    <div className="excluded  h-[1000px] overflow-y-auto">
      <div className="excluded flex  flex-row w-full  border-y-[1.5px] items-center  border-[#E4E7EC]  bg-white justify-start px-[20px] h-[62px]">
        <div className="excluded flex  flex-row w-full   items-center   space-x-[20px]  justify-start ">
         
          <Link
            href={"/talent/challenges"}
            className="border-[#E4E7EC] border-[1px] p-[3px] rounded-[5px] bg-white"
          >
            <VscArrowSmallLeft className="text-[21px]" />
          </Link>
          <h2 className="text-[#667185] text-[14px]" >Go Back</h2>
          <h2 className="flex flex-row items-center justify-center text-[14px] space-x-[4px]">
            <span className="text-[#667185]">Create New Challenge</span>
            <span className="text-[#667185]">/</span>
            <span className="text-[#2B71F0]">
              {challenge?.title}
              {/* Challenge Title */}
            </span>
          </h2>
        </div>
        <div className="flex flex-row">
          <div className="flex items-center gap-[7px] bg-white rounded-[5px] ml-8 px-4 py-2">
            <IoSearchSharp className="text-gray-400" />
            <input
              type="text"
              placeholder="Search.."
              className="border-[1.5px] text-gray-400 placeholder:text-[14px] text-[14px] focus:outline-none bg-white  border-none w-full "
            />
          </div>{" "}
          <div className="flex flex-row space-x-[10px] items-center justify-center">
            <IoFilterOutline className="text-gray-400 text-" />
            <p className="text-[14px] text-gray-400">Filter</p>
          </div>
        </div>
      </div>
      <main className="flex flex-row space-x-[30px] px-[30px] py-[30px]">
        <div className="excluded border-[#E4E7EC] text-black w-[612px] border-[1.5px] shadow-sm rounded-[12px] flex flex-col items-center space-y-[30px] py-[32px] px-[24px] bg-white">
          <img
            src="/umuravaBg.webp"
            className="w-[612px] h-[296px] rounded-[6px]"
            alt="photo"
          />

          <div className="excluded flex flex-col w-[545px] space-y-[20px] text-left ">
            <h2 className="text-[20px] text-black font-semibold">
              Project Brief: {challenge?.title}
            </h2>
            <p className="text-[14px]">{challenge?.projectBrief}</p>
            <div className="excluded flex flex-col w-[545px] space-y-[20px] text-left ">
              <h2 className="text-[20px] text-black font-semibold">Tasks</h2>
              <h2 className="text-[20px] text-black font-semibold">
                Product Requirements
              </h2>
              <ul className="text-[14px] list-disc ml-[15px] flex flex-col space-y-[10px]">
                {challenge?.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h2 className="text-[20px] text-black font-semibold">
                Product Design
              </h2>
              <ul className="text-[14px] list-disc ml-[15px] flex flex-col space-y-[10px]">
                {challenge?.product_design.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <h2 className="text-[20px] text-black font-semibold">
                Deliverables
              </h2>
              <ul className="text-[14px] list-disc ml-[15px] flex flex-col space-y-[10px]">
                {challenge?.deliverables.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-[20px] text-black font-semibold">NOTE</h2>
              <ul className="text-[14px] list-disc ml-[15px] flex flex-col space-y-[10px]">
                <li>
                  Find Product Requirements Summary and Features Description for
                  Saway Pay{" "}
                  <span className="text-[#2B71F0] underline"> HERE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="excluded flex flex-col space-y-[30px] w-[401px]">
          <div className="excluded border-[#E4E7EC]  border-[1.5px] shadow-sm rounded-[12px] py-[23px] px-[24px] bg-white">
            <div className="flex flex-col space-y-[15px]">
              <h2 className="text-[20px] text-black font-semibold">
                Key Instructions:
              </h2>
              <p>
                You are free to schedule the clarification call with the team
                via this email:{" "}
                <span className="text-[#2B71F0] underline"> HERE</span>
              </p>
            </div>
            <div className="flex flex-col mt-[30px] space-y-[30px]">
              <div className="flex text-black flex-row space-x-[20px] items-center justify-center    ">
                <button
                  title="."
                  className="bg-blue-200 rounded-full w-[47px] h-[47px]  grid place-items-center "
                >
                  <RxFileText className="text-[#2B71F0] text-[23px]" />
                </button>
                <div className="flex flex-col flex-1 gap-1 ">
                  <p className=" text-[15px] font-semibold">
                    {challenge?.contactEmail}
                  </p>
                  <p className=" text-[13px]">Contact Email</p>
                </div>
              </div>
              <div className="flex text-black flex-row space-x-[20px] items-center justify-center     ">
                <button
                  title="."
                  className="bg-blue-200 rounded-full w-[47px] h-[47px]  grid place-items-center "
                >
                  <IoBagOutline className="text-[#2B71F0] text-[23px]" />
                </button>
                <div className="flex flex-col flex-1 gap-1 ">
                  <p className=" text-[15px] font-semibold">
                    {challenge?.category}
                  </p>
                  <p className=" text-[13px]">Challenge Category</p>
                </div>
              </div>
              <div className="flex text-black flex-row space-x-[20px] items-center justify-center     ">
                <button
                  title="."
                  className="bg-blue-200 rounded-full w-[47px] h-[47px]  grid place-items-center "
                >
                  <IoCalendarOutline className="text-[#2B71F0] text-[23px]" />
                </button>
                <div className="flex flex-col flex-1 gap-1 ">
                  <p className=" text-[15px] font-semibold">
                    {challenge?.duration} Days{" "}
                  </p>
                  <p className=" text-[13px]">Duration</p>
                </div>
              </div>
              <div className="flex text-black flex-row space-x-[20px] items-center justify-center   ">
                <button
                  title="."
                  className="bg-blue-200 rounded-full w-[47px] h-[47px]  grid place-items-center "
                >
                  <CiDollar className="text-[#2B71F0] font-bold text-[23px]" />
                </button>
                <div className="flex flex-col flex-1 gap-1 ">
                  <p className=" text-[15px] font-semibold">
                    $150 - ${challenge?.moneyPrice}
                  </p>
                  <p className=" text-[13px]">Money Prize</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-[50px] space-y-[20px] justify-center">
              <button className="text-[16px] hover:opacity-70 w-full h-[55px] text-white rounded-[8px] bg-[#2B71F0]">
                Submit Your Work
              </button>
              {showStarted ? (
                <button className="text-[16px] w-full h-[55px] hover:opacity-70 text-white rounded-[8px] bg-[#2B71F0] ">
                  started
                </button>
              ) : (
                <button
                  onClick={async () => {
                    setShowStarted(true);
                    await createStartChallenge({
                      userId: user?.id,
                      challengeId: params.id,
                    });
                  }}
                  className="text-[16px] w-full h-[55px] hover:opacity-70 text-white rounded-[8px] bg-[#2B71F0] "
                >
                  Start Challenge
                </button>
              )}
            </div>
          </div>
          <div className="excluded border-[#E4E7EC]  border-[1.5px] pb-[32px] shadow-sm rounded-[12px]  bg-white">
            <div className="flex flex-row items-center space-x-[20px] pt-[32px] px-[24px]">
              <h2 className=" text-[17px] font-semibold">Participants</h2>
              <span className="bg-[#2B71F0] px-[9px] rounded-full text-[14px] text-white">
                250
              </span>
            </div>
            <div className="excluded flex flex-col space-y-[20px]">
              <div className="excluded mt-[20px] pt-[20px] border-[#E4E7EC] px-[24px] border-t-[1.5px] flex gap-[12px]">
                <img
                  src="/profile2.webp"
                  alt="profileImage"
                  className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
                />

                <div className="excluded flex flex-col gap-1">
                  <p className="text-[14px] font-normal leading-5">
                    Hilaire, PM
                  </p>
                  <p className="text-[14px] font-normal leading-5">
                    hilaire@gmail.com
                  </p>
                </div>
              </div>
              <div className="excluded mt-[20px] pt-[20px] border-[#E4E7EC] px-[24px] border-t-[1.5px] flex gap-[12px]">
                <img
                  src="/profile2.webp"
                  alt="profileImage"
                  className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
                />

                <div className="excluded flex flex-col gap-1">
                  <p className="text-[14px] font-normal leading-5">
                    Hilaire, PM
                  </p>
                  <p className="text-[14px] font-normal leading-5">
                    hilaire@gmail.com
                  </p>
                </div>
              </div>
              <div className="excluded mt-[20px] pt-[20px] border-[#E4E7EC] px-[24px] border-t-[1.5px] flex gap-[12px]">
                <img
                  src="/profile2.webp"
                  alt="profileImage"
                  className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
                />

                <div className="excluded flex flex-col gap-1">
                  <p className="text-[14px] font-normal leading-5">
                    Hilaire, PM
                  </p>
                  <p className="text-[14px] font-normal leading-5">
                    hilaire@gmail.com
                  </p>
                </div>
              </div>
              <div className="excluded mt-[20px] pt-[20px] border-[#E4E7EC] px-[24px] border-t-[1.5px] flex gap-[12px]">
                <img
                  src="/profile2.webp"
                  alt="profileImage"
                  className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
                />

                <div className="excluded flex flex-col gap-1">
                  <p className="text-[14px] font-normal leading-5">
                    Hilaire, PM
                  </p>
                  <p className="text-[14px] font-normal leading-5">
                    hilaire@gmail.com
                  </p>
                </div>
              </div>
              <div className="excluded mt-[20px] pt-[20px] border-[#E4E7EC] px-[24px] border-t-[1.5px] flex gap-[12px]">
                <img
                  src="/profile2.webp"
                  alt="profileImage"
                  className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
                />

                <div className="excluded flex flex-col gap-1">
                  <p className="text-[14px] font-normal leading-5">
                    Hilaire, PM
                  </p>
                  <p className="text-[14px] font-normal leading-5">
                    hilaire@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <button className="text-[16px] mt-[50px] w-[352px] border-[#E4E7EC] border-t-[1.5px] mx-[24px] h-[55px] text-white rounded-[8px] bg-[#2B71F0] ">
              View All
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
