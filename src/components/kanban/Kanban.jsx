import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import mockData from "../../mockData";
import { Card } from "../card/Card";
import { useState } from "react";
import "./kanban.scss";

export function Kanban() {
    const [data, setData] = useState(mockData);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
            // Obtener el índice de la columna de origen
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId);
            // Obtener el índice de la columna de destino
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId);
            const sourceCol = data[sourceColIndex];
            const destinationCol = data[destinationColIndex];

            const sourceTasks = [...sourceCol.tasks];
            const destinationTasks = [...destinationCol.tasks];

            const [removed] = sourceTasks.splice(source.index, 1);
            destinationTasks.splice(destination.index, 0, removed);

            data[sourceColIndex].tasks = sourceTasks;
            data[destinationColIndex].tasks = destinationTasks;

            setData(data);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="kanban">
                {data.map((section) => (
                    <Droppable key={section.id} droppableId={section.id}>
                        {(provided) => (
                            <div {...provided.droppableProps} className="kanban__section" ref={provided.innerRef}>
                                <div className="kanban__section__title">{section.title}</div>
                                <div className="kanban__section__content">
                                    {section.tasks.map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style,
                                                        opacity: snapshot.isDragging ? "0.5" : "1"
                                                    }}
                                                >
                                                    <Card>{task.title}</Card>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                ))}
            </div>
        </DragDropContext>
    );
}