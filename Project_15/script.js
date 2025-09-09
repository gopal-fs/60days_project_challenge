const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Add new task
addBtn.addEventListener('click', () => {
  const taskText = todoInput.value.trim();
  if(taskText === '') return alert('Please enter a task!');

  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark task as completed on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.className = 'deleteBtn';
  delBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent completing task
    li.remove();
  });

  li.appendChild(delBtn);
  todoList.appendChild(li);
  todoInput.value = '';
});

// Add task on Enter key
todoInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') addBtn.click();
});
