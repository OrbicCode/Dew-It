
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
    listText.id = `listItemText-${addId}`;
    tickButton.id = `tick-${addId}`
    editButton.id = `edit-${addId}`
    deleteButton.id = `delete-${addId}`

    listItem.className = 'listItem'
    
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
const listContainer = document.getElementById('list-container')

listContainer.addEventListener("click", function (evt) {
    handleCrud(evt.target.id)
})

function handleCrud(id) {
    const [action, idNum] = id.split('-');
    console.log(idNum)
    switch (action) {
        case 'tick':
            const listItemTick = document.getElementById(`listItemText-${idNum}`);
            if (listItemTick) {
                listItemTick.classList.toggle('lineThrough');
            } else {
                console.error(`Element with ID listItemText-${idNum} not found`);
            }
            break;
        case 'edit':
            const listItemEdit = document.getElementById(`listItemText-${idNum}`);
            if (listItemEdit) {
                const newText = prompt("Edit your item:", listItemEdit.innerHTML);
                if (newText !== null && newText.trim() !== "") {
                    listItemEdit.innerHTML = newText;
                }
            } else {
                console.error(`Element with ID listItemText-${idNum} not found`);
            }
            break;
        case 'delete':
            const listItemDelete = document.getElementById(`listItem-${idNum}`);
            if (listItemDelete) {
                listItemDelete.remove();
            } else {
                console.error(`Element with ID listItem-${idNum} not found`);
            }
            break;
        default: 
            console.error(`Unknown action: ${action}`);
    }
}