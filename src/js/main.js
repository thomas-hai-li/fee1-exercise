// image directory data
const imgDir = '/brief/assets/browser-images/'
const imgFile = {
  'dog': 'Dog with shades.png',
  'storm-trooper': 'Storm Trooper.png',
  'pineapple': 'Pineapple Vacation.png',
  'donuts': 'Donuts.png'
}

// get elements for dropdown menu interaction
const body = document.querySelector('body');
const imgMain = document.querySelector('.mainsection__img')
const selectedOption = document.querySelector('.selected');
const dropdownOptions = document.querySelector('.dropdown-options');
const options = document.querySelectorAll('.option');

// opening / closing the menu
selectedOption.addEventListener('click', (e) => {
  dropdownOptions.classList.toggle('dropdown-options--open');
});

body.addEventListener('click', (e) => {
  if (e.target.id !== 'selected-option') {
    dropdownOptions.classList.remove('dropdown-options--open');
  }
});

// selecting an option from the menu
// note that the default selection is gone, as the user didn't like pizza and bears :(
options.forEach(option => {
  option.addEventListener('click', (e) => {

    // change the text
    selectedOption.innerHTML = option.querySelector('.option__text').innerHTML;

    // change the image
    const imgID = option.querySelector('input').id;
    const imgFilePath = imgDir + imgFile[imgID];

    // hide the menu
    dropdownOptions.classList.remove('dropdown-options--open');

    imgMain.src = imgFilePath;
    imgMain.alt = imgID;
  });
});
