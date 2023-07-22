import ProfilePic from '../../assets/web-developer.svg';
import DeveloperCard from './DeveloperCard';
const CommunitiesFeed = () => {
    return (
        <div className='w-[100%] p-2 flex flex-col gap-4'>
            <h3 className='text-xl font-semibold text-blue-950 text-left mt-4'>Communities Feed</h3>
            <div className='flex flex-col gap-3'>
                <ul className='flex flex-col gap-4'>
                    <DeveloperCard title={'Indonesia UI Developer'} subTitle={'734 members'} profilePic={ProfilePic} bgColor={'bg-pink-200'} />
                    <DeveloperCard title={'Indonesia UX Research'} subTitle={'125 members'} profilePic={ProfilePic} bgColor={'bg-yellow-200'} />
                    <DeveloperCard title={'Prototyping Club'} subTitle={'891 members'} profilePic={ProfilePic} bgColor={'bg-orange-200'} />
                    <DeveloperCard title={'Indonesia UI Developer'} subTitle={'241 members'} profilePic={ProfilePic} bgColor={'bg-cyan-200'} />
                </ul>
                <span className='font-medium text-[0.7rem] text-center text-indigo-950'>{`Show 5 more ${'>'}`}</span>
            </div>
        </div>
    );
};

export default CommunitiesFeed;
