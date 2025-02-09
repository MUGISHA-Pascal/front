import React, { useState, useEffect } from "react";
import { useGetChallengesByDaysAgoQuery, useGetOpenChallengeDaysAgoQuery, useGetOngoingChallengeDaysAgoQuery, useGetCompletedChallengeDaysAgoQuery } from "@/lib/redux/slices/challengeSlice";
import { FaArrowUpLong } from "react-icons/fa6";
import { RxFileText } from "react-icons/rx";

const Card = ({ width, description }: { width: number; description: string }) => {
  const [selectedOption, setSelectedOption] = useState("This Day");
  const [number, setNumber] = useState(0);
  const [percentage, setPercentage] = useState(0);

  // Fetch all challenges

  // Fetch based on selected option
  const daysAgoMapping: Record<string, number> = {
    "This Day": 1,
    "This Week": 7,
    "Last 30 Days": 30,
    "Last 3 Months": 90,
  };

  const selectedDays = daysAgoMapping[selectedOption];

  // Queries for different statuses
  const { data: openChallenges = [] } = useGetOpenChallengeDaysAgoQuery(selectedDays);
  const { data: ongoingChallenges = [] } = useGetOngoingChallengeDaysAgoQuery(selectedDays);
  const { data: completedChallenges = [] } = useGetCompletedChallengeDaysAgoQuery(selectedDays);
  const { data: allChallenges = [], isLoading: allLoading } = useGetChallengesByDaysAgoQuery(selectedDays);

  useEffect(() => {
    if (!allLoading) {
      let filteredCount = 0;

      // Decide which query data to use based on description
      if (description === "Open Challenges") {
        
        filteredCount = openChallenges.length;
      } else if (description === "Ongoing Challenges") {
        filteredCount = ongoingChallenges.length;
      } else if (description === "Completed Challenges") {
        filteredCount = completedChallenges.length;
      } else {
        filteredCount = allChallenges.length;
      }


      const totalCount = allChallenges.length;
      setNumber(filteredCount);
      setPercentage(totalCount > 0 ? Math.round((filteredCount / totalCount) * 100) : 0);
    }
  }, [selectedOption, allChallenges, openChallenges, ongoingChallenges, completedChallenges]);

  return (
    <div className={`relative bg-white rounded-lg border-[1.5px] border-[#E4E7EC] px-6 py-[0px] h-[150px] w-[${width}]`}>
      <div className="absolute top-2 right-2 flex items-center gap-1 h-[17px] font-normal text-[12px] leading-[18px] text-[#98A2B3]">
        <select title="select" className="focus:outline-none cursor-pointer" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="This Day">This Day</option>
          <option value="This Week">This Week</option>
          <option value="Last 30 Days">Last 30 Days</option>
          <option value="Last 3 Months">Last 3 Months</option>
        </select>
      </div>
      <div className="w-full h-full">
        <div className="flex flex-row space-x-[30px] items-center justify-center mt-[70px]">
          <button title="." className="bg-blue-200 rounded-full w-[47px] h-[47px] grid place-items-center">
            <RxFileText className="text-[#2B71F0] text-[23px]" />
          </button>
          <div className="flex flex-col flex-1 gap-1">
            <p className="text-[#25272B] text-[14px] font-normal">{description}</p>
            <p className="font-semibold text-blue-950 flex gap-4">
              {number}
              <span className="text-[#2B71F0] flex bg-[#E7F6EC] rounded-xl px-2 leading-[17px] items-center gap-1">
                <FaArrowUpLong color="#2B71F0" className="font-bold text-[10px]" />
                <span className="text-[12px] font-bold">{percentage}%</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
