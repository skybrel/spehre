import CommunitiesFeed from './CommunitiesFeed';
import './SideNavbar.css';
import VerticalMenu from './VerticalMenu';

const SideNavbar = () => {
    return (
        <aside className="aside">
            <nav className="bg-white flex flex-col items-center w-[16rem] px-4 py-4">
                <VerticalMenu />
                <CommunitiesFeed />
            </nav>
        </aside>
    );
};

export default SideNavbar;
