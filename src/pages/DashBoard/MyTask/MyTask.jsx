


import DragAndDrop from '../../../component/Drag/DragAndDrop';

const MyTask = () => {
    return (
        <div className='px-10'>
            <h1>my task</h1>
            {/* <Task
             task={{id:123,title:"this is drap down", index:'1'}}
             ></Task> */}
            {/* <DragBoard></DragBoard> */}
            <DragAndDrop></DragAndDrop>
        </div >
    );
};

export default MyTask;