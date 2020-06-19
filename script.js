const displayMobileNav = () => {
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger-icon');
  menu.classList.toggle('hide-menu');
  hamburger.classList.toggle('open');
}

const enlargeProject = (element) => {
  element.classList.toggle('project-modal')
}
