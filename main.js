const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

//우리가 toggleBtn을 클릭 할 때 마다 {}안에 함수를 실행 해줘
//toggleBtn.addEventListener('click',() => {});
toggleBtn.addEventListener('click', () => {

    menu.classList.toggle('active');
    icons.classList.toggle('active');
    //클릭 했을때, menu와 icons의 class가 active 되어 있다면, 빼주고
    //안되어 있으면 active 해주는 역할.
});