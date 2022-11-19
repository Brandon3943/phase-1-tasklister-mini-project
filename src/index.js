document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    handleToDo(e.target["new-task-description"].value)
    form.reset();
  })
});

function handleToDo(toDo) {
  const p = document.createElement('p');
  const btn = document.createElement('button');
  btn.textContent = 'X';
  btn.addEventListener('click', handleDelete)
  p.textContent = `${toDo}  `;
  p.appendChild(btn);
  document.querySelector("#list").appendChild(p);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}