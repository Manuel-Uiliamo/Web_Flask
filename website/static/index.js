function deleteNote(noteID){
    fetch("/delete_note", {
        method: "POST",
        body: JSON.stringify({ noteId: noteId})
    }).then((_res) => {
        window.location.href = "/";
    });
}