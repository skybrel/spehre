import PropTypes from "prop-types";

const DeveloperCard = (props) => {
  const { profilePic, title, subTitle, bgColor } = props;

  return (
    <li className="flex items-center gap-1">
      <div className={`${bgColor} w-[2.75rem] h-[2.75rem] rounded-full overflow-hidden`}>
        <img
          src={profilePic}
          className="inline-block w-[4rem] h-[4rem] object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-[1px] p-1">
        <p className="font-medium text-[0.75rem] text-blue-950 overflow-text-ellipsis">
          {title}
        </p>
        <span className="font-medium text-[0.6rem] text-gray-500">
          {subTitle}
        </span>
      </div>
    </li>
  );
};

DeveloperCard.defaultProps = {
  profilePic: "",
  title: "",
  subTitle: "",
  bgColor: "",
};

DeveloperCard.propTypes = {
  profilePic: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  bgColor: PropTypes.string,
};

export default DeveloperCard;
