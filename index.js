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

// const tickButton = document.getElementById("tick-1")
const listItemText = document.getElementById("listItemText")

// tickButton.addEventListener('click', checkListItem)

// function checkListItem() {
//     listItemText.classList.toggle('lineThrough')
// }

// add eventlistener for 'click'
// create switch cases foe tick edit and delete
// document.body.addEventListener('', handleCrud)

document.body.addEventListener("click", function (evt) {
    handleCrud(evt.target.id)
})

function handleCrud(id) {
    const [action, idNum] = id.split('-');
    switch (action) {
        case 'tick':
            console.log('hello');
            break;
        case 'edit':
            console.log('editsss');
            break;
        case 'delete':
        console.log('deeeleeete');
            break;
        default: console.log('nope');
    }
}

// if we click then we need to work out what button has been clicked and what list item the button belongs to
 
// i.e tick-1 belongs to list item 1, so when this is clicked we expect 'list-item-text-1' to be through lined 
 
// we can get the action from the first part of the id 'tick' and the  list item number from the second part of the id '1'
 