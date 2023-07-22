import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  const {icon, name, path} = props;
  return (
    <li className="w-[100%]">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex items-center gap-3 text-purple-600 hover:text-purple-900 font-normal text-[1rem] p-2 hover:outline hover:outline-3 hover:outline-gray-200 hover:bg-gray-100 rounded-sm ${
            isActive
              ? "outline outline-3 outline-gray-200 bg-gray-100 rounded-sm text-purple-900"
              : ""
          }`
        }
      >
        <FontAwesomeIcon icon={icon} className="text-[1rem]" />
        <span className="text-[0.75rem] font-semibold">{name}</span>
      </NavLink>
    </li>
  );
};

Menu.defaultProps = {
    icon: '',
    name: '',
    path: ''
};

Menu.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    path: PropTypes.string
};

export default Menu;
