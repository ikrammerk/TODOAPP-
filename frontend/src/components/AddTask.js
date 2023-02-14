import React, { useState } from 'react'
import axios from "axios"

export default function AddTask(props) {
  const [newTask, setNewTask] = useState("")

  function onChange(e) {
    setNewTask(e.target.value)
  }

  async function addNewTask() {
    const newTaskBody = {
      label: newTask,
      done: false
    }
    const { data } = await axios.post(`http://localhost:8000/list/${props.selectedList}/tasks`, newTaskBody);
    if (data.status === 200) {
      setNewTask("")
      props.selectList({
        target: {
          value: props.selectedList
        }
      })
    }
  }

  return (
    <div style={{
      "width": "400px"
    }}>
      <input style={{
        "width": "200px",
        "margin": "20px 0px",
        "fontSize": "20px",
      }} value={newTask} onChange={onChange} name="newTask" placeholder='Saisssez une nouvelle tache' />
      <button style={{
        "width": "90px",
        "marginRight": "10xp",
        "margin": "20px 0px",
        "fontSize": "20px",
        "color": "lightpink"
      }} onClick={addNewTask}>Ajouter</button>
    </div>
  )
}
