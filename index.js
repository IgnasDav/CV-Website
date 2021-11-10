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

  resumeBtn.addEventListener("click", renderResume);
  projectsBtn.addEventListener("click", renderProjects);
}
function renderResume() {
  main.innerHTML = null;

  //Creating elements

  const mainDiv = document.createElement("div");
  const heading = document.createElement("h1");
  const jobs = document.createElement("h2");
  const square = document.createElement("span");
  const education = document.createElement("h2");
  const skillset = document.createElement("div");
  const contentDiv = document.createElement("div");
  const skillsetHeading = document.createElement("h2");
  const skillsetLanguage = document.createElement("h2");
  const skillsetLanguageDiv = document.createElement("h2");
  const skillsetSquare1 = document.createElement("span");
  const skillsetSquare2 = document.createElement("span");
  const skillsetSquare3 = document.createElement("span");
  const skillsetSquare4 = document.createElement("span");
  const skillsetSquare5 = document.createElement("span");
  const skillsetSquare6 = document.createElement("span");
  const skillsetSkillDiv = document.createElement("div");
  const skillsetSkill1 = document.createElement("p");
  const skillsetSkill2 = document.createElement("p");
  const skillsetSkill3 = document.createElement("p");
  const skillsetSkill4 = document.createElement("p");
  const skillsetLanguage1 = document.createElement("p");
  const skillsetLanguage2 = document.createElement("p");

  //Adding classes

  mainDiv.classList.add("resume");
  contentDiv.classList.add("resume__content");
  heading.classList.add("resume__content__heading");
  jobs.classList.add("resume__content__job__heading");
  square.classList.add("resume__content__heading__square");
  education.classList.add("resume__content__education__heading");
  skillset.classList.add("resume__content__skillset");
  skillsetHeading.classList.add("resume__content__skillset__heading");
  skillsetLanguage.classList.add(
    "resume__content__skillset__language__heading"
  );
  skillsetSquare1.classList.add("resume__content__skillset__square");
  skillsetSquare2.classList.add("resume__content__skillset__square");
  skillsetSquare3.classList.add("resume__content__skillset__square");
  skillsetSquare4.classList.add("resume__content__skillset__square");
  skillsetSquare5.classList.add("resume__content__skillset__square");
  skillsetSquare6.classList.add("resume__content__skillset__square");
  skillsetSkill1.classList.add("resume__content__skillset__skill__item");
  skillsetSkill2.classList.add("resume__content__skillset__skill__item");
  skillsetSkill3.classList.add("resume__content__skillset__skill__item");
  skillsetSkill4.classList.add("resume__content__skillset__skill__item");
  skillsetLanguage1.classList.add("resume__content__skillset__language__item");
  skillsetLanguage2.classList.add("resume__content__skillset__language__item");
  skillsetLanguageDiv.classList.add("resume__content__skillset__language");
  skillsetSkillDiv.classList.add("resume__content__skillset__skill");
  //Adding content

  heading.innerHTML = `Resume`;
  skillsetHeading.textContent = "Professional skillset";
  skillsetLanguage.textContent = "Languages";
  skillsetSkill1.textContent = "JavaScript";
  skillsetSkill2.textContent = "GitHub";
  skillsetSkill3.textContent = "HTML/SCSS/CSS/Bootstrap";
  skillsetSkill4.textContent = "BEM/Agile";
  skillsetLanguage1.textContent = "Lithuanian (Native)";
  skillsetLanguage2.textContent = "English (Proficient)";
  jobs.textContent = "Experience";
  education.textContent = "Education";
  //Creating elements with for loop
  for (let i = 0; i <= 2; i++) {
    //Creating elements

    const job = document.createElement("div");
    const jobDetails = document.createElement("div");
    const jobDescriptionDiv = document.createElement("div");
    const jobDescription = document.createElement("p");
    const jobDate = document.createElement("h3");
    const jobPosition = document.createElement("h3");
    const jobCompanyName = document.createElement("h4");
    const jobCompanyLocation = document.createElement("h4");

    //Inserting elements

    contentDiv.append(job);
    job.append(jobDetails, jobDescriptionDiv);
    jobDetails.append(jobDate, jobPosition, jobCompanyName, jobCompanyLocation);
    jobDescriptionDiv.append(jobDescription);

    //Adding classes
    jobDetails.classList.add("resume__content__job__details");
    jobDate.classList.add("resume__content__job__details__date");
    jobPosition.classList.add("resume__content__job__details__position");
    jobCompanyName.classList.add("resume__content__job__details__name");
    jobCompanyLocation.classList.add("resume__content__job__details__location");
    jobDescriptionDiv.classList.add("resume__content__job__description");
    jobDescription.classList.add("resume__content__job__description__text");
    job.classList.add("resume__content__job", `resume__content__job--${[i]}`);
    //Adding content
    if (job.classList.contains("resume__content__job--0")) {
      jobDate.textContent = "2020.08  - 2021.08";
      jobPosition.textContent = "Auxiliary worker";
      jobCompanyName.textContent = "MB Rūkyklėlė";
      jobCompanyLocation.textContent = "Verslo g. 16";
      jobDescription.textContent =
        "Learnt how to manage my workspace and keep it clean everyday.";
    }
    if (job.classList.contains("resume__content__job--1")) {
      jobDate.textContent = "2019.10 - 2020.03";
      jobPosition.textContent = "Customer service";
      jobCompanyName.textContent =
        "Vilniaus Ekstremalių Sporto Šakų Klubas 'Arena'";
      jobCompanyLocation.textContent = "Lukiškių Square";
      jobDescription.textContent =
        "Managed day to day transactions, calculated everydays profit, helped customers get the best experience.";
    }
    if (job.classList.contains("resume__content__job--2")) {
      jobDate.textContent = "2019.09 - 2019.10";
      jobPosition.textContent = "Bar assistant";
      jobCompanyName.textContent = "Plus Plus Plus";
      jobCompanyLocation.textContent = "Vilniaus g. 39";
      jobDescription.textContent =
        "Kept the bar clean, learned how to work alone and as a team.";
    }
  }
  //Inserting element here because we need this element right after the sequence of job elements
  contentDiv.append(education);

  for (let i = 0; i <= 1; i++) {
    //Creating items
    const education = document.createElement("div");
    const educationDetails = document.createElement("div");
    const educationDescriptionDiv = document.createElement("div");
    const educationDescription = document.createElement("p");
    const educationDate = document.createElement("h3");
    const educationName = document.createElement("h3");
    const educationDegree = document.createElement("h4");
    const educationLocation = document.createElement("h4");

    //Adding classes
    education.classList.add(
      "resume__content__education",
      `resume__content__education--${[i]}`
    );
    educationDetails.classList.add("resume__content__education__details");
    educationDescriptionDiv.classList.add(
      "resume__content__education__description"
    );
    educationDescription.classList.add(
      "resume__content__education__description__text"
    );
    educationDate.classList.add("resume__content__education__details__date");
    educationName.classList.add("resume__content__education__details__name");
    educationDegree.classList.add(
      "resume__content__education__details__degree"
    );
    educationLocation.classList.add(
      "resume__content__education__details__location"
    );

    //Inserting elements into html
    contentDiv.append(education);
    educationDetails.append(
      educationDate,
      educationName,
      educationDegree,
      educationLocation
    );
    educationDescriptionDiv.append(educationDescription);
    education.append(educationDetails, educationDescriptionDiv);
    //Adding text content
    if (education.classList.contains("resume__content__education--0")) {
      educationDescription.textContent =
        "Advanced Front-end courses, subjects I have graduated on are JavaScript, HTML,CSS, SCSS, Bootstrap,BEM. Next in line is Node.js, course includes these subjects JS, React, Vue.js, MongoDB, Node.js, HTML, CSS. ";
      educationDate.textContent = "2021.09 - 2022.03";
      educationName.textContent = "CodeAcademy";
      educationDegree.textContent = "Advnaced Front-End courses";
      educationLocation.textContent = "Antakalnio g. 17, Vilnius";
    }
    if (education.classList.contains("resume__content__education--1")) {
      educationDescription.textContent =
        "Studying Programming and multimedia, there I was learning about C++, Python, Excel, discrete mathematics. Currently on a sabbatical year. ";
      educationDate.textContent = "2019.09 - 2024";
      educationName.textContent = "University of applied social sciences";
      educationDegree.textContent = "Bachelor's degree";
      educationLocation.textContent = "Kalvarijų g. 137E, Vilnius";
    }

    //Inserting elements into html
    mainDiv.append(contentDiv);
    heading.prepend(square);
    contentDiv.prepend(heading, jobs);
    main.append(mainDiv);
    contentDiv.append(skillset);
  }
  //Inserting elements into html
  skillsetSkill1.prepend(skillsetSquare1);
  skillsetSkill2.prepend(skillsetSquare2);
  skillsetSkill3.prepend(skillsetSquare3);
  skillsetSkill4.prepend(skillsetSquare4);
  skillsetLanguage1.prepend(skillsetSquare5);
  skillsetLanguage2.prepend(skillsetSquare6);
  skillsetSkillDiv.append(
    skillsetSkill1,
    skillsetSkill2,
    skillsetSkill3,
    skillsetSkill4
  );
  skillsetLanguageDiv.append(skillsetLanguage1, skillsetLanguage2);
  skillset.append(
    skillsetHeading,
    skillsetSkillDiv,
    skillsetLanguage,
    skillsetLanguageDiv
  );
}

