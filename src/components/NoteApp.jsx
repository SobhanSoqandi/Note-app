import NoteList from './NoteList'
import AddNewNote from './AddNewNote'
import NoteStatus from './NoteStatus'

function NoteApp({ sortBy }) {
    return (
        <div className="note-app">
            <AddNewNote />
            <div className="note-container">
                <NoteStatus />
                <NoteList sortBy={sortBy} />
            </div>
        </div>
    )
}

export default NoteApp;