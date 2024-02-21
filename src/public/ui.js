import {saveNote, deleteNote, getNote, updateNote} from './sockets.js';

const noteList = document.getElementById('notes');
const title = document.getElementById('title');
const description = document.getElementById('description');

let saveId = '';

const noteUI = note => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div>
        <h1>${note.title}</h1>
        <div>
            <button class="delete" data-id="${note._id}">Delete</button>
            <button class="update" data-id="${note._id}">Update</button>
        </div>
        <p>${note.description}</p>
    </div>
    `;

    const btnDelete= div.querySelector('.delete');
    const btnUpdate = div.querySelector('.update');

    btnDelete.addEventListener('click', e => deleteNote(btnDelete.dataset.id));
    btnUpdate.addEventListener('click', e => getNote(btnUpdate.dataset.id));

    return div;
}

export const renderNotes = notes => {
    noteList.innerHTML = '';
    notes.forEach(note => noteList.append(noteUI(note)));
};

export const fillForm = note => {
    title.value = note.title;
    description.value = note.description;
    saveId = note._id;
};

export const onHandleSubmit = (e) => {
    e.preventDefault();

    if (saveId) {
        updateNote(
            saveId,
            title.value,
            description.value
        )
    } else {
        saveNote(
            title.value,
            description.value,
        )
    }
    saveId = '';
    title.value = '';
    description.value = '';
    ;
}

export const appendNote = note => {
    noteList.append(noteUI(note));
};