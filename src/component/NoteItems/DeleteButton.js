import React from "react";

function DeleteButton({id, onDelete}){
    return <button className="btnItemDelete" onClick={() => onDelete(id)}>Hapus</button>
}

export default DeleteButton;