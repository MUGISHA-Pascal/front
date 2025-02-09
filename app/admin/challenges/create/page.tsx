"use client";
import { useCreateChallengeMutation } from "@/lib/redux/slices/challengeSlice";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdAdd, IoMdAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
// import axios from "axios";

const Page: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const [createChallenge] = useCreateChallengeMutation();
  const [challengeTitle, setChallengeTitle] = useState("");
  const [deadline, setDeadline] = useState<any>(new Date());
  const [startingDate, setStartingDate] = useState<any>(new Date());
  const [duration, setDuration] = useState("");
  const [moneyPrize, setMoneyPrize] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [projectRequirements, setProjectRequirements] = useState<string[]>([
    "",
  ]);
  const [product_design, setProductDesign] = useState<string[]>([""]);
  const [deliverables, setDeliverables] = useState<string[]>([""]);
  const [skills_needed, setSkills_needed] = useState<string[]>([""]);
  const [category, setCategory] = useState("");
  const [seniority_level, setSeniority_level] = useState("");
  const [projectBrief, setProjectBrief] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    // Check for empty fields
    if (
      !challengeTitle ||
      !deadline ||
      !startingDate ||
      !duration ||
      !moneyPrize ||
      !contactEmail ||
      !category ||
      !seniority_level ||
      !projectBrief
    ) {
      alert("All fields are required.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate numbers
    if (isNaN(parseInt(duration)) || parseInt(duration) <= 0) {
      alert("Duration must be a positive number.");
      return;
    }

    if (isNaN(parseInt(moneyPrize)) || parseInt(moneyPrize) < 0) {
      alert("Money Prize must be a valid number.");
      return;
    }

    // Validate date fields
    const start = new Date(startingDate);
    const end = new Date(deadline);
    if (start >= end) {
      alert("The starting date must be before the deadline.");
      return;
    }
    event.preventDefault();
    const newToCreateChallenge = {
      title: challengeTitle,
      deadline,
      duration: parseInt(duration),
      moneyPrice: parseInt(moneyPrize),
      contactEmail,
      requirements: projectRequirements,
      product_design,
      deliverables,
      category,
      seniority_level,
      skills_needed,
      projectBrief,
      startingAt: startingDate,
    };
    if (user) {
      try {
        const res = await createChallenge({
          id: user?.id,
          newChallenge: newToCreateChallenge,
        }).unwrap();
        console.log(res);
        console.log(newToCreateChallenge);
        if (res) {
          router.push("/admin/challenges");
        }
      } catch (error) {
        console.log(
          "failed to create the challenge ",
          error,
          newToCreateChallenge
        );
      }
    } else {
      alert("You must be logged in to create a challenge");
    }
  };

  const addField = (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter((prev) => [...prev, ""]);
  };

  const removeField = (
    index: number,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="excluded flex flex-col space-y-[30px] pb-[40px] items-center">
      <div className="excluded flex  flex-row w-full  border-y-[1.5px] items-center  border-[#E4E7EC] space-x-[20px] bg-white justify-start px-[20px] h-[62px]">
        <Link
          href={"/admin/challenges"}
          className="border-[#E4E7EC] border-[1px] p-[3px] rounded-[5px] bg-white"
        >
          <VscArrowSmallLeft className="text-[21px]" />
        </Link>
        <h2 className="text-[#667185] text-[14px]">Go Back</h2>
        <h2 className="flex flex-row items-center justify-center text-[14px] space-x-[4px]">
          <span className="text-[#667185]">Create New Challenge</span>
          <span className="text-[#667185]">/</span>
          <span className="text-[#2B71F0]">Create New Challenge</span>
        </h2>
      </div>
      <div className="excluded bg-white  border-[#E4E7EC] border-[1.5px] shadow-sm rounded-[10px] w-[624px] items-center  px-8 pt-6 pb-8 flex flex-col">
        <h2 className="text-[24px] font-semibold mb-2">Create New Challenge</h2>
        <p className="text-[#8C94a6] mb-[30px]">
          Fill out these details to build your broadcast
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="challengeTitle"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Challenge/Hackathaton Title
            </label>
            <input
              type="text"
              id="challengeTitle"
              className="appearance-none placeholder:text-[14px]   border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={challengeTitle}
              placeholder="Enter Title"
              onChange={(e) => setChallengeTitle(e.target.value)}
            />
          </div>
          <div className="excluded mb-4 space-x-[10px] flex flex-col md:flex-row md:items-center">
            <div className="excluded md:w-1/2 mb-4 md:mb-0">
              <label
                htmlFor="deadline"
                className="block text-[#475367] text-[14px] mb-2"
              >
                Deadline
              </label>
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                id="deadline"
                className="appearance-none placeholder:text-[14px] text-[14px]   border-[0.5px] border-[#E4E7EC] rounded w-[279px] p-[16px] text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div className="excluded md:w-1/2 mb-4 md:mb-0">
              <label
                htmlFor="deadline"
                className="block text-[#475367] text-[14px] mb-2"
              >
                Starting Date
              </label>
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                id="startingDate"
                className="appearance-none placeholder:text-[14px] text-[14px]   border-[0.5px] border-[#E4E7EC] rounded w-[279px] p-[16px] text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
              />
            </div>
          </div>
          <div className="excluded mb-4">
            <label
              htmlFor="duration"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              placeholder="Duration"
              className="appearance-none placeholder:text-[14px]   border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="excluded mb-4">
            <label
              htmlFor="moneyPrize"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Money Prize
            </label>
            <input
              type="text"
              id="moneyPrize"
              placeholder="Prize"
              className="appearance-none placeholder:text-[14px]  border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={moneyPrize}
              onChange={(e) => setMoneyPrize(e.target.value)}
            />
          </div>
          <div className="excluded mb-4">
            <label
              htmlFor="contactEmail"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Contact Email
            </label>
            <input
              type="email"
              id="contactEmail"
              placeholder="example@gmail.com"
              className="appearance-none placeholder:text-[14px]  border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />
          </div>
          <div className="excluded mb-4">
            <label
              htmlFor="category"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="challenge category"
              className="appearance-none placeholder:text-[14px]  border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="excluded mb-4">
            <label
              htmlFor="seniority_level"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Seniority Level
            </label>
            <select
              id="seniority_level"
              className="appearance-none placeholder:text-[14px]  border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={seniority_level}
              onChange={(e) => setSeniority_level(e.target.value)}
            >
              <option></option>
              <option>Senior</option>
              <option>Intermediate</option>
              <option>Junior</option>
            </select>
          </div>

          <div className="excluded mb-4">
            <label
              htmlFor="projectBrief"
              className="block text-[#475367] text-[14px] mb-2"
            >
              Project Brief
            </label>
            <textarea
              id="projectBrief"
              className="appearance-none placeholder:text-[14px]  h-[114px] border-[0.5px] border-[#E4E7EC] rounded w-[576px] p-[16px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              maxLength={900}
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
              placeholder="Enter text here ..."
            />
          </div>

          {[
            projectRequirements,
            product_design,
            deliverables,
            skills_needed,
          ].map((field: any, fieldIndex: any) => (
            <div key={fieldIndex} className="excluded mb-4">
              <label className="block text-[#475367] text-[14px] mb-2">
                {fieldIndex === 0
                  ? "Project Requirements"
                  : fieldIndex === 1
                  ? "Product Design"
                  : fieldIndex === 2
                  ? "Deliverables"
                  : "Skills_needed"}
              </label>
              {field.map((value: any, index: any) => (
                <div key={index} className="flex space-x-2 mb-2">
                  <input
                    title="input"
                    type="text"
                    className="border-[0.5px] border-[#E4E7EC] rounded w-[500px] p-[16px] text-gray-700"
                    value={value}
                    onChange={(e) => {
                      const newValues = [...field];
                      newValues[index] = e.target.value;
                      fieldIndex === 0
                        ? setProjectRequirements(newValues)
                        : fieldIndex === 1
                        ? setProductDesign(newValues)
                        : fieldIndex === 2
                        ? setDeliverables(newValues)
                        : setSkills_needed(newValues);
                    }}
                  />
                  <button
                    title="button"
                    type="button"
                    onClick={() =>
                      removeField(
                        index,
                        fieldIndex === 0
                          ? setProjectRequirements
                          : fieldIndex === 1
                          ? setProductDesign
                          : fieldIndex === 2
                          ? setDeliverables
                          : setSkills_needed
                      )
                    }
                  >
                    <MdDelete className="text-[30px] cursor-pointer text-red-400" />
                  </button>
                </div>
              ))}
              <button
                title="button"
                type="button"
                onClick={() =>
                  addField(
                    fieldIndex === 0
                      ? setProjectRequirements
                      : fieldIndex === 1
                      ? setProductDesign
                      : fieldIndex === 2
                      ? setDeliverables
                      : setSkills_needed
                  )
                }
              >
                <IoMdAddCircleOutline className="text-[30px] cursor-pointer text-blue-500" />
              </button>
            </div>
          ))}

          <div className="excluded flex flex-row space-x-[20px] items-center justify-between">
            <button
              className="w-[220px] h-[56px] rounded-[5px] text-[16px] text-[#2b71f0]  grid place-items-center border-[#2b71f0] border-[1.5px]"
              onClick={() => router.push("/admin/challenges")}
            >
              Cancel
            </button>
            <button className="bg-[#2B71f0] w-[324px]  h-[56px]  text-[16px] rounded-[5px] font-semibold text-white">
              Create Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
