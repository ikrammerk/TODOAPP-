import React from 'react'
import Task from "./Task"
import TasksFilter from "./TasksFilter"
import AddTask from "./AddTask"

export default function Tasks(props) {
  return (
    <div style={{
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      border: "3px solid lightgray",
      backgroundColor: "white"
    }}>
      <AddTask selectList={props.selectList} selectedList={props.selectedList} />
      {props.taskListData.map((task) => (
        <Task selectList={props.selectList} selectedList={props.selectedList} key={task._id} task={task} />
      ))}
      <TasksFilter filter={props.filter} />
    </div>
  )
}
