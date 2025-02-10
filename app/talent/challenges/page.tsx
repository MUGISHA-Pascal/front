"use client";

import React, { useEffect, useState } from "react";
import { FiFileText } from "react-icons/fi";
import SmallStatusCard from "../components/SmallStatusCard";
import ChallengeCard2 from "@/app/components/ChallengeCard2";
import {
  ChallengeType,
  useGetChallengesQuery,
} from "@/lib/redux/slices/challengeSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { useGetChallengesByUserWithStatusQuery } from "@/lib/redux/slices/participantsSlice";

const Challenges = () => {
  const [openCount, setOpenCount] = useState(0);
  const [allCount, setAllCount] = useState(0);
  const [ongoingCount, setOngoingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isCurrent, setIsCurrent] = useState("");

  const itemsPerPage = 6;

  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  const [filteredChallenges, setFilteredChallenges] = useState<ChallengeType[]>(
    []
  );
  const { query, filterText } = useSelector((state: RootState) => state.search);

  const { data: allChallenges } = useGetChallengesQuery();
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

  const [currentData, setCurrentData] = useState<ChallengeType[]>([]);

  const [currentFilter, setCurrentFilter] = useState("All");

  useEffect(() => {
    switch (currentFilter) {
      case "Open":
        setCurrentData(openChallenges || []);
        break;
      case "Ongoing":
        setCurrentData(ongoingChallenges || []);
        break;
      case "Completed":
        setCurrentData(completedChallenges || []);
        break;
      default:
        setCurrentData(allChallenges || []);
    }
  }, [
    currentFilter,
    allChallenges,
    openChallenges,
    ongoingChallenges,
    completedChallenges,
  ]);

  useEffect(() => {
    const currentUser =  localStorage.getItem('user') 
     console.log(currentUser);
  }, [router]);

  useEffect(() => {
    if (allChallenges?.length) setAllCount(allChallenges.length);
    if (openChallenges?.length) setOpenCount(openChallenges.length);
    if (ongoingChallenges?.length) setOngoingCount(ongoingChallenges.length);
    if (completedChallenges?.length)
      setCompletedCount(completedChallenges.length);
  }, [allChallenges, openChallenges, ongoingChallenges, completedChallenges]);

  useEffect(() => {
    switch (currentFilter) {
      case "Open":
        setCurrentData(openChallenges || []);
        break;
      case "Ongoing":
        setCurrentData(ongoingChallenges || []);
        break;
      case "Completed":
        setCurrentData(completedChallenges || []);
        break;
      default:
        setCurrentData(allChallenges || []);
        setCurrentPage(1);
    }
  }, [allChallenges, openChallenges, ongoingChallenges, completedChallenges]);
  useEffect(() => {
    if (currentData?.length) {
      const filtered = currentData.filter((challenge) =>
        filterText == "category"
          ? challenge.category.toLowerCase().includes(query.toLowerCase())
          : filterText == "skills"
          ? challenge.skills_needed?.some((skill) =>
              skill.toLowerCase().includes(query.toLowerCase())
            )
          : filterText == "seniority_level"
          ? challenge.seniority_level
              .toLowerCase()
              .includes(query.toLowerCase())
          : filterText == "contactEmail"
          ? challenge.contactEmail.toLowerCase().includes(query.toLowerCase())
          : filterText == "moneyPrize"
          ? challenge.moneyPrice.toString().includes(query)
          : filterText == "requirements"
          ? challenge?.requirements?.some((requirement) =>
              requirement.toLowerCase().includes(query.toLowerCase())
            )
          : filterText == "status"
          ? challenge.status?.toLowerCase().includes(query.toLowerCase())
          : challenge.title.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredChallenges(filtered);
      console.log(filtered, query, filterText);
    }
  }, [allChallenges, query, filterText]);

  // const totalPages = Math.ceil(filteredChallenges.length / itemsPerPage);
  const totalPages = Math.ceil(
    (filteredChallenges.length > 0
      ? filteredChallenges.length
      : currentData.length) / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  let paginatedData = currentData?.slice(startIndex, startIndex + itemsPerPage);

  if (filteredChallenges?.length > 0) {
    paginatedData = filteredChallenges?.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  }
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleButtonClick = (valueText: string) => {
    setCurrentFilter(valueText);
    setIsCurrent(valueText);
  };
  return (
    <div className="excluded h-[1200px]  p-[36px] pt-0 overflow-y-auto gap-[16px] bg-[#F9FAFB]">
      <div className="excluded flex flex-row justify-between">
        <div className="mb-[30px]">
          <h1 className="text-[24px] font-bold mt-[40px]">Challenges</h1>
          <p className="text-[14px] text-[#667185]">
            Join a challenge or a hackathon to gain more valuable work
            experience
          </p>
        </div>
      </div>
      <div className="py-[16px] excluded flex w-full items-center">
        <div className="flex excluded justify-start gap-[10px] border-b pb-5 w-full">
          <SmallStatusCard
            isCurrent={isCurrent}
            count={allCount}
            icon={<FiFileText />}
            text="All"
            onClick={() => handleButtonClick("All")}
          />
          <SmallStatusCard
            isCurrent={isCurrent}
            count={completedCount}
            icon={<FiFileText />}
            text="Completed"
            onClick={() => handleButtonClick("Completed")}
          />
          <SmallStatusCard
            isCurrent={isCurrent}
            count={openCount}
            icon={<FiFileText />}
            text="Open"
            onClick={() => handleButtonClick("Open")}
          />
          <SmallStatusCard
            isCurrent={isCurrent}
            count={ongoingCount}
            icon={<FiFileText />}
            text="Ongoing"
            onClick={() => handleButtonClick("Ongoing")}
          />
        </div>
      </div>

      <div className="flex excluded flex-wrap gap-[20px]">
        {paginatedData.length > 0 ? (
          paginatedData.map((challenge) => (
            <ChallengeCard2 key={challenge._id} challenge={challenge} />
          ))
        ) : (
          <div className="w-full flex flex-col space-y-[20px] justify-center bg-white p-[30px] rounded-[20px] items-center">
            <img
              src="/notEnough.webp"
              alt="not enough"
              className="w-[300px] h-auto rounded-[20px]"
            />
          </div>
        )}
      </div>
      <div className="flex excluded justify-between py-10 px-10">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          // className={`px-3 py-2 text-sm w-[96px] h-[36px] rounded-md ${
          //   currentPage === 1
          //     ? "bg-gray-300 text-gray-500"
          //     : "bg-white text-[#98A2B3] active:bg-[#2B71F0] active:text-white"
          // }`}
          className="text-[#98A2B3] bg-white w-[95px] text-[14px] h-[36px] px-[12px] grid place-items-center  border-gray-300 shadow-sm hover:bg-[#2B71F0] hover:text-white transition-all ease-in-out duration-300 rounded-[5px]"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          // className={`px-3 py-2 text-sm w-[96px] h-[36px] rounded-md ${
          //   currentPage === totalPages
          //     ? "bg-gray-300 text-gray-500"
          //     : "bg-white text-[#98A2B3] active:bg-[#2B71F0] active:text-white"
          // }`}
          className="text-[#98A2B3] w-[95px] bg-white text-[14px] h-[36px] px-[12px] grid place-items-center  border-gray-300 shadow-sm hover:bg-[#2B71F0] hover:text-white transition-all ease-in-out duration-300 rounded-[5px]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Challenges;
