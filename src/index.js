import home from './home';
import about from './about';
import menu from './menu';
import contact from './contact';

const content = document.getElementById('content');
content.appendChild(home());

const tabsHandler = (() => {
  const tabs = document.querySelectorAll('.tab');

  const clearActiveTabs = () => {
    tabs.forEach((tab) => tab.classList.remove('tab-active'));
  };

  tabs.forEach((tab) => tab.addEventListener('click', clearActiveTabs));

  const homeTab = document.querySelector('.home');
  homeTab.addEventListener('click', () => {
    homeTab.classList.add('tab-active');
    content.firstChild.replaceWith(home());
  });

  const aboutTab = document.querySelector('.about');
  aboutTab.addEventListener('click', () => {
    aboutTab.classList.add('tab-active');
    content.firstChild.replaceWith(about());
  });

  const menuTab = document.querySelector('.menu');
  menuTab.addEventListener('click', () => {
    menuTab.classList.add('tab-active');
    content.firstChild.replaceWith(menu());
  });

  const locationTab = document.querySelector('.contact');
  locationTab.addEventListener('click', () => {
    locationTab.classList.add('tab-active');
    content.firstChild.replaceWith(contact());
  });
})();
