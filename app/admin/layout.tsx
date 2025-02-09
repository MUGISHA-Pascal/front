import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

interface Rnode {
  children: React.ReactNode;
}
const layout = ({ children }: Rnode) => {
  

  return (
    <main className="w-full h-full">
      <div className="flex h-full excluded bg-slate-50 ">
        <SideBar />
        <div className="excluded flex-1 h-full w-full">
          <Header />
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
