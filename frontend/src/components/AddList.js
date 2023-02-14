import React, { useState } from 'react'

function AddList(props) {
  const [name, setName] = useState("");

  return (
    <div style={{
      "width": "400px"
    }}>
      <input style={{
        "width": "250px",
        "margin": "20px 0px",
        "fontSize": "18px",
      }} value={name} name="newList" placeholder='Ajouter une nouvelle list' onChange={function (e) {
        setName(e.target.value)
      }} />
      <button
        style={{
          "width": "90px",
          "marginRight": "10xp",
          "margin": "20px 0px",
          "fontSize": "18px",
          "color": "lightpink"
        }}
        onClick={function () {
          props.addNewList(name)
        }}>Ajouter</button>
    </div>
  )
}

export default AddList
