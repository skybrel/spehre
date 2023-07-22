import React from "react";
import Logo from "./Logo";
import Avatar from "../../assets/profile-picture-5.jpg";

const Navigation = () => {
  return (
    <React.Fragment>
      <Logo />
      <div className="flex items-center">
        <div className="">
          <div className="relative border border-solid border-neutral-300 flex w-full flex-wrap items-stretch p-1">
            <div className="flex items-center px-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" height={'1rem'} viewBox="0 0 512 512" className="scale-150" fill='rgba(0,0,0,0.5)'>
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </div>
            <input
              type="search"
              className="relative m-0 -mr-0.5 block flex-auto rounded-l bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary border-solid border-[3px] border-transparent border-l-gray-400"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            />
          </div>
        </div>
        <div className="relative inline-flex w-fit border-solid border-2 border-indigo-200">
          <div className="absolute bottom-2/4 left-auto right-0 top-2/4 z-10 inline-block -translate-y-3/4 translate-x-2/2 rotate-0 skew-x-0 skew-y-0 scale-x-50 scale-y-50 rounded-full bg-pink-700 p-3 text-xs"></div>
          <div className="flex items-center justify-center bg-transparent rounded-lg px-1.5 py-1.5 text-cente">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"1.65rem"}
              height={"2rem"}
              viewBox="0 0 448 512"
              fill="rgb(129 140 248)"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
            </svg>
          </div>
        </div>
        <div className="relative inline-flex w-fit border-solid border-2 border-indigo-200">
          <div className="flex items-center justify-center bg-transparent rounded-lg px-1.5 py-1.5 text-cente">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"2rem"}
              height={"2rem"}
              viewBox="0 0 512 512"
              fill="rgb(129 140 248)"
            >
              <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
          </div>
        </div>

        <div className="relative">
          <img className="w-12 h-12 rounded-full" src={Avatar} alt="" />
          <span className="bottom-0 left-9 absolute  w-3.5 h-3.5 bg-gray-100 border-2 border-white dark:border-gray-800 rounded-full flex items-center justify-center p-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
