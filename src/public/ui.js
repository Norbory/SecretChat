import {saveNote, deleteNote, getNote, updateNote} from './sockets.js';

const noteList = document.getElementById('notes');
const title = document.getElementById('title');
const description = document.getElementById('description');

let saveId = '';

const noteUI = note => {
    const div = document.createElement('div');
    div.classList.add('border', 'border-gray-300', 'rounded-md', 'p-4', 'mb-4', 'bg-white', 'shadow-md', 'w-full', 'h-auto'); // Agregamos 'w-full' para que ocupe todo el ancho

    div.innerHTML = `
    <div>
        <h1 class="text-2xl font-semibold mb-2">${note.title}</h1>
        <div class="flex gap-2">
            <button class="bg-red-500 text-white py-1 px-2 rounded-md delete" data-id="${note._id}">Delete</button>
            <button class="bg-blue-500 text-white py-1 px-2 rounded-md update" data-id="${note._id}">Update</button>
        </div>
        <p class="text-gray-600">${note.description}</p>
    </div>
    `;

    const btnDelete = div.querySelector('.delete');
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