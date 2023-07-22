import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faPlus } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../../assets/profile-picture-5.jpg";
import DropBox from "../../../assets/Dropbox_Icon.svg";

const ProfileVisibility = () => {
  return (
    <div className="relative flex flex-col gap-1 p-1 mt-4">
      <p className="text-[13px] font-bold text-indigo-950">
        Make your profile visible to employers
      </p>
      <span className="text-[10px] text-gray-500">
        Your profile and career goals will appear when employers search our
        database for candidates
      </span>
      <div className="absolute top-0 right-0">
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-blue-800 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchChecked"
          defaultChecked
        />
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
          htmlFor="flexSwitchChecked"
        ></label>
      </div>
    </div>
  );
};

const OnlineLinks = () => {
    return (
        <div className="relative flex flex-col gap-2 p-1 mt-4">
            <p className="text-[13px] font-bold text-indigo-950">
                Online Links
            </p>
            <span className="text-[10px] text-gray-500">
                Add your online portfolio links to increase your profile strength
            </span>
            <div className="flex items-center justify-center mt-5 p-4 bg-gray-200 rounded-lg">
                <img src={DropBox} width={'30'} height={'30'} />
            </div>
            <span className="absolute top-0 right-0 flex items-center justify-center w-[1.25rem] h-[1.25rem] text-[0.5rem] text-white rounded-full bg-indigo-600">
                <FontAwesomeIcon icon={faPlus} />
              </span>
        </div>
    );
};

const UserCard = () => {
  return (
    <div className="p-4 -translate-y-4 bg-white w-[22rem]">
      <div className="flex flex-col items-center bg-transparent -translate-y-24 -z-40">
        <div className="w-[10rem] h-[10rem] overflow-clip rounded-full border-4 border-gray-100">
          <img className="w-[100%] object-cover object-top" src={Avatar} alt="" />
        </div>
        <div className="flex flex-col gap-[1px] p-1 text-center">
          <h1 className="font-medium text-[1rem] text-blue-950 overflow-text-ellipsis">
            Ayaat Khanna
          </h1>
          <p className="font-medium text-[0.75rem] items-center text-gray-500 flex flex-col">
            UI/UX Designer
            <span className="text-indigo-950">
              <FontAwesomeIcon icon={faUserGroup} /> 21 followers 43 following
            </span>
          </p>
        </div>
        <ProfileVisibility />
        <OnlineLinks />
      </div>
    </div>
  );
};

export default UserCard;
