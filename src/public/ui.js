import {saveNote} from './sockets.js';

const noteList = document.getElementById('notes');

const noteUI = note => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div>
        <h1>${note.title}</h1>
        <br>
        <p>${note.description}</p>
    </div>
    `;
    return div;
}

export const renderNotes = notes => {
    notes.forEach(note => noteList.append(noteUI(note)));
};

export const onHandleSubmit = (e) => {
    e.preventDefault();
    saveNote(
        noteForm['title'].value,
        noteForm['description'].value,
    );
}