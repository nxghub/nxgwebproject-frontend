import "./index.css";
import { FiArrowUpRight } from "react-icons/fi";
import CustomButton from "../../components/Button";
import Footer from "../../components/Footer";
import { BsArrowUpRight } from "react-icons/bs";
import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
const Career = () => {
  useEffect(() => {
    //page to scroll to top unmount
    window.scrollTo({ top: 0, behavior: "smooth" });
    // document.documentElement.scrollTop = 0; // For most modern browsers
  }, []);
  return (
    <>
      <Header />
      <div
        className="relative min-h-[550px] text-primary font-medium rounded-[20px] bg-cover bg-center bg-no-repeat mx-4 md:mx-4"
        style={{ backgroundImage: "url(/careerBg.png)" }}>
        <div className="text-left pl-8 md:pl-20 pt-28 max-w-[60rem]">
          <p className="mt-16 text-[28px] md:text-[64px]">
            Engineering The Future <br /> Through Technology <br /> Innovation
          </p>
          <p className="text-[18px] md:text-[28px] py-4 md:py-6">
            With NXG-HUB
          </p>

          <CustomButton children="Learn More" className="text-sm" />
        </div>
        <p className="text-center text-[16px] md:text-[20px] py-4 mt-[9rem]">
          NXG-HUB | CAREERS
        </p>
      </div>
      <div className="flex flex-col items-center py-[5.5rem]">
        <div className="md:hidden flex justify-center gap-2 text-center relative rounded-[20px] border-[#eef2f6] border-[0.5px] mb-8 w-[40%] md:w-[20%] py-2">
          <span>
            <img src="/tag.png" alt="icon" />
          </span>
          <span>
            <h2 className="text-[#2596BE] font-semibold text-md md:text-[36px]">
              Careers
            </h2>
          </span>
        </div>
        <div className="hidden md:block gap-2 text-center relative rounded-[20px] border-[#eef2f6] border-[0.5px] mb-8 w-[40%] md:w-[20%] py-2">
          <h2 className="text-[#2596BE] font-semibold text-md md:text-[36px] ml-4">
            Careers
          </h2>
          <span className="absolute md:top-4 md:flex md:justify-center md:w-[calc(100%-10rem)] ml-2">
            <img src="/tag.png" alt="icon" className="px-4 " />
          </span>
        </div>
        <span className="text-[#717171] md:px-0 px-4 text-center text-normal md:text-[18px] font-normal">
          Job Opening At NXG-HUB Digital Technologies. Apply Now!
        </span>
      </div>
      <form
        name="career-form"
        encType="multipart/form-data"
        method="POST"
        data-netlify="true">
        <input type="hidden" name="form-name" value="career-form" />
        <div className="bg-gradient-to-r from-[#a0d9ed] via-[#89CFE8] to-[#D5D5D5] py-14 md:py-[3rem] md:px-4 px-8">
          <div className="mx-auto rounded-2xl bg-primary md:px-14 py-10 md:py-8 md:relative">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(100%,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-6 md:gap-[10rem] ">
              <div className="flex flex-col w-full md:w-auto px-[0.55rem] md:pl-0 md:pt-[3rem]">
                <input
                  required
                  name="applicant_name"
                  className="py-2 md:py-4 px-6 rounded-[32px] focus:outline-0 md:w-[100%] border border-[#A8D5E5]"
                  type="text"
                  placeholder="Name"
                  id="name"
                />
                <input
                  name="applicant_phone_number"
                  className="py-2 md:py-4 px-6 mt-3 rounded-[32px] focus:outline-0 md:w-[100%] border border-[#A8D5E5]"
                  type="tel"
                  placeholder="Contact Number"
                  id="phone_number"
                />
                <input
                  required
                  name="applicant_email"
                  className="py-2 md:py-4 px-6 mt-3 rounded-[32px] focus:outline-0 md:w-[100%]  border border-[#A8D5E5]"
                  type="email"
                  placeholder="Email"
                  id="email"
                />
                <input
                  name="applicant_yoe"
                  className="py-2 md:py-4 px-6  mt-3  rounded-[32px] focus:outline-0 md:w-[100%] border border-[#A8D5E5]"
                  type="number"
                  placeholder="Years of Experience"
                  id="experience"
                />
                <textarea
                  name="applicant_message"
                  className="py-2 md:py-4 px-6 mt-3 rounded-[20px] focus:outline-0 md:w-[100%]  border border-[#A8D5E5]"
                  type="text"
                  placeholder="Other Details"
                  id="other_details"
                />
              </div>

              <div className="flex flex-col md:justify-self-end sm:justify-self-start ">
                <h2 className="text-[18px] pl-6 md:pl-0 md:text-[28px] mb-2 whitespace-nowrap font-medium text-[#717171]">
                  Applying for which post
                </h2>
                <div className="p-2 font-medium pl-10 md:pl-8 flex text-[#717171] text-normal md:text-[20px]">
                  <input
                    className="mr-6"
                    type="radio"
                    name="post"
                    id="product_designer"
                    value="product_designer"
                  />
                  Product Designer (UI/UX)
                </div>
                <div className="p-2 font-medium pl-10 md:pl-8 flex text-[#717171]  text-normal md:text-[20px]">
                  <input
                    className="mr-6"
                    type="radio"
                    name="post"
                    id="product_manager"
                    value="product_manager"
                  />
                  Project/Product Manager
                </div>
                <div className="p-2 font-medium pl-10 md:pl-8 flex text-[#717171]  text-normal md:text-[20px]">
                  <input
                    className="mr-6"
                    type="radio"
                    name="post"
                    id="software_developer"
                    value="software_developer"
                  />
                  Software Developer
                </div>
                <div className="p-2 font-medium pl-10 md:pl-8 flex text-[#717171]  text-normal md:text-[20px]">
                  <input
                    className="mr-6"
                    type="radio"
                    name="post"
                    id="digital_marketer"
                    value="digital_marketer"
                  />
                  Digital Marketer
                </div>
                <div className="p-2 font-medium pl-10 md:pl-8 flex text-[#717171]  text-normal md:text-[20px]">
                  <input
                    className="mr-6"
                    type="radio"
                    name="post"
                    id="it_instructor"
                    value="it_instructor"
                  />
                  IT Instructor
                </div>
                <div className="flex pl-10 md:pl-0  flex-col mt-6">
                  <h2 className="text-[18px]  md:text-[28px] mb-2 font-medium text-[#717171]">
                    Upload your resume
                  </h2>
                  <input
                    required
                    className="p-4 sm:pl-0 md:mb-[5rem]"
                    type="file"
                    name="applicant_cv"
                    id="applicant_cv"
                  />
                  <div className="md:ml-[3.2rem] md:absolute md:bottom-[20px]">
                    <button
                      type="submit"
                      className="group text-primary rounded-[32px] py-2 my-[2.5rem] md:my-0 pr-2 md:ml-0 ml-[3rem] bg-[#2596be] hover:bg-[#2596be]  flex items-center sm:w-[200px]">
                      <span className="text-[20px] font-bold mr-20 sm:ml-4 sm:mr-[3.9rem]">
                        Submit
                      </span>
                      <span className="group-hover:rotate-45 transition-transform transform origin-center rounded-full p-2 text-[#46A6C8] bg-primary">
                        <BsArrowUpRight size={25} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Career;
