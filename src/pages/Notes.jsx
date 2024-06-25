import { useEffect , useState } from "react"
import db from "../appwrite/databases"
import { Query } from "appwrite"
import NotesForm from "../components/NotesForm"
import Note from "../components/Note"
import ThemeOption from "../components/ThemeOption"


const Notes = () => {

    const [notes , setNotes] = useState([])


    useEffect(() => {
        init()
    } , [])

    const init = async () => {
        const response = await db.notes.list(
            [Query.orderDesc('$createdAt')]
        )

        setNotes(response.documents)
    }



    return (
        <div>

            <div>
                <h1>✍️ My Todo List</h1>
            </div>

            <div className="theme-options">
                <ThemeOption theme="dark" />
                <ThemeOption theme="light" />
                <ThemeOption theme="purple" />
            </div>

            <NotesForm setNotes={setNotes} />

            {notes.map(note => (
                <Note key={note.$id} noteDeta={note} setNotes={setNotes} />
            ))}
        </div>
    )
}

export default Notes