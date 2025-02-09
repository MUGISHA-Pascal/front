"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import TalentSideBar from "@/app/talent/components/TalentSideBar";

interface RNode {
  children: React.ReactNode;
}
const TalentLayout = ({ children }: RNode) => {
  const [isOpened, setIsOpened] = useState(false);
  const launchModal = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="w-full bg-slate-50 excluded flex flex-row">
      <div className="excluded">
        <TalentSideBar toggleModal={launchModal} />
      </div>
      <div className="flex excluded flex-col w-full">
        <Header />
        <div className="excluded relative">
          {children}
          {isOpened && <Modal />}
        </div>
      </div>
    </div>
  );
};

export default TalentLayout;
