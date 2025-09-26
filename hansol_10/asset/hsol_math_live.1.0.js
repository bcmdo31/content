window.hnsApi = window.hnsApi || {}
var allgApx = {};
var result;

hnsApi.exitContents = function () {
  // TODO 콘텐츠 나가기 구현
  console.log('exitContents')
  window.unityCloseWebview();
  window.close();
}

hnsApi.finishContents = function () {
  // TODO 콘텐츠 완료 처리 구현
  // alert('finishContents 수업진도 저장 call.');
  // 현재 URL 가져오기hnsApi
  var childSeq = getParameters('childSeq');
  var mathStudyContentDtlIdSq = getParameters('mathStudyContentDtlIdSq');

  console.log(childSeq);
  console.log(mathStudyContentDtlIdSq);
}

//20200821 kkh
//완료, 다음 버튼 클릭시 호출.
hnsApi.finishHangeulContents = function () {
  // TODO 한글 콘텐츠 완료 처리 구현  
  window.unityLessonFinished();
  hnsApi.exitContents();
}

hnsApi.endingType = function(param) {
  console.log('endingType');    
  console.log('' + param);      
  if(allgApx) { 
    console.log('getEndingType true');
    // allgApx.getEndingType('{"type":"자소동화12134","firstYN":"Y","lastYN":"N"}');        
    result = allgApx.getEndingType(param);
  } else {
    console.log('getEndingType false');
  }
}




function getParameters(paramName) {
  // 리턴값을 위한 변수 선언
  var returnValue

  // 현재 URL 가져오기
  var url = location.href

  // get 파라미터 값을 가져올 수 있는 ? 를 기점으로 slice 한 후 split 으로 나눔
  var parameters = url.slice(url.indexOf('?') + 1, url.length).split('&')

  // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
  for (var i = 0; i < parameters.length; i++) {
    var varName = parameters[i].split('=')[0]
    if (varName.toUpperCase() == paramName.toUpperCase()) {
      returnValue = parameters[i].split('=')[1]
      return decodeURIComponent(returnValue)
    }
  }
};
// ======================================================================
// 20200814 kkh
// 콘텐츠 처음 실행시 호출 됨.
apx.addEventListener('pageBubble', function (Event, gApx) {
  this._this=gApx;    
  if(!Event.target) {
    if(Event.type==='Page Run') {
      if (gApx.getEndingType) {              
          allgApx = gApx;
          return result;
          // setTimeout(endingType('{"type":"자소동화23rsf","firstYN":"Y","lastYN":"N"}'), 3000);       
      }; // end if      
    };
  }
});

//20200821 kkh 
//콘텐츠 실행시 값 세팅.
// function endingType(param) {
//   console.log('endingType');    
//   console.log('' + param);    
//   Unity.call('testestest');
//   if(allgApx) { 
//     console.log('getEndingType true');
//     // allgApx.getEndingType('{"type":"자소동화12134","firstYN":"Y","lastYN":"N"}');        
//     allgApx.getEndingType(param);
//   } else {
//     console.log('getEndingType false');
//   }
// }


