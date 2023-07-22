import CoverImage from "./CoverImage/CoverImage";
import UserCard from "./UserCard/UserCard";
import UserInfo from "./UserInfo/UserInfo";
const UserDetail = () => {
    return (
        <div className="flex flex-col">
            <CoverImage />
            <section className="flex flex-row items-start gap-4 justify-start p-4">
                <UserCard />
                <UserInfo />
            </section>
        </div>
    );
};

export default UserDetail;

