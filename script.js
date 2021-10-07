// ALERT WHEN TASK ENTERED INTO 'ADD BOX AND ADD BUTTON CLICKED
// document.getElementById('add-task').addEventListener('click', function () {
// 	// get value from ID
// 	let taskInput = document.getElementById('task-value');
// 	// alert('User entered: ' + taskInput.value);
// 	addTask(taskValue);
// 	taskInput.value = '';
// });
// //
// function addTask(taskValue) {
// 	let task = document.createElement('li');
// 	task.classList.add('task');
// 	task.classList.add('fill');
// 	task.setAttribute('draggable', 'true');
// 	task.addEventListener('dragstart', dragStart);
// 	task.addEventListener('dragend', dragEnd);

// 	let taskContent = document.createElement('div');
// 	taskContent.classList.add('task-content');
// 	taskContent.innerText = taskValue;

// 	let trash = document.createElement('div');
// 	trash.classList.add('trash');
// 	trash.innerHTML = '&times;';
// 	trash.addEventListener('click', removeTask);

// 	task.appendChild(taskContent);
// 	task.appendChild(trash);

// 	let tasks = document.getElementById('tasks-added');
// 	tasks.insertBefore(task, tasks.childNodes[0]);
// }
// //
// function removeTask(event) {
// 	// event represents the remove button
// 	// Access the <ul> list by moving 2 levels up
// 	var tasks = event.target.parentNode.parentNode;
// 	// Access the <li> element which is the direct parent
// 	var task = event.target.parentNode;
// 	tasks.removeChild(task);
// }

// // DRAG & DROP
// task.addEventListener('dragstart', dragStart);
// task.addEventListener('dragend', dragEnd);
// // ...
// trash.addEventListener('click', removeTask);
// // A global variable to store the selected task
// var task;

// function dragStart(event) {
// 	event.target.classList.add('hold');
// 	task = event.target;
// 	setTimeout(function () {
// 		event.target.classList.add('invisible');
// 	}, 0);
// }

// function dragEnd(event) {
// 	event.target.classList.remove('invisible');
// }
const yes = ['Yes!', 'Sure!', 'Of course!'];
const no = ['No way!', 'Never!', 'Not a chance!'];

function getRandomItem(arr) {}
getRandomItem();
