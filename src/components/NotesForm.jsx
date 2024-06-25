import db from "../appwrite/databases"


function NotesForm({ setNotes }) {

    const handleAdd = async (e) => {
        e.preventDefault()

        const noteBody = e.target.body.value

        if (noteBody === '') return

        try {

            const payLoad = {body:noteBody}

            const response = await db.notes.create(payLoad)

            setNotes((Prevstate) => [response , ...Prevstate])


            e.target.reset()
        }catch(error) {
            console.error(error)
        }
    }   


    return (
        <div>
            <form onSubmit={handleAdd} id="todo-form">
                <input  
                    type="text" 
                    name="body"
                    placeholder="🤔 What's on the agenda?"
                />
            </form>
        </div>
    )
}

export default NotesForm
