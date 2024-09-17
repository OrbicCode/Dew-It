
const textBox = document.getElementById('text-box')
const addButton = document.getElementById('add-button')
const list = document.getElementById('list-container')

addButton.addEventListener('click', addListItem)

function handleNewButton(buttonText, buttonClass) {
    const button = document.createElement('button');
    button.innerHTML = buttonText;
    button.className = buttonClass;
    return button
}

let idCounter = 0;

function handleNewListItem(text) {

    let addId = idCounter++
    
    const listItem = document.createElement('li');

    const listText = document.createElement('p');
    
    const tickButton = handleNewButton('✅', 'tick')

    listText.innerHTML = text;

    const editButton = handleNewButton('✏️', 'edit')

    const deleteButton = handleNewButton('❌', 'delete')

    listItem.append(tickButton, listText, editButton, deleteButton);
    
    list.appendChild(listItem);

    listItem.id = `listItem-${addId}`;
    
    textBox.value = "";
}

function addListItem(e) {
    e.preventDefault();
    const text = textBox.value.trim();

    if (text == "") {
        return;
    }

    handleNewListItem(text)  
}

document.body.addEventListener("click", function (evt) {
    handleCrud(evt.target.id)
})

function handleCrud(id) {
    const [action, idNum] = id.split('-');
    switch (action) {
        case 'tick':
            const listItemTick = document.getElementById(`listItemText-${idNum}`);
            listItemTick.classList.toggle('lineThrough');
            break;
        case 'edit':
            let listItemEdit = document.getElementById(`listItemText-${idNum}`);
            let newText = prompt('Enter New Text: ');
            console.log(newText);
            listItemEdit = newText;
            break;
        case 'delete':
            const listItemDelete = document.getElementById(`listItem-${idNum}`);
            listItemDelete.remove();
            break;
        default: console.log('nope');
    }
}