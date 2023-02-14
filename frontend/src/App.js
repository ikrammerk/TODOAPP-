import React, { useState, useEffect } from "react"
import AddList from "./components/AddList"
import ListSelector from "./components/ListSelector"
import Tasks from "./components/Tasks"
import axios from "axios"
import './App.css';

function App() {
  const [selectedList, setSelectedList] = useState(-1);
  const [loadData, setLoadData] = useState(true);
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [tasksData, setTasksData] = useState([]);

  async function selectList(e) {
    setSelectedList(e.target.value)
    const { data } = await axios.get(`http://localhost:8000/list/${e.target.value}/tasks`);
    setTasks(data.tasks)
    setTasksData(data.tasks)
  }

  async function loadLists() {
    const { data } = await axios.get(`http://localhost:8000/list`);
    setLists(data)
    if (data.length !== 0) {
      setSelectedList(data[0]._id)
      selectList({
        target: {
          value: data[0]._id
        }
      })
    }
  }

  async function addNewList(name) {
    const newList = {
      name: name,
      tasks: []
    }
    const { data } = await axios.post(`http://localhost:8000/list/`, newList);
    if (data.status === 200) {
      setLoadData(true)
    }
  }

  async function TasksFilter(filterOption) {
    if (filterOption === "Toutes") {
      setTasksData(tasks => tasks)
    }

    if (filterOption === "A faire") {
      setTasksData(tasks => tasks.filter((task) => task.done === true))
    }

    if (filterOption === "Faites") {
      setTasksData(tasks => tasks.filter((task) => task.done === true))
    }
  }

  useEffect(() => {
    if (loadData === true) {
      loadLists()
      setLoadData(false)
    }
  }, [loadData])


  console.log(tasksData)
  return (
    <div className="App" style={{
      margin: "20px",
      width: "700px",
      height: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      border: "1px solid black",
      "backgroundColor": "lightyellow"
    }}>
      <h1 style={{
        "margin": "10px 5px",
        "fontSize": "60px",
        "color": "lightpink"
      }}>Todo List</h1>
      <AddList addNewList={addNewList} selectedList={selectedList} />
      <ListSelector listData={lists} selectList={selectList} selectedList={selectedList} />
      <Tasks filter={TasksFilter} selectList={selectList} selectedList={selectedList} taskListData={tasksData} />
    </div>
  );
}

export default App;
