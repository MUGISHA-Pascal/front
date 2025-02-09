import React, { useEffect, useState } from "react";

import { FaArrowUpLong } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import DropDown from "./DropDown";
import { useGetParticipantsByDaysAgoQuery } from "@/lib/redux/slices/participantsSlice";

const Card2 = ({
  width,
  description,
}: {
  width: number;
  description: string;
  number: number;
  percentage: number;
}) => {
  const [selectedOption, setSelectedOption] = useState("This Day");


  const [number, setNumber] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const daysAgoMapping: Record<string, number> = {
    "This Day": 1,
    "This Week": 7,
    "Last 30 Days": 30,
    "Last 3 Months": 90,
  };

  const selectedDays = daysAgoMapping[selectedOption];

  const { data: totalParticipants = [], isLoading: allLoading } =
    useGetParticipantsByDaysAgoQuery(selectedDays);

  useEffect(() => {
    if (!allLoading) {
      let filteredCount = 0;

      // Decide which query data to use based on description

      if (description === "Total Participants") {
        filteredCount = totalParticipants.length;
      }

      const totalCount = totalParticipants.length;
      setNumber(filteredCount);
      setPercentage(
        totalCount > 0 ? Math.round((filteredCount / totalCount) * 100) : 0
      );
    }
  }, [selectedOption, totalParticipants]);

  const handleSelectionChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div
      className={`relative bg-white rounded-lg border-[1.5px] border-[#E4E7EC] -z-10 px-6  py-[0px] h-[150px] w-[${width}]`}
    >
      <div className="absolute top-2 right-2 flex items-center gap-1  h-[17px] font-normal text-[12px] leading-[18px] text-[#98A2B3]">

        <select
          title="select"
          value={selectedOption}
          className="focus:outline-none cursor-pointer"
          onChange={handleSelectionChange}
        >
          <option value="This Day">This Day</option>
          <option value="This Week">This Week</option>
          <option value="Last 30 Days">Last 30 Days</option>
          <option value="Last 3 Months">Last 3 Months</option>
        </select>
      </div>
      <div className="w-full h-full">
        <div className="flex flex-row space-x-[30px] items-center justify-center mt-[70px]    ">
          <button
            title="."
            className="bg-blue-200 rounded-full w-[47px] h-[47px]  grid place-items-center "
          >
            <IoPeopleOutline className="text-[#2B71F0] text-[24px]" />
          </button>
          <div className="flex flex-col flex-1 gap-1 ">
            <p className="text-[#25272B] text-[14px] font-normal">
              {description}
            </p>
            <p className="font-semibold text-blue-950 flex gap-4 ">
              {number}
              <span className="text-[#2B71F0] space-x-[3px] flex bg-[#E7F6EC] rounded-xl px-2  leading-[17px] items-center flex-row gap-0">
                <FaArrowUpLong
                  color="#2B71F0"
                  className="font-bold text-[10px]"
                />
                <span className="text-[12px] font-bold">{percentage}%</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
