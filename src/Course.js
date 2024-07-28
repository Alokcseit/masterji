import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const courses = [
  { id: '1', name: 'HTML' },
  { id: '2', name: 'CSS' },
  { id: '3', name: 'JavaScript' },
  { id: '4', name: 'React' },
  { id: '5', name: 'Redux' },
  { id: '6', name: 'Node.js' },
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const getCourseStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'white',
  padding: '16px',
  minHeight: '100vh',
});

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: '16px',
  margin: '0 0 8px 0',
  background: isDragging ? 'lightgreen' : 'grey',
  color: isDragging ? 'white' : 'black',
  ...draggableStyle,
});

function Course() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(courses);
  }, []);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    // If the item is dropped outside the list
    if (!destination) {
      return;
    }

    // If the item is dropped in the same position
    if (destination.index === source.index) {
      return;
    }

    // Reorder the list
    const reorderedCourses = reorder(items, source.index, destination.index);
    setItems(reorderedCourses);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppableCourses">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getCourseStyle(snapshot.isDraggingOver)}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                  >
                    {item.name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Course;
