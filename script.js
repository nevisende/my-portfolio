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
const liveUrlLink = document.getElementById('live-url');
const sourceUrlLink = document.getElementById('source-url');

const projects = [{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-1.png', './media/project-1.png', './media/project-1.png', './media/project-1.png'],
  liveUrl: 'http://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
},
{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-2.png', './media/project-2.png', './media/project-2.png', './media/project-2.png'],
  liveUrl: 'http://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
},
{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-3.png', './media/project-3.png', './media/project-3.png', './media/project-3.png'],
  liveUrl: 'http://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
},
{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-4.png', './media/project-4.png', './media/project-4.png', './media/project-4.png'],
  liveUrl: 'http://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
},
{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-5.png', './media/project-5.png', './media/project-5.png', './media/project-5.png'],
  liveUrl: 'http://hackon.me',
  sourceUrl: 'https://github.com/nevisende/my-portfolio',
},
{
  name: 'Project name goes here',
  tecnologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi expedita quos velit magni? Porro eos libero, numquam neque nisi facere eum modi a quos autem, facilis nihil hic at aliquid eaque error molestiae sit voluptatum assumenda beatae nostrum. Quas, delectus',
  images: ['./media/project-6.png', './media/project-6.png', './media/project-6.png', './media/project-6.png'],
  liveUrl: 'http://hackon.me',
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
    const bigImageNumber = 0;
    const projectNumber = projectButton.value;
    let i;
    let k;
    popupTitle.innerText = projects[projectNumber - 1].name;
    technologiesList.innerHTML = '';
    popupImgList.innerHTML = '';

    for (i = 0; i < projects[projectNumber - 1].tecnologies.length; i += 1) {
      const tech = document.createElement('li');
      tech.innerText = projects[projectNumber - 1].tecnologies[i];
      technologiesList.appendChild(tech);
    }
    popupImg.src = projects[projectNumber - 1].images[bigImageNumber];

    for (k = 0; k < projects[projectNumber - 1].images.length; k += 1) {
      const image = document.createElement('img');
      image.src = projects[projectNumber - 1].images[k];
      image.classList.add('list-img');
      popupImgList.appendChild(image);
    }

    popupP.innerText = projects[projectNumber - 1].desc;
    liveUrlLink.href = projects[projectNumber - 1].liveUrl;
    sourceUrlLink.href = projects[projectNumber - 1].sourceUrl;
    popupContainer.style.display = 'flex';
  });
});

closePopup.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});