function renderProjects() {
  //Emptying main div
  main.innerHTML = null;
  //Creating classes
  const mainDiv = document.createElement("div");
  const mainContent = document.createElement("div");
  const heading = document.createElement("h1");
  const paragraph = document.createElement("p");
  const square = document.createElement("span");

  //Adding classes
  mainDiv.classList.add("projects");
  mainContent.classList.add("projects__content");
  heading.classList.add("projects__content__heading");
  paragraph.classList.add("projects__content__paragraph");
  square.classList.add("projects__content__heading__square");
  //Adding text content
  heading.textContent = "Projects";
  paragraph.innerHTML = `Here are the projects I have worked on during CodeAcademy courses and on my own, where I learnt various things like creating search, delete, add to favorite, saving to local storage functionalities. There are more projects that I have worked on, and they are pushed to my <a href="https://github.com/IgnasDav">Github</a>`;
  //Inserting elements into html
  heading.prepend(square);
  mainContent.append(heading, paragraph);
  mainDiv.append(mainContent);
  main.append(mainDiv);
  //Loop for creating 3 elements
  for (let i = 0; i <= 2; i++) {
    //Creating elements
    const project = document.createElement("div");
    const projectLeftSide = document.createElement("div");
    const projectRightSide = document.createElement("div");
    const projectTitle = document.createElement("h2");
    const roleTitle = document.createElement("h3");
    const projectText = document.createElement("p");
    const projectImg = document.createElement("img");
    const rectangle = document.createElement("span");
    //Adding classes
    project.classList.add(
      "projects__content__project",
      `projects__content__project--${[i]}`
    );
    projectLeftSide.classList.add("projects__content__project__left");
    projectRightSide.classList.add("projects__content__project__right");
    projectTitle.classList.add("projects__content__project__left__title");
    roleTitle.classList.add("projects__content__project__left__role");
    projectText.classList.add("projects__content__project__left__text");
    projectImg.classList.add("projects__content__project__right__img");
    rectangle.classList.add(
      "projects__content__project__left__title__rectangle"
    );

    //Inserting content
    if (project.classList.contains("projects__content__project--0")) {
      projectTitle.innerHTML = `<a href ="https://github.com/IgnasDav/JavaScript-Umbrella-Weather-website">Umbrella weather Website</a>`;
      roleTitle.textContent = "Front-End";
      projectText.textContent =
        "This project was done as a graduation from JavaScript course where I used weather API to draw cards with weather info and search functionality. At the front of the website there are 5 video timelapses with weather details inside the video";
      projectImg.src = "img/Project 1.PNG";
    }
    if (project.classList.contains("projects__content__project--1")) {
      projectTitle.innerHTML = `<a href ="https://github.com/IgnasDav/JavaScript-Trello-clone---Frello">Trello Clone - Frello</a>`;
      roleTitle.textContent = "Front-End";
      projectText.textContent =
        "Work in progress. Currently working on this project, creating a Trello clone to hone JavaScript skills";
      projectImg.src = "img/Project 2.PNG";
    }
    if (project.classList.contains("projects__content__project--2")) {
      projectTitle.innerHTML = `<a href ="https://github.com/IgnasDav/3.-JavaScript-Project---Address-Book-app-">Address book app</a>`;
      roleTitle.textContent = "Front-End";
      projectText.textContent =
        "This project was done as one of the JavaScript course projects where I learnt to implement search, edit, add to favorite and delete functionalities";
      projectImg.src = "img/Project 3.PNG";
    }
    //Inserting into html
    roleTitle.prepend(rectangle);
    projectTitle.prepend(rectangle);
    projectLeftSide.append(projectTitle, roleTitle, projectText);
    projectRightSide.append(projectImg);
    project.append(projectLeftSide, projectRightSide);
    mainContent.append(project);
  }
}

function renderContacts() {
  main.innerHTML = null;

  //Creating elements

  //Adding classes

  //Adding content

  //Inserting elements into HTML
}

window.addEventListener("DOMContentLoaded", renderAboutMe);
document.querySelector("#about").addEventListener("click", renderAboutMe);
document.querySelector("#resume").addEventListener("click", renderResume);
document.querySelector("#projects").addEventListener("click", renderProjects);
