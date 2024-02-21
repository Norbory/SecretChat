import { loadnotes, onNewNote, onSelectedNote } from "./sockets.js";
import { onHandleSubmit, renderNotes, appendNote, fillForm} from "./ui.js";

onNewNote(appendNote);
loadnotes(renderNotes);
onSelectedNote(fillForm);

const noteForm = document.getElementById('noteForm');
noteForm.addEventListener('submit', onHandleSubmit);
