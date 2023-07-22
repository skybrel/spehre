import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className="relative p-4 text-left pb-6 border border-transparent border-b-gray-200">
        <p className="pr-12 text-[1rem] text-gray-600">
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
      <div className="mt-4 text-center bg-white rounded">
        <p>{selectedOption.content}</p>
      </div>
    </div>
  );
};

export default UserInfo;
