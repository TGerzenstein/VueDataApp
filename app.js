

//console.log("Hello, Vuejs!")
//Vue.createApp();


const btnEl = document.querySelector('button')
const inputEl = document.querySelector('input')
const listEl = document.querySelector('ul')
const btnRemove = document.querySelector('#remove')

function addGoal() {

   const enteredValue = inputEl.value;
   const listItemElem = document.createElement('li');
   listItemElem.textContent = enteredValue;
   listEl.appendChild(listItemElem);
   inputEl.value = '';  // Limpiar el input después de agregar
}

btnEl.addEventListener('click', addGoal);


function removeGoals() {
    listEl.innerHTML = '';
    console.log("remove")
    
}

btnRemove.addEventListener('click', removeGoals)