import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import React from "react";

const Page = () => {
  const data = [
    "As a Career Development and Job Readiness Program",
    "As a Skills Assessments Method after a course or a term",
    "As Extracurricular activities to complement academic courses",
    "As the Portfolio of the students",
    "As part of Capstone Projects or final-year assignments",
  ];
  return (
    <main>
      <NavBar />
      <main>
        <section className="firstSection flex max-md:space-y-[40px] flex-row max-md:flex-col lg:space-x-[30px]  max-md:py-[60px] lg:py-[80px] items-center justify-center">
          <div className="flex flex-col space-y-[20px] max-md:px-[10px]">
            <h2 className="text-[#2B71f0] lg:w-[560px] max-md:text-[16px] max-md:w-[390px] max-md:leading-[25px] leading-[33px] text-[26px] font-bold">
              Accelerate Your Students and Trainees Employability and Career
              Growth through Project-Based Learning Solutions
            </h2>
            <div className="flex flex-col lg:space-y-[20px] lg:w-[478px] max-md:w-[320px]">
              <p className="text-[16px] leading-[30px] text-[#2b3338] max-md:leading-[24px] max-md:text-[14px]">
                We partner with Universities, Schools, and Trainings
                institutions to provide valuable work experience for their
                students and trainees through project-based learning challenges
                and hackathons.
              </p>
            </div>
            <Link href="/login" className="bg-[#2B71f0] flex justify-center items-center mt-[40px] max-md:w-[170px] max-md:text-[13px] w-[207px] h-[46px]  text-[16px] rounded-[5px] font-semibold text-white">
              Partner with us
            </Link>
          </div>
          <img
            src="/girls.webp"
            alt="photo"
            className="h-[377px] w-[550px] max-md:w-[371px]  max-md:h-auto lg:rounded-[32px] max-md:rounded-[16px]"
          />
        </section>
        <section className="firstSection flex flex-col  pb-[50px] bg-[#F9FAFB] items-center  pt-[50px] max-md:pt-[40px] justify-center">
          <h2 className="text-[#03192E] leading-[48px]  max-md:text-[20px] text-[40px] w-[700px] text-center font-bold">
            Why we are solving this problem
          </h2>
          <div className="flex max-md:excluded flex-col items-center justify-center mt-[40px] max-md:mt-0 lg:w-[1072px] max-md:w-full space-y-[20px]">
            <div className="flex max-md:excluded flex-row lg:space-x-[20px] max-md:flex-col max-md:space-y-[15px]">
              <div className="max-md:excluded bg-[#2B71F0] space-y-[20px] lg:w-[371px]  rounded-[10px] max-md:w-[371px] lg:h-[371px] p-[48px] max-md:p-[30px] lg:pt-[40px] max-md:pt-[25px] flex flex-col">
                <img
                  src="/bagLogo.webp"
                  draggable="false"
                  className="lg:w-[60px] max-md:w-[60px] rounded-[10px] h-auto"
                  alt="bag logo"
                />
                <h2 className="font-bold text-white text-[19px]">
                  Employability and Career Development Opportunities{" "}
                </h2>
                <p className="text-white text-[13px] w-[294px]">
                  Students gain hands-on experience working on real-world
                  challenges and help them build professional networks that
                  increase their chances and readiness of landing job
                  opportunities, leading to career advancement and long-term
                  success.
                </p>
              </div>
              <div className="bg-[#2B71F0] max-md:excluded max-md:w-[371px] space-y-[20px] lg:w-[471px] lg:h-[371px] rounded-[10px] p-[48px] max-md:p-[30px] max-md:pt-[25px] pt-[40px] flex flex-col">
                <img
                  src="/bagLogo.webp"
                  draggable="false"
                  className="w-[60px] rounded-[10px] h-auto"
                  alt="bag logo"
                />
                <h2 className="font-bold text-white text-[19px]">
                  Practical Application of Classroom Knowledge
                </h2>
                <p className="text-white text-[13px]">
                  The Skills Challenges bridge the gap between theoretical
                  learning and practical application, reinforcing what students
                  learn in their academic courses.
                </p>
              </div>
              <div className="bg-[#2B71F0]  w-[371px] h-[371px] space-y-[20px] rounded-[10px] p-[48px] max-md:p-[30px] max-md:pt-[25px] pt-[40px] flex flex-col">
                <img
                  src="/bagLogo.webp"
                  draggable="false"
                  className="w-[60px] rounded-[10px] h-auto"
                  alt="bag logo"
                />
                <h2 className="font-bold text-white text-[19px]">
                  Students & Trainees Engagement{" "}
                </h2>
                <p className="text-white text-[13px]">
                  Embed and incorporate Skills Challenges into your courses to
                  give students and trainees hands-on projects and practices
                  that enhance their learning experience and skills mastery.
                  Competitive and project-based challenges keep students
                  motivated and actively engaged in their learning journey.
                </p>
              </div>
            </div>

            <div className="flex flex-row lg:space-x-[20px] max-md:space-y-[15px] max-md:flex-col">
              <div className="bg-[#2B71F0] space-y-[20px]  rounded-[10px] lg:w-[806px] max-md:w-[371px] lg:h-[238px] max-md:p-[30px] max-md:pt-[25px] p-[48px] pt-[40px] flex flex-col">
                <img
                  src="/bagLogo.webp"
                  draggable="false"
                  className="w-[60px] rounded-[10px] h-auto"
                  alt="bag logo"
                />
                <h2 className="font-bold text-white text-[19px]">
                  Access to Industry Experts & Mentors{" "}
                </h2>
                <p className="text-white text-[13px] lg:w-[700px]">
                  Skills Challenges expose students to industry experts and
                  mentors who offer guidance, support, and insights on the
                  trends of digital careers. This can help students gain a deep
                  understanding of their chosen field.
                </p>
              </div>
              <div className="bg-[#2B71F0]  space-y-[20px] rounded-[10px] lg:w-[417px] max-md:w-[371px] h-[238px]  p-[48px] pt-[40px] flex flex-col">
                <img
                  src="/bagLogo.webp"
                  draggable="false"
                  className="w-[60px] rounded-[10px] h-auto"
                  alt="bag logo"
                />
                <h2 className="font-bold text-white text-[19px]">
                  Skills Assessments{" "}
                </h2>
                <p className="text-white text-[13px]">
                  Embed our project-based tests and skills assessments directly
                  into your curriculum.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col pb-[50px] space-y-[50px]  items-center pt-[50px] justify-center">
          <h2 className="text-[#03192E] leading-[43px] text-[36px] max-md:w-[371px] max-md:leading-[30px]  max-md:text-[20px] w-[812px] text-center font-bold">
            Join a few Educational Institutions using Skills Challenges by
            Umurava
          </h2>
          <div className="flex flex-col space-y-[30px]">
            <div className="flex flex-row space-x-[20px] max-md:grid max-md:grid-cols-2">
              <img
                src="/tori.webp"
                alt="photo"
                className="w-[218px] max-md:w-[120px] h-auto"
              />
              <img
                src="/gdg.webp"
                alt="photo"
                className="w-[175px] max-md:w-[120px] h-auto"
              />
              <img
                src="/ashesi.webp"
                alt="photo"
                className="w-[216px] max-md:w-[120px] h-auto"
              />
              <img
                src="/kepler.webp"
                alt="photo"
                className="w-[91px] max-md:w-[120px] h-auto"
              />
              <img
                src="/hiil.webp"
                alt="photo"
                className="w-[197px] max-md:w-[120px] h-auto"
              />
              <img
                src="/ciba.webp"
                alt="photo"
                className="w-[95px] max-md:w-[120px] h-auto"
              />
            </div>
            <div className="flex flex-row space-x-[20px] max-md:grid max-md:grid-cols-2">
              <img
                src="/ared.webp"
                alt="photo"
                className="w-[172px] max-md:w-[120px] h-auto"
              />
              <img
                src="/igihe.webp"
                alt="photo"
                className="w-[189px] max-md:w-[120px] h-auto"
              />
              <img
                src="/viamo.webp"
                alt="photo"
                className="w-[216px] max-md:w-[120px] h-auto"
              />
              <img
                src="/kepler.webp"
                alt="photo"
                className="w-[91px] max-md:w-[120px] h-auto"
              />
              <img
                src="/laterite.webp"
                alt="photo"
                className="w-[197px] max-md:w-[120px] h-auto"
              />
              <img
                src="/sokofund.webp"
                alt="photo"
                className="w-[106px] h-auto"
              />
            </div>
          </div>
        </section>
        <section className="firstSection flex flex-col pb-[50px] bg-[#F9FAFB] items-center pt-[50px] justify-center">
          <h2 className="text-[#03192E] text-[32px] max-md:w-[317px] max-md:text-[20px] max-md:leading-[30px] w-[700px] leading-[38px] text-center font-bold">
            How Skills Challenges Program can Be Intergrated into your Learning
            Institution
          </h2>

          <main className="flex flex-row max-md:flex-col lg:space-x-[100px] max-md:space-y-[30px] mt-[70px] items-center justify-center">
            <div className="flex flex-col space-y-[30px] items-start">
              {data.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-row space-x-[10px] items-center max-md:w-[371px] justify-center"
                >
                  {" "}
                  <span className="text-white bg-[#2B71F0] w-[42px]  max-md:text-[12px] max-md:w-[30px] max-md:h-[30px] h-[42px]  rounded-full border-[2px] grid place-items-center border-gray-700">
                    {index + 1}
                  </span>
                  <p className="text-[#0e225A] text-[15px] w-[400px]">{data}</p>
                </div>
              ))}
            </div>
            <img
              src="/cardPhoto2.webp"
              alt="image"
              draggable={false}
              className="w-[450px] max-md:w-[371px] h-auto"
            />
          </main>
          <div className="bg-[url('/cardBg2.webp')]  max-md:w-[371px] grid place-items-center w-[1221px] mt-[70px] h-[351px] bg-no-repeat bg-cover rounded-[26px]">
            <div className="flex flex-col justify-center items-center space-y-[30px]">
              <h2 className="font-bold text-[32px] text-white max-md:text-[20px] max-md:w-[320px] w-[444px] text-center">
                Ready to transform your Learning Institutions
              </h2>
              <Link href="/login" className="w-[230px] flex justify-center items-center max-md:w-[200px] mt-[30px] font-semibold h-[56px] rounded-[10px] bg-white text-[#2b71f0]">
                Let's Partner
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </main>
  );
};

export default Page;
