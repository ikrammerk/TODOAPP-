import React, { useState } from 'react'

export default function TasksFilter(props) {
  const [selected, setSelected] = useState(false)
  function onchange(e) {
    setSelected(e.target.value);
    props.filter(selected)
  }
  return (
    <div style={{
      "margin": "20px"
    }}>
      <span>
        <input onChange={onchange} type={"checkbox"} value="Toutes" checked={selected === "Toutes"} />
        <span>Toutes</span>
      </span>
      <span>
        <input onChange={onchange} type={"checkbox"} value="A faire" checked={selected === "A faire"} />
        <span>A faire</span>
      </span>
      <span>
        <input onChange={onchange} type={"checkbox"} value="Faites" checked={selected === "Faites"} />
        <span>Faites</span>
      </span>
    </div>
  )
}
