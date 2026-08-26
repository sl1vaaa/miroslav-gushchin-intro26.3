// const { createElement } = require("react");

const realFooter = document.createElement("footer");

document.body.appendChild(realFooter);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `© ${thisYear} Miroslav Gushchin. My website. All rights reserved.`;

footer.appendChild(copyright);

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

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];

  skillsList.appendChild(skill);
}

const messageForm = document.forms["leave_message"];

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
