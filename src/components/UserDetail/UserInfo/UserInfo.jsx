import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faBriefcase, faPlus, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className="relative p-4 text-left pb-6 border border-transparent border-b-gray-200">
        <p className="pr-14 text-[1rem] text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <span className="absolute flex items-center justify-center right-3 top-3 w-[1.6rem] h-[1.6rem] text-[0.75rem] text-white rounded-full bg-indigo-600">
            <FontAwesomeIcon icon={faPencil} />
        </span>
      </div>
      <div className="flex flex-col p-4 mt-4 border border-transparent border-b-gray-200">
        <h4 className="text-xl text-indigo-950 font-semibold text-left">Experience</h4>
        <div className="flex flex-row items-top gap-2 mt-8">
            <div className="w-[7rem] h-[3rem] rounded-[50%] bg-indigo-200 flex items-center justify-center">
                <FontAwesomeIcon icon={faBriefcase} className="text-indigo-900 text-3xl" />
            </div>
            <div className="relative flex flex-col gap-4 items-start">
                <div className="flex flex-col gap-[1px] p-1 items-start">
                    <p className="font-medium text-[1rem] text-blue-950 overflow-text-ellipsis">
                        Crisis Intervention Specialist
                    </p>
                    <p className="font-medium text-[0.6rem] text-gray-500 flex flex-col items-start">
                        January 2023 - Present
                        <span className="text-gray-800">lcoderz - Ahmedabad, India</span>
                    </p>
                </div>
                <p className="text-left text-[0.85rem] text-gray-800 pr-14">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="absolute flex flex-row gap-2 right-3 top-3">
                    <span className="flex items-center justify-center w-[1.6rem] h-[1.6rem] text-[0.75rem] text-white rounded-full bg-indigo-600">
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                    <span className="flex items-center justify-center w-[1.6rem] h-[1.6rem] text-[0.75rem] text-white rounded-full bg-indigo-600">
                        <FontAwesomeIcon icon={faPencil} />
                    </span>
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col p-4 mt-4 border border-transparent border-b-gray-200">
        <h4 className="text-xl text-indigo-950 font-semibold text-left">Education</h4>
        <div className="flex flex-row items-top gap-2 mt-8">
            <div className="w-[3.6rem] h-[3rem] rounded-[50%] bg-indigo-200 flex items-center justify-center">
                <FontAwesomeIcon icon={faGraduationCap} className="text-indigo-900 text-3xl" />
            </div>
            <div className="relative flex flex-col gap-4 items-start w-full">
                <div className="flex flex-col gap-[1px] p-1 items-start">
                    <p className="font-medium text-[1rem] text-blue-950 overflow-text-ellipsis">
                        BE - Electronics & Telecommunication Engg.
                    </p>
                    <p className="font-medium text-[0.6rem] text-gray-500 flex flex-col items-start">
                        Aug 2015 - June 2019
                        <span className="text-gray-800">SBJITMR - Nagpur, India</span>
                    </p>
                </div>
                <div className="absolute flex flex-row gap-2 right-3 top-3">
                    <span className="flex items-center justify-center w-[1.6rem] h-[1.6rem] text-[0.75rem] text-white rounded-full bg-indigo-600">
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                    <span className="flex items-center justify-center w-[1.6rem] h-[1.6rem] text-[0.75rem] text-white rounded-full bg-indigo-600">
                        <FontAwesomeIcon icon={faPencil} />
                    </span>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

const UserInfo = () => {
  const options = [
    { id: 1, text: "About", content: <About /> },
    {
      id: 2,
      text: "Skills & Certificate",
      content: "This is the content for Option 2.",
    },
    { id: 3, text: "Posts", content: "This is the content for Option 3." },
    { id: 4, text: "Spaces", content: "This is the content for Option 4." },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col w-[70%] ml-auto items-center justify-end h-full bg-white">
      <div className="space-x-4 flex w-[100%] sm:space-x-0 sm:flex-row sm:justify-start">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option)}
            className={`nav-pill text-[1rem] p-4 w-[100%] text-left border border-4 border-transparent hover:shadow-[0_4px_0_0_rgba(37,99,235,0.25)] ${
              selectedOption.id === option.id ? "shadow-[0_4px_0_0_rgba(37,99,235,1)]" : ""
            }`}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="mt-4 h-screen text-center bg-white rounded">
        <p>{selectedOption.content}</p>
      </div>
    </div>
  );
};

export default UserInfo;
