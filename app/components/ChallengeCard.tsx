import React from "react";

const ChallengeCard = () => {
  return (
    <div className="challengeCard flex flex-col border-[1px] bg-white items-start pt-[8px] rounded-[6px] w-[280px] h-auto border-[#E4E7EC]">
      <div className="relative px-2">
        <img
          src="/umuravaBg.webp"
          draggable={false}
          alt="umurava_bg"
          className="w-[260px] object-cover rounded-[6px] h-[150px]"
        />
        <span className="bg-[#0F973D] text-white absolute w-[50px] grid place-items-center h-[20px] rounded-full top-[6px] text-[10px] right-[12px]">
          Open
        </span>
      </div>
      <h2 className="text-[#101928] mt-[16px] mb-2 text-[16px] font-semibold px-2">
        Design a Dashboard for SokoFund
      </h2>
      <h2 className="text-[#25272B] text-[10px] font-semibold px-2">
        Skills Needed:
      </h2>
      <div className="flex flex-wrap mt-1 gap-[6px] items-start justify-start mb-2 px-2">
        <button className="text-[#2B71F0] text-[9px] px-[4px] py-[3px] rounded-[8px] border-[#2B71F0] border-[1px]">
          UI/UX Design
        </button>
        <button className="text-[#2B71F0] text-[9px] px-[4px] py-[3px] rounded-[8px] border-[#2B71F0] border-[1px]">
          User Research
        </button>
        <button className="text-[#2B71F0] text-[9px] px-[4px] py-[3px] rounded-[8px] border-[#2B71F0] border-[1px]">
          User Research
        </button>
      </div>

      <div className="space-x-[2px] mt-[6px] items-start justify-start px-2">
        <h2 className="text-[#25272B] text-[10px] font-semibold">
          Seniority Level:
        </h2>
        <h1 className="text-[#475367] text-[10px]">
          Junior, Intermediate, Senior
        </h1>
      </div>
      <div className="flex space-x-[6px] mt-[6px] w-full items-start px-2 flex-row justify-start">
        <h2 className="text-[#25272B] text-[10px] font-semibold">Timeline:</h2>
        <h1 className="text-[#475367] text-[10px]">15 Days</h1>
      </div>
      <div className="flex-1 w-full justify-left pl-[9px] border-t-[1px] flex items-center border-[#E4E7EC] my-[8px]">
        <button className="bg-[#2B71F0] text-[10px] font-semibold text-white h-[30px] text-center mt-1 w-[120px] rounded-[6px]">
          View Challenge
        </button>
      </div>
    </div>
  );
};

export default ChallengeCard;
