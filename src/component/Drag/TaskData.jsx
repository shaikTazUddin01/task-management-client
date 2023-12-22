import React, { useState } from 'react';
import useAllTask from '../../Hooks/allTask/useAllTask';

const TaskData = () => {
    const [data]=useAllTask()
    const {item,setItem}=useState([])

    return (
        <div>
            {
                data?.map(item=>console.log(item))
            }
        </div>
    );
};

export default TaskData;