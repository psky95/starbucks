const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//일정 스크롤시 벳지 사라짐
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //gsap.to(요소, 지속시간, 옵션); 애니메이션 라이브러리
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //TOP버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0 
    });
  }else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //TOP버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100 
    });
  }
},300));
//_.throttle(함수,시간) 자바스크립트 라이브러리 스크롤이 연속적으로 되지 않도록 하는 버그를 없앰


//top 버튼클릭시 상단으로 이동
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


//타이틀 페이드효과
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (element, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(element , 1, {
    delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  }); 
});



//공지사항 슬라이드
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});


new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 슬라이드 방향 기본값 
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드사이 여백,
  centeredSlides: true, // 1번 슬라이드 가운데 보이기
  loop: true, // 무한슬라이드
  // autoplay: {
  //   delay: 5000 // 슬라이드 시간
  // },
  pagination: {
    el: '.promotion .swiper-pagination',// 페이지 번호(도트)요소 선택자
    clickable: true, //페이지 번호 클릭 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'//해당 요소에 이전 다음 버튼 활성화
  }
});
//AWARDS 슬라이드
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
},);




// 프로모션
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let inHidePromotion = false; //보여져 있으면
promotionToggleBtn.addEventListener('click', function () {
  inHidePromotion = !inHidePromotion // !가 붙으면 반대의 값을 반환(반대인 숨겨져 있다로 변환)
  if (inHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

//유튜브 이미지 애니메이션
function floatingObject (selector, delay, size) {
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    {//옵션
    y: size, //y축
    repeat: -1, //반복수 -1은 무한
    yoyo: true, //다시 뒤로 올라가는 리벌스같은
    ease: Power1.easeInOut, //타이밍 함수
    delay: random(0, delay)
  });
}

floatingObject ('.floating1', 1, 15);
floatingObject ('.floating2', .5, 15);
floatingObject ('.floating3', 1.5, 20);


//스크롤시 섹션 보이는 이벤트
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,//보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //감시할 위치, 뷰포트의 위치가 되면~
    })
    .setClassToggle(spyEl, 'show') //해당 요소에 'show'를 토글하겠다
    .addTo(new ScrollMagic.Controller()); //ScrollMagic를 동작하는 용도 
});

