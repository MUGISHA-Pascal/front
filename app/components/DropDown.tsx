"use client";
import React, { useState } from "react";

const DropDown = () => {
  const [selectedOption, setSelect] = useState("");
  const handleSelectionChange = () => {};
  return (
    <div className="flex z-50 flex-row gap-2 items-center relative">
      <select
        title="select"
        value={selectedOption}
        onChange={handleSelectionChange}
      >
        <option value="This Day">This Day</option>
        <option value="This Week">This Week</option>
        <option value="Last 30 Days">Last 30 Days</option>
        <option value="Last 3 Months">Last 3 Months</option>
      </select>
    </div>
  );
};

export default DropDown;
