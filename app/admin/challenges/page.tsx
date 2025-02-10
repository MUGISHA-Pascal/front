"use client";
import React, { useEffect, useState } from "react";
import {
  ChallengeType,
  useGetChallengeByStatusQuery,
  useGetChallengesQuery,
} from "@/lib/redux/slices/challengeSlice";
import Link from "next/link";
import ChallengeCard2 from "@/app/components/ChallengeCard2";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";
import Button from "@/app/components/challengs/Button";

const Challenges = () => {
  const [openCount, setOpenCount] = useState(0);
  const [allCount, setAllCount] = useState(0);
  const [ongoingCount, setOngoingCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const { data: dataForOpen } = useGetChallengeByStatusQuery("open");
  const { data: dataForOngoing } = useGetChallengeByStatusQuery("ongoing");
  const { data: dataForComplete } = useGetChallengeByStatusQuery("completed");
  const [isCurrent, setIsCurrent] = useState("");

  const { data } = useGetChallengesQuery();
  const { query, filterText } = useSelector((state: RootState) => state.search);

  const [currentFilter, setCurrentFilter] = useState("All");
  const [filteredChallenges, setFilteredChallenges] = useState<ChallengeType[]>(
    []
  );

  useEffect(() => {
    if (data?.length) setAllCount(data.length);
    if (dataForOpen?.length) setOpenCount(dataForOpen.length);
    if (dataForOngoing?.length) setOngoingCount(dataForOngoing.length);
    if (dataForComplete?.length) setCompletedCount(dataForComplete.length);
  }, [dataForComplete, dataForOngoing, dataForOpen]);

  if(data) {
    console.log("data are =>",data)
  }
  useEffect(() => {
    if (data) {
      const filtered = data.filter((challenge) =>
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
  }, [data, query, filterText]);
  const [CurrentPage, setCurrent] = useState(1);

  const totalNumberElements = 6;
  const lastIndex = CurrentPage * totalNumberElements;
  const firstIndex = lastIndex - totalNumberElements;
  let paginatedchallenges = data?.slice(firstIndex, lastIndex);
  let totalNumberPages = 0;
  if (filteredChallenges.length > 0) {
    paginatedchallenges = filteredChallenges?.slice(firstIndex, lastIndex);
    totalNumberPages = Math.ceil(
      filteredChallenges?.length / totalNumberElements
    );
  } else if(data) {
    paginatedchallenges = data?.slice(firstIndex, lastIndex);
    totalNumberPages = Math.ceil(data?.length / totalNumberElements
    )
  }
  const handleNext = () => {
    if (CurrentPage < totalNumberPages) {
      setCurrent(CurrentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (CurrentPage > 1) {
      setCurrent(CurrentPage - 1);
    }
  };

  useEffect(() => {
    switch (currentFilter) {
      case "Open":
        setFilteredChallenges(dataForOpen || []);
        break;
      case "Ongoing":
        setFilteredChallenges(dataForOngoing || []);
        break;
      case "Completed":
        setFilteredChallenges(dataForComplete || []);
        break;
      default:
        setFilteredChallenges(data || []);
    }
  }, [currentFilter, data, dataForOpen, dataForOngoing, dataForComplete]);

  const handleButtonClick = (valueText: string) => {
    setCurrentFilter(valueText);
    setIsCurrent(valueText);
  };
  return (
    <main className="px-8">
      <div className="mb-[30px]">
        {" "}
        <h1 className="text-[24px] font-bold mt-[40px]">Challenges</h1>
        <p className="text-[14px] text-[#667185]">
          Join Challenges or Hackathon to valuable work experience
        </p>
      </div>
      <div className="flex border-b-[0.5px] border-gray-200 justify-between mb-4">
        <div className="flex space-x-[20px] items-center w-full h-[76px]">
          <div className="flex gap-4">
            <Button
              textValue="All"
              allCount={allCount}
              onClick={() => handleButtonClick("All")}
              isCurrent={isCurrent}
            />
            <Button
              textValue="Completed"
              allCount={completedCount}
              onClick={() => handleButtonClick("Completed")}
              isCurrent={isCurrent}
            />
            <Button
              textValue="Open"
              allCount={openCount}
              onClick={() => handleButtonClick("Open")}
              isCurrent={isCurrent}
            />
            <Button
              textValue="Ongoing"
              allCount={ongoingCount}
              onClick={() => handleButtonClick("Ongoing")}
              isCurrent={isCurrent}
            />
          </div>
          <Link
            href={"challenges/create"}
            className="bg-[#2B71F0] text-white hover:opacity-80 transition-all duration-300  px-[18px] py-[16px] rounded"
          >
            <p className="text-[12px]">+ Create New Challenge</p>
          </Link>
        </div>
      </div>
      <div className="excluded grid pb-[40px] border-t-[0.5px] border-gray-200 pt-[7px] place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedchallenges && paginatedchallenges.length > 0 ? (
          paginatedchallenges?.map((challenge, index) => (
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
      <div className="flex px-[40px] pr-[100px] flex-row ml-[30px] mb-[70px]  w-full space-x-[10px] font-bold text-white justify-between max-md:ml-[70px] items-center text-[10px]">
        <button
          className="text-[#98A2B3] bg-white w-[95px] text-[14px] h-[36px] px-[12px] grid place-items-center  border-gray-300 shadow-sm hover:bg-[#2B71F0] hover:text-white transition-all ease-in-out duration-300 rounded-[5px]"
          onClick={handlePrevious}
        >
          Previous
        </button>
        {/* <div className="flex flex-row space-x-[10px] items-center justify-center"> */}
        {/* {Array.from(
            { length: totalNumberPages },
            (_, index) => index + 1
          ).map((PageNumber) => (
            <button
              key={PageNumber}
              onClick={() => {
                handleNumberClick(PageNumber);
              }}
              className={`w-[30px] h-[30px] rounded-full max-sm:text-[7px] ${
                CurrentPage === PageNumber
                  ? "bg-[#2B71F0]"
                  : "bg-[#2B71F0] opacity-50"
              }`}
            >
              {PageNumber}
            </button>
          ))} */}
        {/* </div> */}
        <button
          onClick={handleNext}
          className="text-[#98A2B3] w-[95px] bg-white text-[14px] h-[36px] px-[12px] grid place-items-center  border-gray-300 shadow-sm hover:bg-[#2B71F0] hover:text-white transition-all ease-in-out duration-300 rounded-[5px]"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Challenges;
