import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd' 
function Course() {
  const courses=[
    {id:1,name:'HTML'},
    {id:2,name:'CSS'},
    {id:3,name:'JavaScript'},
    {id:4,name:'React'},
    {id:5,name:'Redux'},
    {id:6,name:'Node.js'},
  ]
  const onDragEnd=(result)=>{
  
    
  }
  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={'courses'}>
     {
      (provided)=>{
        
      }
     }

      </Droppable>
    </DragDropContext>
    </>
  )
}

export default Course