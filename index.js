
const textBox = document.getElementById('text-box')
const addButton = document.getElementById('add-button')
const list = document.getElementById('list-container')

addButton.addEventListener('click', addListItem)

function handleNewButton(buttonClass) {
    const button = document.createElement('button');
    button.className = buttonClass;
    return button
}

let idCounter = 1;

function handleNewListItem(text) {

    let addId = idCounter++
    
    const listItem = document.createElement('li');

    const listText = document.createElement('p');
    
    const tickButton = handleNewButton('tick')

    listText.innerHTML = text;

    const editButton = handleNewButton('edit')

    const deleteButton = handleNewButton('delete')

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
    switch (action) {
        case 'tick':
            { const listItemTick = document.getElementById(`listItem-${idNum}`);
  
                listItemTick.classList.toggle('lineThrough');
            break; }
        case 'edit':
            { const listItemEdit = document.getElementById(`listItemText-${idNum}`);

                const newText = prompt("Edit your item:", listItemEdit.innerHTML);
                if (newText !== null && newText.trim() !== "") {
                    listItemEdit.innerHTML = newText;
                }
            break; }
        case 'delete':
            { const listItemDelete = document.getElementById(`listItem-${idNum}`);

                listItemDelete.remove();
            break; }
        default: 
            console.error(`ooooooops`);
    }
}

let nasaImg = document.getElementById('nasa-img')
let nasaTitle = document.getElementById('nasa-title')
const nasaButton = document.getElementById('nasa-button')

nasaButton.addEventListener('click', loadNasaImg)

async function loadNasaImg() {
    try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    const data = await response.json()

    nasaImg.style.backgroundImage = `url(${data.url})`
    nasaTitle.innerText = data.title
    } catch (error) {
    console.error(error)
    }
}

const factButton = document.getElementById('joke-button');
let setup = document.getElementById('setup');
// let punch = document.getElementById('punch');

factButton.addEventListener('click', handleFact);

async function handleFact() {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke')
        const data = await response.json()
        
        if (data.text === null) {
            setup.innerText = `Server Failure:\n\nTry again later my apprentice`
        } else {
            setup.innerText = `${data.setup}\n\n${data.punchline}`
        }
        
}


