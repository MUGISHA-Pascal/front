"use client"

import { useRouter } from "next/navigation";


const Unauthorized = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm">
        <h1 className="text-2xl font-semibold mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-4">You do not have permission to view this page.</p>
        <button className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg" onClick={() => router.push("/guest/home/")}>Go to Home</button>
        <button className="w-full bg-gray-300 text-gray-800 mt-2 px-4 py-3 rounded-lg" onClick={() => router.back()}> Go Back</button>
      </div>
    </div>
  );
};

export default Unauthorized;
