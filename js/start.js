// '시작하기' 버튼을 눌렀을 시 메인페이지에서 질문페이지로 넘어가기
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [ , , , , , , , , , , , ,];
const result_select = [];


function begin() {
    //1️⃣ 1초동안 서서히 사라지기 적용
    main.style.WebkitAnimation = 'fadeOut 1s';
    main.style.animation = 'fadeOut 1s';
    
    //2️⃣ 0.45초후에 1초동안 서서히 나타나기 적용
    setTimeout(() => {
      qna.style.WebkitAnimation = 'fadeIn 1s';
      qna.style.animation = 'fadeIn 1s';
      // + 0.45초후에 1️⃣ 완전히 안보이게,2️⃣ 완전히 나타남  
      setTimeout(() => {
        main.style.display = 'none';
        qna.style.display = 'block';
      }, 450);
      
      //질문나오는 goNext() 호출
      let qIdx = 0;
      goNext(qIdx);
      
    }, 450);
  }

  // 질문페이지의 첫 번째 질문과 응답 나오게하기
function goNext(qIdx) {
  if(qIdx === endPoint){
    calResult();
    goResult();
    return;
  }

    let q = document.querySelector('.qBox');
    
    //`q`의 value 처리
    //`qnaList`의 qIdx번째 인덱스의 `q`가 들어옴
    q.innerHTML = qnaList[qIdx].q;
    
    
    // `a` 의 value 처리
    //`qnaList`객체의 qIdx번째 인덱스의 `a`의 배열의 i번 반복
    for (let i in qnaList[qIdx].a) {
      //addAnswer()에 `qnaList`의 qIdx번째 인덱스번째의 `a`의 i번째 인덱스의 answer와 qIdx를 인자로 전달
      addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%';
}

// 2가지 응답 선택지 반복문과 다음 질문으로 넘어가기
function addAnswer(answerText, qIdx, idx) {
    //answerText = qnaList[qIdx].a[i].answer

    //응답 전체를 담는 박스
    let a = document.querySelector('.answerBox');

    //각 2가지 응답 버튼
    let answer = document.createElement('button');
    answer.classList.add('answerList');
    //부트스트랩 css 및 애니메이션 적용
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    //응답전체 박스에 개별응답버튼 순서대로넣기
    a.appendChild(answer);
    //개별응답버튼에 파라미터로 받은 answerText( = qnaList[qIdx].a[i].answer) 넣기
    answer.innerHTML = answerText;

    //버튼 클릭할때마다 발생하는 이벤트 적용
    answer.addEventListener(
        'click',
        function () {
            //모든 응답버튼 children에 담기
            let children = document.querySelectorAll('.answerList');

            //모든 응답버튼 반복
            for (let i = 0; i < children.length; i++) {
                // 모든 응답버튼 비활성화,0.5초 동안 서서히 사라지기
                children[i].disabled = true;
                children[i].style.WebkitAnimation = 'fadeOut 0.5s';
                children[i].style.animation = 'fadeOut 0.5s';
            }
            //0.45초 뒤에 
            setTimeout(function () {
              var target = qnaList[qIdx].a[idx].type;
              for(let i = 0; i < target.length; i++){
                select[qIdx] = target;
              }
                //해당 질문의 응답지를 숨긴다.
                // ✨만약 이 처리를 해주지 않는다면 응답이 숨겨지지 않고 쌓이게 된다.
                for (let i = 0; i < children.length; i++) {
                    children[i].style.display = 'none';
                }
                //다음 질문으로 넘어간다.
                goNext(++qIdx);
            }, 450)
        }, false);
}

function calResult(){
  const getElNum = (select, el) => select.reduce((ac, v) => ac + (v === el), 0);
  for(let i = 0; i < select.length; i++){
              if(getElNum(select, select[i]) === 2 || getElNum(select, select[i]) === 3) {
                result_select.push(select[i]);
                }
              } 
                const final_result =  [...new Set(result_select)];
                if(final_result.every(i=>["I", "S", "T", "J"].includes(i)) == true){
                  var final_num = 0;
                  return final_num;
                }
                else if(final_result.every(i=>["I", "S", "F", "J"].includes(i)) == true){
                  var final_num = 1;
                  return final_num;
                }
                else if(final_result.every(i=>["I", "N", "F", "J"].includes(i)) == true){
                  var final_num = 2;
                  return final_num;
                }
                else if(final_result.every(i=>["I", "N", "T", "J"].includes(i)) == true){
                  var final_num = 3;
                  return final_num;
                }
                else if(final_result.every(i=>["I", "S", "T", "P"].includes(i)) == true){
                  var final_num = 4;
                  return final_num;
                }
                else if(final_result.every(i=>["I", "S", "F", "P"].includes(i)) == true){
                  var final_num = 5;
                  return final_num;
                }
                else if(final_result.every(i=>["I", "N", "F", "P"].includes(i)) == true){
                  var final_num = 6;
                  return final_num;
                }
                else if(final_result.every(i=>["I", "N", "T", "P"].includes(i)) == true){
                  var final_num = 7;
                  return final_num;
                }
                else if(final_result.every(i=>["E", "S", "T", "P"].includes(i)) == true){
                  var final_num = 8;
                  return final_num;
                }
                else if(final_result.every(i=>["E", "S", "F", "P"].includes(i)) == true){
                  var final_num = 9;
                  return final_num;
                }
                else if(final_result.every(i=>["E", "N", "F", "P"].includes(i)) == true){
                  var final_num = 10;
                  return final_num;
                }
                else if(final_result.every(i=>["E", "N", "T", "P"].includes(i)) == true){
                  var final_num = 11;
                  return final_num;
                }
                else if(final_result.every(i=>["E", "S", "T", "J"].includes(i)) == true){
                  var final_num = 12;
                  return final_num;
                }
                else if(final_result.every(i=>["E", "S", "F", "J"].includes(i)) == true){
                  var final_num = 13;
                  return final_num;
                }
                else if(final_result.every(i=>["E", "N", "F", "J"].includes(i)) == true){
                  var final_num = 14;
                  return final_num;
                }
                 else if(final_result.every(i=>["E", "N", "T", "J"].includes(i)) == true){
                  var final_num = 15;
                  return final_num;
                }
            }

function goResult(){
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block"
    }, 450)})
    setResult();
}

function setResult(){ 

  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].mbti;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/'+ point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].desc;

  const resultJob = document.querySelector('.resultJob');
  resultJob.innerHTML = infoList[point].job;
}

