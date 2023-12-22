import { useState, useEffect } from 'react';
import DropZone from './DropZone';
import DraggableItem from './DraggableItem';
import useAllTask from '../../Hooks/allTask/useAllTask';

const DragAndDrop = () => {
    const [data, isPending] = useAllTask();
    const [todo, setTodo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [complete, setComplete] = useState([]);

    useEffect(() => {
        if (!isPending && data) {
            setTodo(data);
        }
    }, [data, isPending]);

    const handleDrop = (_id, dropZone) => {
        const draggedItem = findItemById(_id, todo, ongoing, complete);

        if (draggedItem) {
            setTodo((prevTodo) => removeItemById(_id, prevTodo));
            setOngoing((prevOngoing) => removeItemById(_id, prevOngoing));
            setComplete((prevComplete) => removeItemById(_id, prevComplete));

            switch (dropZone) {
                case 'todo':
                    setTodo((prevTodo) => [...prevTodo, draggedItem]);
                    break;
                case 'ongoing':
                    setOngoing((prevOngoing) => [...prevOngoing, draggedItem]);
                    break;
                case 'complete':
                    setComplete((prevComplete) => [...prevComplete, draggedItem]);
                    break;
                default:
                    break;
            }
        }
    };

    const findItemById = (_id, ...arrays) => {
        for (const array of arrays) {
            const item = array.find((item) => item._id === _id);
            if (item) {
                return item;
            }
        }
        return null;
    };

    const removeItemById = (_id, array) => {
        return array.filter((item) => item._id !== _id);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <DropZone onDrop={(_id) => handleDrop(_id, 'todo')} zoneName="To Do">
                {todo?.map((item) => (
                    <DraggableItem key={item._id} _id={item._id} content={item?.title} />
                ))}
            </DropZone>

            <DropZone onDrop={(_id) => handleDrop(_id, 'ongoing')} zoneName="Ongoing">
                {ongoing?.map((item) => (
                    <DraggableItem key={item._id} _id={item._id} content={item?.title}  />
                ))}
            </DropZone>

            <DropZone onDrop={(_id) => handleDrop(_id, 'complete')} zoneName="Complete">
                {complete?.map((item) => (
                    <DraggableItem key={item._id} _id={item._id} content={item?.title} />
                ))}
            </DropZone>
        </div>
    );
};

export default DragAndDrop;
