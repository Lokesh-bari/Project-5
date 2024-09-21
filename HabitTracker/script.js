const habitInput = document.getElementById('habitInput');
const addButton = document.getElementById('addButton');
const habitList = document.getElementById('habitList');

addButton.addEventListener('click', () => {
    const habit = habitInput.value;
    if (habit !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('d-flex', 'justify-content-between', 'align-items-center');
        listItem.textContent = habit;

        const completeButton = document.createElement('button');
        completeButton.classList.add('btn', 'btn-success', 'btn-sm');
        completeButton.textContent = 'Complete';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.textContent = 'Delete';

        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        habitList.appendChild(listItem);
        habitInput.value = '';
    }
});

habitList.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const buttonClicked = event.target;
        const listItem = buttonClicked.parentNode;
        if (buttonClicked.textContent === 'Complete') {
            listItem.classList.toggle('completed');
        } else if (buttonClicked.textContent === 'Delete') {
            habitList.removeChild(listItem);
        }
    }
});