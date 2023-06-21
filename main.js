//initialize + declare variables
let selection = document.querySelector('select');
let result = document.querySelector('h2');

selection.addEventListener('change', (event) => {
    result.innerText = selection.options[selection.selectedIndex].value;
})