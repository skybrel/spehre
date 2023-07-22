import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faEnvelopeOpenText, faChartLine, faUser, faBrain } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const VerticalMenu = () => {
    return (
        <nav className="bg-white flex items-center w-[21rem] px-4 py-6">
            <ul className="flex flex-col items-center gap-2 list-none w-[100%] border border-transparent border-solid-3 border-b-gray-300 pb-8">
                <li className='w-[100%]'>
                    <NavLink to='/' className={({ isActive }) => `flex items-center gap-3 text-purple-600 hover:text-purple-900 font-normal text-[1rem] p-4 hover:outline hover:outline-3 hover:outline-gray-200 hover:bg-gray-100 rounded-sm ${(isActive ? 'outline outline-3 outline-gray-200 bg-gray-100 rounded-sm text-purple-900' : '')}`} >
                        <FontAwesomeIcon icon={faHouse} className='text-[1.15rem]' />
                        <span className='text-[1.15rem]'>Home</span>
                    </NavLink>
                </li>
                
                <li className='w-[100%]'>
                    <NavLink to='/job_invite' className={({ isActive }) => `flex items-center gap-3 text-purple-600 hover:text-purple-900 font-normal text-[1rem] p-4 hover:outline hover:outline-3 hover:outline-gray-200 hover:bg-gray-100 rounded-sm ${(isActive ? 'outline outline-3 outline-gray-200 bg-gray-100 rounded-sm text-purple-900' : '')}`} >
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className='text-[1.15rem]' />
                        <span className='text-[1.15rem]'>Job Invites</span>
                    </NavLink>
                </li>
                <li className='w-[100%]'>
                    <NavLink to='/analytics' className={({ isActive }) => `flex items-center gap-3 text-purple-600 hover:text-purple-900 font-normal text-[1rem] p-4 hover:outline hover:outline-3 hover:outline-gray-200 hover:bg-gray-100 rounded-sm ${(isActive ? 'outline outline-3 outline-gray-200 bg-gray-100 rounded-sm text-purple-900' : '')}`} >
                        <FontAwesomeIcon icon={faChartLine} className='text-[1.15rem]' />
                        <span className='text-[1.15rem]'>Analytics</span>
                    </NavLink>
                </li>
                <li className='w-[100%]'>
                    <NavLink to='/my_profile' className={({ isActive }) => `flex items-center gap-3 text-purple-600 hover:text-purple-900 font-normal text-[1rem] p-4 hover:outline hover:outline-3 hover:outline-gray-200 hover:bg-gray-100 rounded-sm ${(isActive ? 'outline outline-3 outline-gray-200 bg-gray-100 rounded-sm text-purple-900' : '')}`} >
                        <FontAwesomeIcon icon={faUser} className='text-[1.15rem]' />
                        <span className='text-[1.15rem]'>My Profile</span>
                    </NavLink>
                </li>

                <li className='w-[100%]'>
                    <NavLink to='/explore' className={({ isActive }) => `flex items-center gap-3 text-purple-600 hover:text-purple-900 font-normal text-[1rem] p-4 hover:outline hover:outline-3 hover:outline-gray-200 hover:bg-gray-100 rounded-sm ${(isActive ? 'outline outline-3 outline-gray-200 bg-gray-100 rounded-sm text-purple-900' : '')}`} >
                        <FontAwesomeIcon icon={faBrain} className='text-[1.15rem]' />
                        <span className='text-[1.15rem]'>Explore</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default VerticalMenu;
