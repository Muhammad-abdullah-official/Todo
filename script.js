var ul = document.getElementById('ul');

function addtodo() {
  var getinp = document.getElementById('inp');
  var createli = document.createElement('li');
  var liitem = document.createTextNode(getinp.value);
  if (getinp.value.trim() === '') {
    alert('Empty todo');
  } else {
    createli.appendChild(liitem);
    ul.appendChild(createli);
    getinp.value = '';
    var delbtn = document.createElement('button');
    var btntext = document.createTextNode('Delete');
    delbtn.appendChild(btntext);
    createli.appendChild(delbtn);

    var editbtn = document.createElement('button');
    var editbtntext = document.createTextNode('Edit');
    editbtn.appendChild(editbtntext);
    createli.appendChild(editbtn);

    delbtn.setAttribute('onclick', 'delbtn(this)');
    editbtn.setAttribute('onclick', 'editbtn(this)');
  }
}

function deltodoall() {
  ul.innerHTML = '';
}

function delbtn(ab) {
  ab.parentNode.remove();
}

function editbtn(e) {
  var getpromp = prompt(
    'Enter updated todo ',
    e.parentNode.firstChild.textContent
  );
  if (getpromp !== null) {
    e.parentNode.firstChild.textContent = getpromp;
  }
}

//
// //gpt code
// var ul = document.getElementById('ul');

// // Load todo items from LocalStorage when the page loads
// window.onload = function () {
//   var todos = JSON.parse(localStorage.getItem('todos')) || [];
//   todos.forEach(function (todo) {
//     addTodoItem(todo);
//   });
// };

// function addTodoItem(todoText) {
//   var createli = document.createElement('li');
//   var liitem = document.createTextNode(todoText);
//   createli.appendChild(liitem);
//   ul.appendChild(createli);

//   var delbtn = document.createElement('button');
//   var btntext = document.createTextNode('Delete');
//   delbtn.appendChild(btntext);
//   createli.appendChild(delbtn);

//   var editbtn = document.createElement('button');
//   var editbtntext = document.createTextNode('Edit');
//   editbtn.appendChild(editbtntext);
//   createli.appendChild(editbtn);

//   delbtn.setAttribute('onclick', 'delbtn(this)');
//   editbtn.setAttribute('onclick', 'editbtn(this)');

//   // Store the updated todo list in LocalStorage
//   updateLocalStorage();
// }

// function updateLocalStorage() {
//   var todoItems = [];
//   var liElements = ul.getElementsByTagName('li');
//   for (var i = 0; i < liElements.length; i++) {
//     todoItems.push(liElements[i].textContent);
//   }
//   localStorage.setItem('todos', JSON.stringify(todoItems));
// }

// function addtodo() {
//   var getinp = document.getElementById('inp');
//   var todoText = getinp.value.trim();
//   if (todoText === '') {
//     alert('Empty todo');
//   } else {
//     addTodoItem(todoText);
//     getinp.value = '';
//   }
// }

// function deltodoall() {
//   ul.innerHTML = '';
//   //localStorage.removeItem('todos');
// }

// function delbtn(ab) {
//   ab.parentNode.remove();
//   //updateLocalStorage();
// }

// function editbtn(e) {
//   var getpromp = prompt(
//     'Enter updated todo ',
//     e.parentNode.firstChild.textContent
//   );
//   if (getpromp !== null) {
//     e.parentNode.firstChild.textContent = getpromp;
//     updateLocalStorage();
//   }
// }
