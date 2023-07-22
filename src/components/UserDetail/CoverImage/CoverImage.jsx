import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import CoverImg from '../../../assets/6025521.jpg';

const CoverImage = () => {
    return (
        <div className="relative">
            <img src={CoverImg} className="inline-block w-screen object-cover object-center h-[9rem]" />
            <span className="absolute flex items-center justify-center right-3 top-3 w-[2rem] h-[2rem] rounded-full bg-white">
                <FontAwesomeIcon icon={faPencil} />
            </span>
        </div>
    );
};

export default CoverImage;
