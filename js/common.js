const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  searchInputEl.focus(); //포커스 적용하는 명령
});

//input에 포커스 되면 
searchInputEl.addEventListener('focus',function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); //속성추가
});

searchInputEl.addEventListener('blur',function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


//카피라이트 년도 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //해당년도 반환