import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col space-y-[20px]  items-center">
      {/* <div className="flex flex-col space-y-[20px] "> */}
      <h2 className="text-[200px] text-blue-500 font-bold">404</h2>
      <p className="text-gray-700 text-[60px] font-bold">Not Found</p>
      <Link href="/" className="underline font-bold text-blue-500 text-[20px]">
        Return Home
      </Link>
      {/* </div> */}
    </div>
  );
}
