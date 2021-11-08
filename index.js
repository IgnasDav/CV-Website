"use strict";
const main = document.querySelector(".main");

function renderAboutMe() {
  //Emptying main html

  main.innerHTML = null;

  //Creating classes

  const emptyColorDiv = document.createElement("div");
  const emptyWhiteDiv = document.createElement("div");
  const card = document.createElement("div");
  const cardLeftSide = document.createElement("div");
  const cardRightSide = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("h2");
  const line = document.createElement("div");
  const position = document.createElement("h3");
  const social = document.createElement("div");
  const socialIcon1 = document.createElement("p");
  const socialIcon2 = document.createElement("p");
  const socialIcon3 = document.createElement("p");
  const socialIcon4 = document.createElement("p");
  const heading = document.createElement("h1");
  const whatIDo = document.createElement("h2");
  const resumeBtn = document.createElement("button");
  const projectsBtn = document.createElement("button");
  const paragraphWhatIDo = document.createElement("p");
  //Naming classes

  emptyColorDiv.classList.add("main__color");
  emptyWhiteDiv.classList.add("main__white");
  card.classList.add("main__card");
  cardLeftSide.classList.add("main__card__left");
  cardRightSide.classList.add("main__card__right");
  img.classList.add("main__card__left__img");
  name.classList.add("main__card__left__name");
  line.classList.add("main__card__left__line");
  position.classList.add("main__card__left__position");
  social.classList.add("main__card__left__social");
  heading.classList.add("main__card__right__heading");
  whatIDo.classList.add("main__card__right__whatIDo");
  resumeBtn.classList.add("main__card__right__resumeBtn");
  projectsBtn.classList.add("main__card__right__projectsBtn");
  paragraphWhatIDo.classList.add("main__card__right__paragraph");

  //Adding content to elements
  img.src = "img/face.JPG";
  name.textContent = "Ignas Davulis";
  position.textContent = "Junior Front End Developer";
  socialIcon1.innerHTML = `<a href = "https://www.facebook.com/IgnasDavulis/" > <i class="fab fa-facebook-f"></i></a>`;
  socialIcon2.innerHTML = `<a href = "https://github.com/IgnasDav"> <i class="fab fa-github"></i></a>`;
  socialIcon3.innerHTML = `<a href = "https://www.linkedin.com/in/ignas-davulis-883818223/" > <i class="fab fa-linkedin"></i></a>`;
  socialIcon4.innerHTML = `<a href = "https://www.instagram.com/ignas_davulis/" > <i class="fab fa-instagram"></i></a>`;
  heading.textContent = "Hello";
  whatIDo.textContent = "Here's who I am & what I do";
  resumeBtn.textContent = "Resume";
  projectsBtn.textContent = "Projects";
  paragraphWhatIDo.textContent =
    "I am an aspiring Front-End Engineer, currently looking for a place where I can grow as a Front-end developer and as a person, try out and learn technologies like react, vue or angular. This site was created as a CV website, you will find the projects that I have worked on, my resume and contacts. ";

  //Adding classes into html
  cardRightSide.append(
    heading,
    whatIDo,
    resumeBtn,
    projectsBtn,
    paragraphWhatIDo
  );
  cardLeftSide.append(img, name, line, position, social);
  social.append(socialIcon1, socialIcon2, socialIcon3, socialIcon4);
  card.append(cardLeftSide, cardRightSide);
  main.append(emptyColorDiv, emptyWhiteDiv, card);
}

function renderResume() {
  main.innerHTML = null;
}

function renderProjects() {}

function renderContacts() {}

window.addEventListener("DOMContentLoaded", renderAboutMe);
document.querySelector("#about").addEventListener("click", renderAboutMe);
