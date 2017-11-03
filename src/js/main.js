function my(){
    let panel=document.createElement('div')
    panel.classList.add('panel')
    panel.textContent='Actions'
    return panel
}
function makeNote(note_obj) {
    let note = document.createElement('div')
    note.classList.add('note')
    note.classList.add(note_obj.color)

    let note_contents = document.createElement('div')
    note_contents.classList.add('note-contents')

    let header = document.createElement('div')
    header.classList.add('header')
    header.textContent = note_obj.title

    let content = document.createElement('div')
    content.classList.add('content')
    content.textContent = note_obj.content

    note_contents.appendChild(header)
    note_contents.appendChild(content)
    let panel=document.createElement('div')
    panel.classList.add('panel')
    panel.textContent='Actions'
    note.onmouseover = function(){

       note.appendChild(panel)
    }

    note.appendChild(note_contents)

    return note
}

let note_container = document.querySelector('.notes-container')

for (let note of data) {
    note_container.appendChild(makeNote(note))
}
