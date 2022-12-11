//netlify 로 배포한 url 
const url = 'https://helpful-rolypoly-e82c96.netlify.app';

function setShare(){
  let resultImg = document.querySelector('#resultImg');
  //alt = point 
  let resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '십이간지 연애유형 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/image-' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

//Kakao.Share.sendDefault() 함수
  //카카오톡 공유하기 버튼을 추가하지 않고, 메시지 보내기 요청만 합니다. 

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
      },
    },

    buttons: [
      {
        title: '결과확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ]
  });
}