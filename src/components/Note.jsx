import React, { useState } from 'react'
import db from '../appwrite/databases'
import DeleteIcon from "../assets/DeleteIcon"

function Note({ setNotes , noteDeta }) {

    const [note , setNote] = useState(noteDeta)

    const handleUpdates = () => {
        const completed = !note.completed

        db.notes.update(note.$id , {completed})

        setNote({...note , completed:completed})
    }


    const handleDelete = async () => {
        db.notes.delete(note.$id);
        setNotes((prevState) => prevState.filter((i) => i.$id !== note.$id));
    };



    return (
        <div className="note-wrapper">
            <span className="note-body" onClick={handleUpdates}>
                {
                    note.completed ? 
                    <s>{note.body}</s> : <b>{note.body}</b>
                }
            </span>

            <div onClick={handleDelete}>
                <DeleteIcon />
            </div>
        </div>
    )
}

export default Note
