import home from './home.js';
import about from './about.js';

const content = document.getElementById('content')
content.appendChild(home());

const tabsHandler = (() => {
  const tabs = document.querySelectorAll('.tab');

  const clearActiveTabs = () => {
    tabs.forEach((tab) => tab.classList.remove('tab-active'));
  }

  tabs.forEach((tab) => tab.addEventListener('click', clearActiveTabs));

  const homeTab = document.querySelector('.home');
  homeTab.addEventListener('click', () => {
    homeTab.classList.add('tab-active');
    content.firstChild.replaceWith(home());
  })

  const aboutTab = document.querySelector('.about');
  aboutTab.addEventListener('click', () => {
    aboutTab.classList.add('tab-active');
    content.firstChild.replaceWith(about());
  })
})();