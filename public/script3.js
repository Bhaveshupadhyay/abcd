const navBtn = globalThis.document.getElementById("navBtn");
const nav1 = globalThis.document.getElementById("nav1");
const nav2 = globalThis.document.getElementById("nav2");
const section1 = globalThis.document.getElementById("section1");
const navImg = globalThis.document.getElementById("navImg");

const deviceWidth = window.innerWidth;

// Log the device width to the console
// console.log("Device Width:", deviceWidth);

if (deviceWidth <= 425) {
  if (nav2.classList.contains('d-block')) {
    globalThis.document.getElementById("cont1").style.marginTop = '100px';
  }

  else if (nav1.classList.contains('d-block')) {
    globalThis.document.getElementById("cont1").style.marginTop = '71px';
  }
}

if (nav1.classList.contains('d-block')) {
  section1.style.marginLeft = '50.1px';
}

navBtn.addEventListener('click', () => {
  nav1.classList.toggle('d-block');
  nav1.classList.toggle('d-none');
  nav1.classList.toggle('position-fixed');
  nav2.classList.toggle('d-none');
  nav2.classList.toggle('d-block');

  // console.log(nav1.classList.contains('d-block'), nav2.classList.contains('d-block'));

  if (nav2.classList.contains('d-block')) {
    section1.style.marginLeft = '';
    navImg.classList.remove('d-none');
    navImg.classList.add('d-block');
    globalThis.document.getElementById("cont1").style.marginTop = '71px';
  }

  else if (nav1.classList.contains('d-block')) {
    section1.style.marginLeft = '50.1px';
    navImg.classList.remove('d-block');
    navImg.classList.add('d-none');
    globalThis.document.getElementById("cont1").style.marginTop = '45px';
  }
});

let isDropdownOpen = false;

const drop1 = globalThis.document.getElementById("drop1");
drop1.addEventListener('click', (e) => {
  const next = e.target.parentElement.nextElementSibling;

  if (isDropdownOpen) {
    next.classList.remove('d-block');
    next.classList.add('d-none');
  } else {
    next.classList.remove('d-none');
    next.classList.add('d-block');
  }

  isDropdownOpen = !isDropdownOpen;
})

let isDropdownOpen2 = false;

const drop2 = globalThis.document.getElementById("drop2");
drop2.addEventListener('click', (e) => {
  const next = e.target.parentElement.nextElementSibling;

  if (isDropdownOpen2) {
    next.classList.remove('d-block');
    next.classList.add('d-none');
  } else {
    next.classList.remove('d-none');
    next.classList.add('d-block');
  }

    isDropdownOpen2 = !isDropdownOpen2;
})