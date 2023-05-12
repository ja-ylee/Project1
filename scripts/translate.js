"use strict";
let rus = document.querySelectorAll('.rus');
let eng = document.querySelectorAll('.eng');
//прочее
let navLinks = document.querySelectorAll('.navLink');
let burgerLinks = document.querySelectorAll('.burgerLink');
for (let r of rus) {
  r.addEventListener('click', function () {
    document.querySelector('.usualEng').classList.remove('active');
    document.querySelector('.burgerMenuEng').classList.remove('active');
    document.querySelector('.burgerMenuRus').classList.add('active');
    document.querySelector('.usualRus').classList.add('active');
    let navLinkArr = ['Главная', 'Обо мне', 'Навыки', 'Портфолио', 'Контакты'];
    let i = 0;
    for (let link of navLinks) {
      link.innerHTML = navLinkArr[i++];
    }
    i = 0;
    for (let link of burgerLinks) {
      link.innerHTML = navLinkArr[i++];
    }
    document.querySelector('.personName').innerHTML = 'Денис Новик'
    document.querySelector('.mainInfo').innerHTML = 'UX | UI дизайнер<br>24 года, Минск';
    document.querySelector('.mainInfo').style.fontSize = '1.222em';
    document.querySelector('.mainInfo').style.fontFamily = 'Gilroy-Medium';
    document.querySelector('.aboutMeHeader').innerHTML = navLinkArr[1];
    let aboutMeP = document.querySelectorAll('.aboutMeBlock p');
    aboutMeP[0].innerHTML = 'Привет, Я Денис – UX/UI дизайнер из Минска.<br>Я интересуюсь дизайном и всем что с ним связано';
    aboutMeP[1].innerHTML = 'Я учусь на курсах "Веб и мобильный дизайн<br>интерфейсов" в IT-Academy.';
    aboutMeP[2].innerHTML = 'Готов реализовать классные проекты<br>с замечательными людьми.';
    document.querySelector('.skillsHeader').innerHTML = navLinkArr[2];
    document.querySelector('.skillsText').innerHTML = 'Я работаю в таких программах как';
    document.querySelector('.portfolioHeader').innerHTML = navLinkArr[3];
    let exampleLinks = document.querySelectorAll('.exampleLink');
    exampleLinks[0].innerHTML = 'Online fashion store - Главная';
    exampleLinks[1].innerHTML = 'Reebok Store - Концепт';
    exampleLinks[2].innerHTML = 'Braun Landing Page - Концепт';
    document.querySelector('.contactsHeader').innerHTML = navLinkArr[4];
    document.querySelector('.contactsText').innerHTML = 'Хочешь знать больше или просто поболтать?<br>Добро пожаловать!';
    document.querySelector('.sendMessageButton').innerHTML = 'Отправить сообщение';
    document.querySelector('.contactsDescription').innerHTML = 'Подпишись на меня в<br>Linkedln, Instagram, Behance, Dribble';
  });
}

for (let e of eng) {
  e.addEventListener('click', function () {
    document.querySelector('.usualRus').classList.remove('active');
    document.querySelector('.burgerMenuRus').classList.remove('active');
    document.querySelector('.usualEng').classList.add('active');
    document.querySelector('.burgerMenuEng').classList.add('active');
    let navLinkArr = ['Home', 'About me', 'Skills', 'Portfolio', 'Contacts'];
    let i = 0;
    for (let link of navLinks) {
      link.innerHTML = navLinkArr[i++];
    }
    i = 0;
    for (let link of burgerLinks) {
      link.innerHTML = navLinkArr[i++];
    }
    document.querySelector('.personName').innerHTML = 'Denis Novik'
    document.querySelector('.mainInfo').innerHTML = 'UX | UI designer<br>24 years old, Minsk';
    document.querySelector('.mainInfo').style.fontSize = '1.222em';
    document.querySelector('.mainInfo').style.fontFamily = 'Gilroy-Medium';
    document.querySelector('.aboutMeHeader').innerHTML = navLinkArr[1];
    let aboutMeP = document.querySelectorAll('.aboutMeBlock p');
    aboutMeP[0].innerHTML = 'Hi, I\'m Denis – UX/UI designer from Minsk.<br>I\'m interested in design and everything connected with it.';
    aboutMeP[1].innerHTML = 'I\'m studying at courses "Web and mobile design<br>interfaces" in IT-Academy.';
    aboutMeP[2].innerHTML = 'Ready to implement excellent projects<br>with wonderful people.';
    document.querySelector('.skillsHeader').innerHTML = navLinkArr[2];
    document.querySelector('.skillsText').innerHTML = 'I work in such programs as';
    document.querySelector('.portfolioHeader').innerHTML = navLinkArr[3];
    let exampleLinks = document.querySelectorAll('.exampleLink');
    exampleLinks[0].innerHTML = 'Online fashion store - Homepage';
    exampleLinks[1].innerHTML = 'Reebok Store - Concept';
    exampleLinks[2].innerHTML = 'Braun Landing Page - Concept';
    document.querySelector('.contactsHeader').innerHTML = navLinkArr[4];
    document.querySelector('.contactsText').innerHTML = 'Want to know more or just chat?<br>You are welcome!';
    document.querySelector('.sendMessageButton').innerHTML = 'Send message';
    document.querySelector('.contactsDescription').innerHTML = 'Link on me<br>Linkedln, Instagram, Behance, Dribble';
  });
}