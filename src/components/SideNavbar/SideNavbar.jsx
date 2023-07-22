import CommunitiesFeed from './CommunitiesFeed';
import './SideNavbar.css';
import VerticalMenu from './VerticalMenu';

const SideNavbar = () => {
    return (
        <aside className="w-full h-full">
            <nav className="bg-white flex flex-col items-center w-[18rem] px-4 py-6">
                <VerticalMenu />
                <CommunitiesFeed />
            </nav>
        </aside>
    );
};

export default SideNavbar;
