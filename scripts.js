    var form = document.querySelector('form');
    var todoList = document.querySelector('ul');
    var button = document.querySelector('button');
    var input = document.getElementById('user-todo');

    var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

    localStorage.setItem('todos', JSON.stringify(todosArray));

    var storage = JSON.parse(localStorage.getItem('todos'));


    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // push onto `todosArray` the `input.value`
      todosArray.push(input.value);
      // on localStorage now use `setItem()` for the key `'todos'` the value
      // of the todosArray as a string with the `JSON.stringify()` method.
      localStorage.setItem('todos', JSON.stringify(todosArray));
      todoMaker(input.value);
      input.value = "";
    });

    var todoMaker = function(text) {
      var todo = document.createElement('li');
      todo.textContent = text;
      todoList.appendChild(todo);
    }

    // Loop through localStorage when a user first opens a page and run the todoMaker function
    for (var i = 0; i < storage.length; i++) {
      todoMaker(storage[i]);
    }

    button.addEventListener('click', function() {

      // clear the `localStorage` with the `clear()` method
      localStorage.clear();
      while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
      }
    })