import { useState } from "react";

export default function PlayersInfo({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [editBtn, setEditBtn] = useState(false);

  function editBtnHandle() {
    setEditBtn((editing) => !editing);

    if (editBtn) {
      onChangeName(symbol, playerName);
    }
  }

  function changeHandle(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (editBtn) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={changeHandle} required />
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={editBtnHandle}>{editBtn ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
