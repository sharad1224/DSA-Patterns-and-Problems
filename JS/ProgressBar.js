const topics = document.getElementById("topics");
const name = topics.dataset.topic;
const listOfTopics = topics.querySelectorAll("li");
const checklist = JSON.parse(localStorage.getItem(name)) || createNewChecklist();

function createNewChecklist() {
  console.log("New checklist created")
  const cl = {};
  listOfTopics.forEach(item => {
    const unitNum = item.getElementsByClassName("topic-number")[0].textContent;
    cl[unitNum] = false;
  })
  localStorage.setItem(name, JSON.stringify(cl));
  return cl;
}

listOfTopics.forEach(item => {
  const unitNum = item.getElementsByClassName("topic-number")[0].textContent;
  const completed = checklist[unitNum];
  item.getElementsByClassName("topic-completed")[0].textContent = completed ? "\u2713" : "\u00A0";
  item.addEventListener('click', visit);
})

function visit(e) {
  const unitNum = e.currentTarget.getElementsByClassName("topic-number")[0].textContent;
  checklist[unitNum] = true;
  e.currentTarget.getElementsByClassName("topic-completed")[0].textContent = "\u2713";
  localStorage.setItem(name, JSON.stringify(checklist));
  window.location.href = this.dataset.href;
}