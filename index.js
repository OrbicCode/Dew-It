// grab element
// add event listener to add button
// create new list element 
// append child of list



const textBox = document.getElementById('text-box')
const addButton = document.getElementById('add-button')
const list = document.getElementById('list-container')

addButton.addEventListener('click', addListItem)

// creating a new li item
// need to create 3 buttons and a <p>

function handleNewButton(buttonText, buttonClass) {
    const button = document.createElement('button');
    button.innerHTML = buttonText;
    button.className = buttonClass;
    return button
}

function handleNewListItem(text) {
    const listItem = document.createElement('li');

    const listText = document.createElement('p');
    
    const tickButton = handleNewButton('✅')

    listText.innerHTML = text;

    const editButton = handleNewButton('✏️')

    const deleteButton = handleNewButton('❌')

    listItem.append(tickButton, listText, editButton, deleteButton);
    
    list.appendChild(listItem);
    
    // clears the textbox after input
    textBox.value = "";
}

function addListItem(e) {
    e.preventDefault();
    const text = textBox.value.trim();

    // if the textbox isn't empty
    if (text == "") {
        return;
    }

    handleNewListItem(text)  
}




// do a basic text-decoration change when the tick button is pressed
    // grab the tick button
    // grab the list item
// create a function that changes the text when the tick button is clicked
    //when the button is clicked give the text a new class

const tickButton = document.getElementById("tick")
const listItemText = document.getElementById("listItemText")

tickButton.addEventListener('click', checkListItem)

function checkListItem() {
    listItemText.classList.toggle('lineThrough')
}
