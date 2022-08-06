import React from "react";

function MoveButton({id, onMove}){
    return <button className="btnItemMove" onClick={() => onMove(id)}>Pindahkan</button>
}

export default MoveButton;