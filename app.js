let addToDobutton = document.getElementById('addToDo')
let toDoContainer = document.getElementById('toDoContainer')
let inputField = document.getElementById('inputfield')

addToDobutton.addEventListener('click',()=>{
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText  =  inputField.value;
    toDoContainer.appendChild(paragraph)
    inputField.value ="";
    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick',()=>{
        toDoContainer.removeChild(paragraph);
    })
})