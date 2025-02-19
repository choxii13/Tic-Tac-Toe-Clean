import { useState } from "react";

export default function Player({ name, symbol, isActive, handleChangeName }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    if (isEditing) {
      handleChangeName(symbol, event.target.value);
    }
  }

  let playerName = <span className='player-name'>{name}</span>;

  if (isEditing) {
    playerName = (
      <input type='text' required value={name} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
