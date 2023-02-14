import React, { useState } from 'react'
import axios from "axios"

export default function Task(props) {
  const [taskstatus, setTaskStatus] = useState(props.task.done)
  const [editTask, setEditTask] = useState(false)
  const [newName, setNewName] = useState("")

  async function deleteTask() {
    const { data } = await axios.delete(`http://localhost:8000/list/${props.selectedList}/tasks/${props.task._id}`);
    console.log(data)
    if (data.status === 204) {
      props.selectList({
        target: {
          value: props.selectedList
        }
      });
    }
  }

  async function makeTaskAsDone(e) {
    setTaskStatus()
    const updateTask = {
      _id: props.task._id,
      label: props.task.label,
      done: e.target.checked
    }
    const { data } = await axios.put(`http://localhost:8000/list/${props.selectedList}/tasks`, updateTask);
    props.selectList({
      target: {
        value: props.selectedList
      }
    });
  }

  async function updateTaskName(e) {
    setTaskStatus()
    const updateTask = {
      _id: props.task._id,
      label: newName,
      done: e.target.checked
    }
    const { data } = await axios.put(`http://localhost:8000/list/${props.selectedList}/tasks`, updateTask);
    props.selectList({
      target: {
        value: props.selectedList
      }
    });

    setEditTask(false)
  }

  return (
    <div
      key={props.task._id}
      style={{
        "width": "auto",
        "marginLeft": "10%",
        "marginRight": "10%",
        "display": 'flex'
      }}
    >
      <input
        onChange={makeTaskAsDone}
        type={"checkbox"}
        checked={taskstatus} />

      <input
        style={{
          "marginLeft": "5px",
          "marginRight": "80px",
          display: editTask ? "inline" : "none"
        }}
        defaultValue={props.task.label}
        onChange={function (e) {
          setNewName(e.target.value)
        }}
        type={"text"}
        checked={taskstatus} />

      <div style={{
        "marginLeft": "5px",
        "marginRight": "80px",
        display: !editTask ? "inline" : "none",
        "textDecoration": props.task.done ? "line-through" : ""
      }}
        onDoubleClick={() => {
          setEditTask(true)
        }}
      >{props.task.label}</div>
      <button onClick={deleteTask} style={{ display: !editTask ? "inline" : "none" }}>Delete</button>
      <button onClick={updateTaskName} style={{ display: editTask ? "inline" : "none" }}>Update</button>
    </div>
  )
}
