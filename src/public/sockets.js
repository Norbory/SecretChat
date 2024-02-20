const socket = io();

export const loadnotes = () => {
    socket.on('loadnotes', (notes) => {
        console.log(notes);
    });
};

export const saveNote = (title, description) => {
    socket.emit('newnote',{
        title,
        description
    })
};