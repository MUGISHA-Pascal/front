"use client"
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import Link from "next/link";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { IoPlaySharp } from "react-icons/io5";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const courseNames = [
    "UI/UX Design",
    "Data Science",
    "Graphic Design",
    "Data Analysis & Research",
    "Animation",
    "Videography & Photography",
    "AI & Machine Learning",
    "Web3",
    "Digital Marketing & Communications",
  ];
  const videoCards = [];
  for (let i = 0; i < 10; i++) {
    videoCards.push(
      <div
        key={i}
        className="carousel-item flex max-[440px]:w-72 max-[440px]:p-2 flex-col border-[#E4E7EC] border-[1.5px] p-[20px] rounded-[10px]"
      >
        {/* <img
          src="/umuravaBg.webp"
          alt="image"
          className="rounded-[10px] w-[470px] object-cover h-[280px]"
        /> */}
        <div className="relative max-[440px]:w-full max-[440px]:h-auto w-[470px] h-[280px] rounded-lg shadow-lg overflow-hidden">
          <video className="w-full h-full" controls>
            <source src="/umuravaVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <div className="absolute inset-0 flex justify-center items-center"> */}
          {/* <button
              title="button"
              className="btn btn-circle bg-[#FFFFFF9B] border-none"
              onClick={(e) => {
                const videoElement = e.target
                  .closest("div")
                  .querySelector("video");
                if (videoElement) {
                  videoElement.play();
                }
              }}
            >
              <IoPlaySharp className="text-[30px] text-white" />
            </button> */}
          {/* </div> */}
        </div>
        <div className="flex flex-row space-x-[10px] items-center max-[440px]:mt-3 mt-[20px]">
          <img
            src="/umuravaBg.webp"
            alt="image"
            className="w-[60px] max-[440px]:w-[40px] max-[440px]:h-[40px] object-cover h-[60px] rounded-full"
          />
          <span className="flex flex-col">
            <h2 className="text-[#00473B] text-[19px] max-[440px]:text-lg font-semibold">
              Manzi James
            </h2>
            <p className="text-[#737373] text-[14px]">
              Product Designer,Kigali
            </p>
          </span>
        </div>
      </div>
    );
  }
  const gridSectionData = [
    {
      image: "bagLogo2.webp",
      heading: "Enhance Your Employment Path",
      description:
        " Network with other talented individuals and learn from their experiences",
    },
    {
      image: "prizeLogo.webp",
      heading: "Earn Recognition And Prize",
      description:
        "Gain valuable experience and knowledge to advance your career in the digital economy",
    },
    {
      image: "statisticLogo.webp",
      heading: "Personal Growth",
      description:
        "Challenge yourself , learn new skills , and expand your professional network",
    },
    {
      image: "prize2Logo.webp",
      heading: "Learn From Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces.",
    },
  ];
  const images = [
    "cardPhoto1.webp",
    "cardPhoto2.webp",
    "cardPhoto1.webp",
    "cardPhoto2.webp",
  ];
  const items = [];
  const numItems = 3;
  for (let i = 1; i <= numItems; i++) {
    items.push(
      <div
        key={i}
        className="flex flex-col border-[1.5px] items-center pt-[18px] max-md:w-[600px] max-[440px]:p-2 max-[440px]:h-96 rounded-[10px] lg:w-[350px] h-[480px] border-[#E4E7EC]"
      >
        <div className="relative max-[440px]:w-full">
          <img
            src="/umuravaBg.webp"
            draggable={false}
            alt="umurava_bg"
            className="w-[313px] object-cover rounded-[10px] max-[440px]:w-full max-[440px]:h-auto h-[200px]"
          />
          <span className="bg-[#0F973D] text-white absolute w-[70px] grid place-items-center h-[28px] rounded-full top-[10px] text-[14px] right-[10px]">
            Open
          </span>
        </div>
        <h2 className="text-[#101928] max-[440px]:text-sm max-[440px]:mt-2 mt-[30px] text-[18px] font-semibold">
          Design a Dashboard for SokoFund
        </h2>
        <div className="flex flex-col pl-[10px] text-start space-x-[-10px] space-y-[10px] mt-[10px]">
          <h2 className="text-[#25272B] text-[14px] font-semibold">
            Skills Needed:
          </h2>
          <div className="flex flex-wrap gap-[10px] items-center justify-center">
            <button className="text-[#2B71F0] text-[12px] px-[7px] py-[6px] rounded-[12px] border-[#2B71F0] border-[1.5px]">
              UI/UX Design
            </button>
            <button className="text-[#2B71F0] text-[12px] px-[7px] py-[6px] rounded-[12px] border-[#2B71F0] border-[1.5px]">
              User Research
            </button>
            <button className="text-[#2B71F0] text-[12px] px-[7px] py-[6px] rounded-[12px] border-[#2B71F0] border-[1.5px]">
              User Research
            </button>
          </div>
        </div>
        <div className="flex space-x-[10px] mt-[10px] max-[440px]:flex-col flex-row items-center justify-center">
          <h2 className="text-[#25272B] text-[14px] max-[440px]:w-full font-semibold">
            Seniority Level:
          </h2>
          <h1 className="text-[#475367] text-[14px]">
            (Junior,Intermediate,Senior)
          </h1>
        </div>
        <div className="flex space-x-[10px] mt-[10px] w-full items-start flex-row justify-start px-[20px]">
          <h2 className="text-[#25272B] text-[14px] font-semibold">
            Timeline:
          </h2>
          <h1 className="text-[#475367] text-[14px]">15 Days</h1>
        </div>
        <div className="flex-1 w-full border-t-[1.5px] flex items-center px-[20px] border-[#E4E7EC] mt-[16px]">
          <button className="bg-[#2B71F0] text-[13px] font-semibold text-white h-[36px] w-[136px] rounded-[10px]">
            View Challenge
          </button>
        </div>
      </div>
    );
  }
  return (
    <main className="">
      <NavBar />
      <section className="firstSection flex pb-[50px] max-[440px]:flex-col flex-row items-center justify-center mt-[20px] ">
        <div className="max-[440px]:px-5 flex flex-col space-y-[30px]  text-left mt-[60px] lg:w-[576px]">
          <h2 className="max-[440px]:text-xl text-[#2B71f0] leading-[52.8px] font-bold text-[40px]">
            Build Work Experience through Skills Challenges Program
          </h2>
          <p className="text-[16px] w-full text-gray-700 max-[440px]:text-sm">
            Enhance Your Employability and Accelerate Your Career Growth by
            working on Hands-on projects & Hackathons from various businesses &
            organizations
          </p>
          <button className="bg-[#2B71f0] mt-[40px] w-[171px] h-[46px]  text-[16px] rounded-[5px] font-semibold text-white" onClick={() => router.push("/login")}>
            Get Started
          </button>
        </div>
        <div className="flex max-[440px]:self-start flex-row space-x-[20px] ">
          <img
            src="/Image_2.png"
            alt="photo"
            className="w-auto max-[440px]:w-auto max-[440px]:h-[290px] h-[500px]"
          />
          <img
            src="/image_1.png"
            alt="photo"
            className="w-auto max-[440px]:w-auto max-[440px]:h-[260px] max-md:mt-[37px]  h-[442px] lg:mt-[56px]"
          />
        </div>
      </section>
      <section className="firstSection max-[440px]:px-20 flex flex-col px-48 bg-[#F9FAFB] items-center justify-center lg:pt-[50px]">
        <div className="max-[440px]:w-screen lg:pb-[50px] max-[440px]:px-5 flex flex-col justify-center max-md:py-[40px] lg:space-y-[20px] max-md:space-y-[20px] items-center w-fit">
          <h2 className="max-[440px]:text-xl text-[#03192E] leading-[48px] max-md:leading-[30px] text-[40px] text-center lg:w-[700px] font-bold">
            Experience a New Way of Building Work Experience
          </h2>
          <p className="max-[440px]:text-sm lg:w-[710px] text-[#687588] text-[18px] text-center">
            Join Skills Challenges Program to accelerate yout career growth and
            become part of Africa's largest workforce of digital professionals{" "}
          </p>
          <div className="flex flex-col max-[440px]:w-full lg:space-y-[20px] h-fit items-center justify-center">
            <div className="bg-[#2B71F0] max-[440px]:mb-5 mt-[60px] max-md:mt-[30px] max-[440px]:gap-5 rounded-[10px] p-[48px] max-[440px]:p-8 flex flex-col">
              <img
                src="/bagLogo.webp"
                draggable="false"
                className="w-[60px] rounded-[10px] h-auto"
                alt="bag logo"
              />
              <h2 className="max-[440px]:text-[20px] max-md:leading-[30px] font-bold text-white text-[24px]">
                Build a Strong Portforio and Hand-On Experience
              </h2>
              <p className="max-[440px]:text-sm text-white text-[16px] max-[640px]:w-fit">
                Tackle real-world projects through Challenges and hackathons
                that mirror real world challenges faced by businesses and
                organizations.Therefore, showcase your skills and
                accomplishments to potential employers and clients through a
                portforio of completed projects
              </p>
            </div>
            <div className="flex flex-row w-full max-[440px]:flex-col lg:space-x-[20px] max-[440px]:gap-5">
              <div className="bg-[#2B71F0] space-y-[30px] rounded-[10px] p-[48px] max-[440px]:p-5 flex flex-col">
                <img
                  src="/bagLogo.webp"
                  draggable="false"
                  className="w-[60px] rounded-[10px] h-auto"
                  alt="bag logo"
                />
                <h2 className="font-bold text-white max-[440px]:text-[20px] max-md:leading-[30px] text-[24px]">
                  Enhance Your Employment Path
                </h2>
                <p className="text-white text-[16px]">
                  Elop the in-demand skills and build a strong portforio to
                  increase your chances of landing your dream job or contract
                </p>
              </div>
              <div className="bg-[#2B71F0] max-[440px]:gap-5 rounded-[10px] p-[48px] max-[440px]:p-5 w-full flex flex-col">
                <img
                  src="/bagLogo.webp"
                  draggable="false"
                  className="w-[60px] rounded-[10px] h-auto"
                  alt="bag logo"
                />
                <h2 className="font-bold max-[440px]:text-[20px] max-md:leading-[30px] text-white text-[24px]">
                  Earn Recognition and Prizes
                </h2>
                <p className="text-white text-[16px]">
                  Earn both Money and knowledge Prizes by participating in
                  various contests and competitions by working on real world
                  projects and hackathons from partner companies or
                  organizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full items-center p-[70px] max-[440px]:p-2 justify-center">
        <div className="bg-[url('/cardBg.webp')] text-white bg-cover max-md:rounded-[10px] max-[440px]:text-sm bg-center h-[259px] max-[440px]:h-32 space-x-[135px] max-[440px]:space-x-1 rounded-[30px] w-full flex flex-row items-center justify-center max-[440px]:justify-around max-[440px]:p-3">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="font-bold text-[40px] max-[440px]:text-2xl">1</p>
            <p className="text-[21.65px] max-[440px]:text-sm">Year</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="font-bold text-[40px] max-[440px]:text-2xl">500+</p>
            <p className="text-[21.65px] max-[440px]:text-sm">
              Challenges Completed
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="font-bold text-[40px] max-[440px]:text-2xl">10k+</p>
            <p className="text-[21.65px] max-[440px]:text-sm">Users</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="font-bold text-[40px] max-[440px]:text-2xl">6+</p>
            <p className="text-[21.65px] max-[440px]:text-sm">Countries</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full pb-[50px] items-center pt-[50px] justify-center">
        <h2 className="text-[#03192E] text-[40px] mb-[20px] leading-[48px] max-md:leading-[30px]  w-[1000px] max-[440px]:w-full max-[440px]:text-xl text-center font-bold">
          Skills Challenges Cover various in-demand skills and Careers for the
          digital economy{" "}
        </h2>
        <p className="text-[#687588]  mb-[45px] text-[18px] w-[580px] max-md:text-[14px]  max-[440px]:w-[371px] text-center">
          Explore the projects that various talents are working on{" "}
        </p>
        <div className="flex flex-wrap justify-center max-[440px]:w-full max-[440px]:gap-2 max-[440px]:px-3 gap-[20px] w-[700px] ">
          {courseNames.map((courseName: string, index) => (
            <button
              key={index}
              className="bg-[#f1f1f1] hover:bg-[#2b71f0] max-[440px]:py-2 max-[440px]:px-3 rounded-[6px] text-[#657888] py-[14px] px-[24px] transition-all duration-150 hover:text-white"
            >
              {courseName}
            </button>
          ))}
        </div>
        <Carousel images={images} />
      </section>
      <section className="flex flex-col max-[440px]:w-full pb-[50px] items-center justify-center">
        <h2 className="text-[#03192E] text-[40px] max-[440px]:text-xl mb-[20px] leading-[48px] max-[440px]:w-full w-[1000px] text-center font-bold">
          Explore Challenges & Hackathons
        </h2>
        <p className="text-[#687588] max-[440px]:text-sm max-[440px]:px-2 max-[440px]:w-full mb-[45px] text-[18px] w-[710px] text-center">
          Join skills Challenges Program to accelerate your career growth and
          become part of Africa's largest workforce of digital professionals.
        </p>
        <div className="flex max-[440px]:bg-[#eee] flex-row max-[440px]:h-[400px] w-full max-[440px]:overflow-x-auto max-[440px]:gap-5 md:overflow-x-auto lg:items-center lg:justify-center lg:space-x-[30px] ">
          {items}
        </div>
        <Link
          href={"/guest/challenges"}
          className="w-[207px] max-[440px]:w-fit hover:bg-[#2b71f0] transition-all ease-in-out duration-300 hover:text-white  max-[440px]:h-fit max-[440px]:px-4 max-[440px]:py-3 h-[56px] rounded-[5px] text-[16px] text-[#2b71f0] mt-[60px] grid place-items-center border-[#2b71f0] border-[1.5px]"
        >
          View More
        </Link>
      </section>
      <section className="firstSection flex max-[440px]:w-full flex-col pb-[50px] bg-[#F9FAFB] items-center pt-[50px] justify-center">
        <h2 className=" text-[#03192E] leading-[48px] max-[440px]:w-full max-[440px]:text-xl max-[440px]:px-2 text-[40px] w-[700px] text-center font-bold">
          What else can I gain from participating in Skills Challenges ?
        </h2>
        <p className="text-[#687588] mt-[20px]  text-[18px] w-[710px] max-[440px]:w-full max-[440px]:text-sm max-[440px]:px-2 text-center">
          Join Skills Challenges Program to accelerate yout career growth and
          become part of Africa's largest workforce of digital professionals{" "}
        </p>
        <main className="flex max-[440px]:w-full max-[440px]:flex-col-reverse max-[440px]:gap-10 flex-row max-[440px]:space-x-0 space-x-[50px] mt-[70px] items-center justify-center">
          <div className="grid max-[440px]:flex max-[440px]:flex-col grid-cols-2 gap-[30px]">
            {gridSectionData.map((data, index) => (
              <div className="flex-col flex" key={index}>
                <div className="w-[60px] h-[60px] grid place-items-center bg-[#2b71f0] rounded-[5px]">
                  <img
                    src={`/${data.image}`}
                    alt="logo"
                    draggable={false}
                    className="w-[40px] h-[40px] object-cover rounded-[5px]"
                  />
                </div>
                <h2 className="text-[#101928] mt-[15px] text-[15px] font-semibold">
                  {data.heading}
                </h2>
                <p className="text-[#687588] mt-[20px] text-[14px] w-[300px]">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
          <img
            src="/cardPhoto2.webp"
            alt="image"
            draggable={false}
            className="w-[450px] h-auto max-[440px]:w-full"
          />
        </main>
      </section>
      <section className="flex max-[440px]:w-full flex-col pt-[60px] ml-[130px] max-[440px]:m-0 pb-[50px] items-start justify-center">
        <h2 className="text-[#03192E] max-[440px]:w-full max-[440px]:text-xl max-[440px]:px-5 text-[40px] mb-[20px] leading-[48px] w-[700px] text-left font-bold">
          Users Are In Love with Skills Challenges Program
        </h2>
        <p className="text-[#687588] max-[440px]:w-full max-[440px]:text-sm max-[440px]:px-5 mb-[45px] text-[18px] w-[610px] text-left">
          See what your clients say about working with us. Their success speaks
          for our dedication and expertise.
        </p>
        <div className="carousel carousel-center bg-white shadow-sm  rounded-box max-w-full space-x-4 p-4">
          {videoCards}
        </div>
      </section>
      <section className="firstSection max-[440px]:w-full flex flex-col pb-[50px] bg-[#F9FAFB] items-center max-[440px]:pt-5 pt-[50px] justify-center">
        <h2 className="text-[#03192E] max-[440px]:w-full max-[440px]:px-2 max-[440px]:text-xl leading-[48px] text-[40px] w-[700px] text-center font-bold">
          How To Get Started
        </h2>
        <main className="flex max-[440px]:flex-col max-[440px]:gap-2 max-[440px]:w-full flex-row max-[440px]:space-x-0 space-x-[30px] max-[440px]:mt-0 mt-[60px]">
          <div className="max-[440px]:flex max-[440px]:pt-5 max-[440px]:w-full max-[440px]:px-2 max-[440px]:flex-col max-[440px]:gap-2 grid grid-cols-1 gap-[30px]">
            <div className="relative max-[440px]:w-full max-[440px]:pl-5 max-[440px]:pt-5 max-[440px]:h-[270px] shadow-sm bg-white rounded-[10px] w-[470px] pt-[50px] pl-[50px] h-[364px] flex flex-col">
              <button className="bg-[#2b71f0] text-[12px] text-white w-[63px] h-[30px] rounded-[5px]">
                Step 1
              </button>
              <h2 className="text-[#101928] mt-[15px] text-[15px] font-semibold">
                Sign Up on Umurava Platform
              </h2>
              <p className="text-[#687588] mt-[15px] text-[14px] ">
                Submit your completed project for evaluation
              </p>
              <img
                src="/cardPhoto3.webp"
                alt="photo"
                className="absolute bottom-0 right-0 rounded-br-[10px] max-[440px]:w-56 max-[440px]:h-auto w-[263px] h-[147px]"
              />
            </div>
            <div className="relative max-[440px]:w-full max-[440px]:pl-5 max-[440px]:pt-5 max-[440px]:h-80 shadow-sm bg-white rounded-[10px] w-[470px] pt-[50px] pl-[50px] h-[364px] flex flex-col">
              <button className="bg-[#2b71f0] text-[12px] text-white w-[63px] h-[30px] rounded-[5px]">
                Step 2
              </button>
              <h2 className="text-[#101928] mt-[15px] text-[15px] font-semibold">
                Browse Open Challenges
              </h2>
              <p className="text-[#687588] mt-[15px] text-[14px] ">
                Explore the range of challenges and hackathons and choose one{" "}
                that aligns with your interests and career goals
              </p>
              <img
                src="/cardPhoto1.webp"
                alt="photo"
                className="absolute bottom-0 rounded-br-[10px] right-0 w-[263px] h-[147px]"
              />
            </div>
          </div>
          <div className="max-[440px]:flex max-[440px]:w-full max-[440px]:px-2 max-[440px]:flex-col max-[440px]:gap-2 grid grid-cols-1 gap-[30px]">
            <div className="max-[400px]:pt-5 max-[440px]:pl-5 max-[440px]:pb-5 max-[440px]:h-fit max-[440px]:w-full bg-white shadow-sm rounded-[10px] pt-[50px] pl-[50px] w-[624px] h-[235px]">
              <button className="bg-[#2b71f0] text-[12px] text-white w-[63px] h-[30px] rounded-[5px]">
                Step 3
              </button>
              <h2 className="text-[#101928] mt-[15px] text-[15px] font-semibold">
                Register and Participate
              </h2>
              <p className="text-[#687588] mt-[15px] text-[14px] ">
                Sign up for the challenge and start working on the project.
              </p>
            </div>
            <div className="max-[400px]:pt-5 max-[440px]:pl-5 max-[440px]:pb-5 max-[440px]:h-fit max-[440px]:w-full bg-white shadow-sm rounded-[10px] pt-[50px] pl-[50px] w-[624px] h-[235px]">
              <button className="bg-[#2b71f0] text-[12px] text-white w-[63px] h-[30px] rounded-[5px]">
                Step 4
              </button>
              <h2 className="text-[#101928] mt-[15px] text-[15px] font-semibold">
                Submit your work
              </h2>
              <p className="text-[#687588] mt-[15px] text-[14px] ">
                Submit your completed project for evaluation
              </p>
            </div>{" "}
            <div className="max-[400px]:pt-5 max-[440px]:pl-5 max-[440px]:pb-5 max-[440px]:h-fit max-[440px]:w-full bg-white shadow-sm rounded-[10px] pt-[50px] pl-[50px] w-[624px] h-[235px]">
              <button className="bg-[#2b71f0] text-[12px] text-white w-[63px] h-[30px] rounded-[5px]">
                Step 5
              </button>
              <h2 className="text-[#101928] mt-[15px] text-[15px] font-semibold">
                Receive Feedback and Recognition{" "}
              </h2>
              <p className="text-[#687588] mt-[15px] text-[14px] ">
                Get feedback on your work and celebrate your achievements{" "}
              </p>
            </div>{" "}
          </div>
        </main>
      </section>
      <section className="py-[80px] max-[440px]:pt-5 max-[440px]:w-full max-[440px]:px-2 max-[440px]:h-fit max-[440px]:flex max-[440px]:flex-col grid place-items-center">
        <div className="h-[503px] max-[440px]:p-3 max-[440px]:w-full max-[440px]:h-fit max-[440px]:flex max-[440px]:flex-col w-[1221px] rounded-[20px] bg-[url('/cardBg2.webp')] bg-cover bg-no-repeat place-items-center grid grid-cols-2">
          <img
            src="/people.webp"
            alt="image"
            className="w-[398px] h-[395px] max-[440px]:w-full max-[440px]:h-auto rounded-[10px]"
          />
          <div className="max-[440px]:w-full max-[440px]:pt-3">
            {" "}
            <h2 className="font-bold max-[440px]:text-xl max-[440px]:w-full text-white leading-[38px] w-[545px] text-[32px]">
              Ready To Unlock Your Career Potential Today
            </h2>
            <p className="text-white text-[18px] max-[440px]:w-full w-[525px] leading-[27px] mt-[30px]">
              Join a challenge or a hackathon to gain valuable work experience ,
              build an impressive portforio and increase your chances to land
              your job opportunities and accelerate your career growth.
            </p>
            <Link href={"/guest/challenges"}>
              <button className="w-[230px] mt-[30px] font-semibold h-[56px] rounded-[10px] bg-white text-[#2b71f0]">
                View Challenge
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
