const socket = io();

// Editor element
const editor = document.getElementById('editor');

// Listen for local changes
editor.addEventListener('input', () => {
    const content = editor.value;
    socket.emit('edit', { content });
});

// Listen for remote changes
socket.on('update', (data) => {
    editor.value = data.content;
});
