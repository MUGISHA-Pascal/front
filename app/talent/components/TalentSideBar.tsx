"use client";
import React, { useState } from "react";
import { RiTelegram2Line } from "react-icons/ri";

import { GoHome } from "react-icons/go";
import {
  IoDocumentTextOutline,
  IoPersonAddOutline,
  IoSettingsOutline,
  IoGiftOutline,
  IoHeadsetOutline,
} from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "@/lib/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/redux/store";

const TalentSideBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const currentPath = usePathname();
  const isActive = (path: string) => currentPath === path;

  const handleLogout = () => {
    setShowLogoutModal(true); // Show confirmation modal
  };

  const confirmLogout = () => {
    router.push("/login"); // Redirect to login page
    dispatch(clearCredentials()); // Clear user session
    setShowLogoutModal(false); // Close modal
  };

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="w-[272px] bg-[#2b71F0] text-white px-2 h-[1300px]">
      <div className="flex flex-col justify-between">
        <img
          src="/umuravaLogo2.webp"
          alt="User"
          draggable={false}
          className="w-[51px] h-[35px] mt-[20px] ml-[30px] rounded-3"
        />
        <div className="mb-[473px] mt-[30px]">
          <ul>
            <Link
              href="/talent/dashboard"
              className={`mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm ${
                isActive("/talent/dashboard") ? "bg-white text-blue-600" : ""
              }`}
            >
              <GoHome className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Dashboard
              </span>
            </Link>

            <Link
              href="/talent/challenges"
              className={`mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm ${
                isActive("/talent/challenges") ? "bg-white text-blue-600" : ""
              }`}
            >
              <IoDocumentTextOutline className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Challenges
              </span>
            </Link>
            <button
              onClick={() => {
                const modal = document.getElementById("my_modal_5");
                if (modal) {
                  (modal as HTMLDialogElement).showModal();
                }
              }}
              className="mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm"
            >
              <IoPersonAddOutline className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Community
              </span>
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box w-[400px] flex gap-4 flex-col">
                <div className="flex w-full justify-center">
                  <div className="h-[135px] w-[135px] bg-[#D0E0FC] flex justify-center items-center rounded-full overflow-hidden text-[#2B71F0]">
                    <RiTelegram2Line className="h-20 w-20" />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-black text-center">
                  Join our Whatsapp community
                </h3>
                <p className="text-center text-black">
                  Get notified on the latest projects and hackathons
                </p>
                <div className="modal-action">
                  <form method="dialog" className="flex w-full justify-center">
                    <button className="btn w-[135px] py-2 bg-[#2B71F0] rounded-lg text-white">
                      Join
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </ul>
        </div>
        <div className="mb-[10px] mt-[10px]">
          <ul>
            <Link
              href="/talent/dashboard"
              className="mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm"
            >
              <IoSettingsOutline className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Settings
              </span>
            </Link>

            <Link
              href="/talent/challenges"
              className="mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm"
            >
              <IoHeadsetOutline className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Help Center
              </span>
            </Link>

            <Link
              href="/talent/community"
              className="mb-[2px] p-4 flex items-center gap-2 w-[256px] hover:bg-white transition-all ease-in-out duration-300 hover:text-blue-600 h-[44px] rounded-sm"
            >
              <IoGiftOutline className="text-[20px]" />
              <span className="text-[14px] font-normal leading-5">
                Refer family & friends
              </span>
            </Link>
          </ul>
        </div>

        <div className="pl-[5px] flex flex-col space-y-[20px]">
          <div className="flex flex-row space-x-[7px]">
            <img
              src="/profile2.webp"
              alt="profileImage"
              className="h-[40px] object-cover border-[2px] border-white w-[40px] rounded-full"
            />
            <div className="flex  flex-col gap-1 w-[80%]">
              <p className="text-[12px] font-normal leading-5">
                {user?.username}, PM
              </p>
              <p className="text-[12px]  font-normal leading-5 w-[80%]">
                {user?.email}
              </p>
            </div>
          </div>
          <span className="">
            {" "}
            <FiLogOut
              className="h-[20px] w-[20px] cursor-pointer "
              onClick={handleLogout}
            />
          </span>
        </div>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 flex px-[10px] items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <p className=" font-medium text-[14px]">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 text-[14px] rounded-md"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 hover:opacity-70 text-[14px] text-white rounded-md"
                onClick={confirmLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentSideBar;
