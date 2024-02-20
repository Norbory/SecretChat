import { loadnotes } from "./sockets.js";
import { onHandleSubmit, renderNotes} from "./ui.js";

loadnotes(renderNotes);

const noteForm = document.getElementById('noteForm');
noteForm.addEventListener('submit', onHandleSubmit);
