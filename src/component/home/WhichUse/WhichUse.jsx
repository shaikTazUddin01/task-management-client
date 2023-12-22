import img from '../../../assets/banner-img/c.jpg';

const WhichUse = () => {
    return (
        <div className='my-20 px-5'>
            <h1 className='text-center text-4xl lg:text-6xl'>who can use ?</h1>
            <div className='w-[20%] lg:w-[10%] h-[2px] bg-orange-500 mx-auto my-3'></div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='w-full md:w-1/2'>
                    <img src={img} alt="" />
                </div>

                <div className='w-full md:w-1/2 space-y-2 mt-10'>
                    <div className="collapse collapse-arrow bg-orange-500 text-white "

                    >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Students
                        </div>
                        <div className="collapse-content">
                            <p>Students employ task management to organize assignments, exams, and study sessions, helping them stay on top of academic responsibilities.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-orange-500 text-white"

                    >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Freelancers

</div>
                        <div className="collapse-content">
                            <p>Freelancers use task management to organize and prioritize client projects, ensuring timely delivery and client satisfaction.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-orange-500 text-white"

                    >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Remote Workers
                        </div>
                        <div className="collapse-content">
                            <p>Task management systems provide visibility into remote team members' tasks and progress, aiding in performance monitoring</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-orange-500 text-white"

                    >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Project Managers
                        </div>
                        <div className="collapse-content">
                            <p>Project managers utilize task management to break down complex projects into manageable tasks,</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-orange-500 text-white"

                    >
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Individuals
                        </div>
                        <div className="collapse-content">
                            <p>Task management helps individuals set deadlines, track progress, and avoid procrastination, ultimately improving personal productivity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhichUse;