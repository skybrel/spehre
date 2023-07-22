import {
  faHouse,
  faEnvelopeOpenText,
  faChartLine,
  faUser,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const VerticalMenu = () => {
  return (
    <ul className="flex flex-col items-center gap-2 list-none w-[100%] border border-transparent border-solid-3 border-b-gray-300 pb-8">
      <Menu icon={faHouse} name={'Home'} path={'/'} />
      <Menu icon={faEnvelopeOpenText} name={'Job Invites'} path={'/job_invite'} />
      <Menu icon={faChartLine} name={'Analytics'} path={'/analytics'} />
      <Menu icon={faUser} name={'Profile'} path={'/profile'} />
      <Menu icon={faBrain} name={'Explore'} path={'/explore'} />
    </ul>
  );
};

export default VerticalMenu;
