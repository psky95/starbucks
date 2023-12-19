// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  //player id속성 값을 찾아
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', //재생할 영상 id
    playerVars: {//재생하기 위한 변수들
      autoplay: true, //자동재생 유무
      loop: true, // 반복재생 유브
      playlist: 'An6LvWQuj_8' //반복 재생할 영상 id 
    }, 
    events: { //재생 되는 영상에 이벤트
      onReady: function (event) {//영상이 재생되면
        event.target.mute() //음소거
      }
    }
  });
}
