import CoverImage from "./CoverImage/CoverImage";
// import UserCard from "./UserCard/UserCard";
import UserInfo from "./UserInfo/UserInfo";
const UserDetail = () => {
    return (
        <div className="flex flex-col">
            <CoverImage />
            <section>
                <UserInfo />
            </section>
        </div>
    );
};

export default UserDetail;

