import DragAndDrop from '../../../component/Drag/DragAndDrop';

const MyTask = () => {
    return (
        <div className='px-10'>
            <h1 className='uppercase text-4xl lg:text-6xl text-center mt-10 font-bold'>my task</h1>
            <div className='w-[10%] h-[2px] bg-orange-500 mx-auto mt-2 mb-10'></div>
            {/* <Task
             task={{id:123,title:"this is drap down", index:'1'}}
             ></Task> */}
            {/* <DragBoard></DragBoard> */}
            <DragAndDrop></DragAndDrop>
        </div >
    );
};

export default MyTask;