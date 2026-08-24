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

const skillsSection = document.querySelector(".skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];

  skillsList.appendChild(skill);
}
