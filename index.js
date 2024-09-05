// grab element
// add event listener to add button
// create new list element 
// append child of list



const textBox = document.getElementById('text-box')
const addButton = document.getElementById('add-button')
const list = document.getElementById('list-container')

addButton.addEventListener('click', addListItem)

function addListItem(e) {
    e.preventDefault();
    const text = textBox.value.trim();

    // if the textbox isn't empty
    if (text !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = text;
        list.appendChild(listItem)
    }
    // clears the textbox after input
    textBox.value = ""
}

// const tickButton = document.getElementById("tick")
// const listItemText = document.getElementById("listItemText")

// tickButton.addEventListener('click', )

// function checkListItem() {

// }
