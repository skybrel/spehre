import ProfilePic from '../../assets/web-developer.svg';

const CommunitiesFeed = () => {
    return (
        <div className='w-[100%] p-4 flex flex-col gap-8'>
            <h3 className='text-2xl font-semibold text-blue-950 text-left'>Communities Feed</h3>
            <div className='flex flex-col gap-3'>
                <ul className='flex flex-col gap-4'>
                    <li className="flex items-center gap-1">
                        <div className="bg-blue-200 w-[4rem] h-[4rem] rounded-full overflow-hidden">
                            <img src={ProfilePic} className='inline-block w-[5rem] h-[5rem] object-cover object-top' />
                        </div>
                        <div className="flex flex-col gap-[1px] p-1">
                            <p className='font-medium text-[1.15rem] text-blue-950 overflow-text-ellipsis'>Indonesia UI Designer</p>
                            <span className='font-medium text-[1rem] text-gray-500'>734 members</span>
                        </div>
                    </li>

                    <li className="flex items-center gap-1">
                        <div className="bg-pink-200 w-[4rem] h-[4rem] rounded-full overflow-hidden">
                            <img src={ProfilePic} className='inline-block w-[5rem] h-[5rem] object-cover object-top' />
                        </div>
                        <div className="flex flex-col gap-[1px] p-1">
                            <p className='font-medium text-[1.15rem] text-blue-950 overflow-text-ellipsis'>Indonesia UX Research</p>
                            <span className='font-medium text-[1rem] text-gray-500'>125 members</span>
                        </div>
                    </li>

                    <li className="flex items-center gap-1">
                        <div className="bg-yellow-200 w-[4rem] h-[4rem] rounded-full overflow-hidden">
                            <img src={ProfilePic} className='inline-block w-[5rem] h-[5rem] object-cover object-top' />
                        </div>
                        <div className="flex flex-col gap-[1px] p-1">
                            <p className='font-medium text-[1.15rem] text-blue-950 overflow-text-ellipsis'>Indonesia UI Designer</p>
                            <span className='font-medium text-[1rem] text-gray-500'>891 members</span>
                        </div>
                    </li>

                    <li className="flex items-center gap-1">
                        <div className="bg-orange-200 w-[4rem] h-[4rem] rounded-full overflow-hidden">
                            <img src={ProfilePic} className='inline-block w-[5rem] h-[5rem] object-cover object-top' />
                        </div>
                        <div className="flex flex-col gap-[1px] p-1">
                            <p className='font-medium text-[1.15rem] text-blue-950 overflow-text-ellipsis'>Indonesia UI Designer</p>
                            <span className='font-medium text-[1rem] text-gray-500'>241 members</span>
                        </div>
                    </li>
                </ul>
                <span className='font-medium text-xl text-center text-indigo-950'>{`Show 5 more ${'>'}`}</span>
            </div>
        </div>
    );
};

export default CommunitiesFeed;
