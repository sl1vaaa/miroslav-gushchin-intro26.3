// const { createElement } = require("react");

const realFooter = document.createElement("footer");

document.body.appendChild(realFooter);

//create and paste the footer with a copyright message 
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `© ${thisYear} Miroslav Gushchin. My website. All rights reserved.`;

footer.appendChild(copyright);

//create list of skills 
const skills = [
  "Java",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "MATLAB",
  "OOP",
  "Data Structures and Algorithms",
  "Data Analysis",
  "Data Manipulation",
];

const skillsSection = document.querySelector("#Skills");

const skillsList = skillsSection.querySelector("ul");
//pasting skills on the webpage using DOM
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];

  skillsList.appendChild(skill);
}

//creating leave a message form
const messageForm = document.forms["leave_message"];

//creating event listener to submit user's message and info
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usersName = event.target.elements["usersName"].value;
  const usersEmail = event.target.elements["usersEmail"].value;
  const usersMessage = event.target.elements["usersMessage"].value;

  console.log("Data submitted:", { usersName, usersEmail, usersMessage });

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
  <a href="mailto:${usersEmail}">${usersName}</a>
  <span>${usersMessage}</span>
  `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", function (event) {
    const entry = removeButton.parentNode;

    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

//fetching and pasting gitHub repositories in the projects section
fetch("https://api.github.com/users/sl1vaaa/repos")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })
  .then((data) => {
    const repositories = data;
    console.log(repositories);

    const projectSection = document.querySelector("#Projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.error(error);
  });
