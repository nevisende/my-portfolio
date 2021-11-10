/*  eslint-disable linebreak-style  */
const hamburgerMenu = document.getElementById('hamburger-menu');
const headerList = document.getElementById('header-list');
const menuIcon = document.getElementById('menu-icon');
const itemsHeader = document.querySelectorAll('.header-item');
const projectButtons = document.querySelectorAll('.project-button');
const popupContainer = document.querySelector('.popup-container');
const closePopup = document.getElementById('close-popup');
const popupTitle = document.getElementById('popup-title');
const popupImg = document.querySelector('.popup-img');
const popupImgList = document.querySelector('.images');
const popupP = document.getElementById('popup-p');
const technologiesList = document.querySelector('.popup-list');
const liveUrlButton = document.getElementById('live-url');
const sourceUrlButton = document.getElementById('source-url');

const projects = [{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-1.png', './media/project-1.png', './media/project-1.png', './media/project-1.png'],
  liveUrl: 'htttp://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
},
{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-2.png', './media/project-2.png', './media/project-2.png', './media/project-2.png'],
  liveUrl: 'htttp://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
},
{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-3.png', './media/project-3.png', './media/project-3.png', './media/project-3.png'],
  liveUrl: 'htttp://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
},
{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-4.png', './media/project-4.png', './media/project-4.png', './media/project-4.png'],
  liveUrl: 'htttp://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
},
{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-5.png', './media/project-5.png', './media/project-5.png', './media/project-5.png'],
  liveUrl: 'htttp://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
},
{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-6.png', './media/project-6.png', './media/project-6.png', './media/project-6.png'],
  liveUrl: 'htttp://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
}];

function toogleMenu() {
  headerList.classList.toggle('header-list');
  hamburgerMenu.classList.toggle('hamburger-menu');
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}

menuIcon.addEventListener('click', () => {
  toogleMenu();
});

itemsHeader.forEach((item) => {
  item.addEventListener('click', () => {
    if (window.outerWidth <= 980) toogleMenu();
  });
});

projectButtons.forEach((projectButton) => {
  projectButton.addEventListener('click', () => {
    const projectNumber = projectButton.value;
    popupTitle.innerText = projects[projectNumber - 1].name;
    for (var i = 0; i < projects[projectNumber - 1].tecnologies.length; i++) {
      let tech = document.createElement('li');
      tech.innerText = projects[projectNumber - 1].tecnologies[i];
      technologiesList.appendChild(tech);
    }
    popupImg.src = projects[projectNumber - 1].images[0];
    for(var i = 0; i < projects[projectNumber - 1].images.length; i++) {
      let image = document.createElement('img');
      image.src = projects[projectNumber - 1].images[i];
      image.classList.add('list-img');
      popupImgList.appendChild(image);
    }
    popupP.innerText = projects[projectNumber - 1].desc;
    popupContainer.style.display = 'flex';
    
  });
});

closePopup.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

// Form validation JS

const contactForm = document.getElementById('contact-form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

function emailValidation() {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email.value));
}

function emailLowerCheck() {
  const arr = email.value.split('');
  let result = true;
  arr.forEach((x) => {
    // eslint-disable-next-line max-len
    if (!((x.charCodeAt() >= 97 && x.charCodeAt() <= 122) || x.charCodeAt() === 64 || x.charCodeAt() === 46)) {
      result = false;
    }
  });
  return result;
}

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value.trim() === '') {
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'Email is required!';
    e.stopPropagation();
  } else if (emailValidation() === false) {
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'Please enter your email.';
  } else if (emailLowerCheck() === false) {
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'Please write your email in Lower case.';
    errorMessage.scrollIntoView(true);
  } else {
    errorMessage.style.display = 'none';
    contactForm.submit();
  }
});
