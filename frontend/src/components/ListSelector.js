import React from 'react'

export default function ListSelector(props) {
  return (
    <div>
      <select style={{
        "width": "300px",
        "margin": "20px 0px",
        "fontSize": "25px",
        "color": "lightpink"
      }} onChange={props.selectList} value={props.selectedList}>
        {props.listData.map((list) => (
          <option key={Math.random()} value={list._id}>
            {list.name}
          </option>
        ))}
      </select>
    </div>
  )
}
