import { loadnotes } from "./sockets.js";
import { onHandleSubmit} from "./ui.js";

loadnotes();
const noteForm = document.getElementById('noteForm');
noteForm.addEventListener('submit', onHandleSubmit);
