window.hnsApi = window.hnsApi || {}
var allgApx = {};

// hnsApi.exitContents = function () {
//     // TODO 콘텐츠 나가기 구현
//     console.log('exitContents')
//     try{
//         window.unityCloseWebview();
//     }catch(e)
//     {
//         console.log('unityCloseWebview error');
//     }

//     window.close();
// }

// hnsApi.finishContents = function () {
//     // TODO 콘텐츠 완료 처리 구현
//     // alert('finishContents 수업진도 저장 call.');
//     // 현재 URL 가져오기hnsApi
//     var childSeq = getParameters('childSeq');
//     var mathStudyContentDtlIdSq = getParameters('mathStudyContentDtlIdSq');

//     console.log(childSeq);
//     console.log(mathStudyContentDtlIdSq);
// }

// //20200821 kkh
// //완료, 다음 버튼 클릭시 호출.
// hnsApi.finishHangeulContents = function (param) {
//     // TODO 한글 콘텐츠 완료 처리 구현
//     window.unityLessonFinished();
//     window.close();
// }

// hnsApi.endingType = function(param) {
//     console.log('endingType');
//     console.log('' + param);
//     if(allgApx) {
//         console.log('getEndingType true');
//         // allgApx.getEndingType('{"type":"자소동화","firstYN":"Y","lastYN":"N"}');
//         allgApx.getEndingType(param);
//     } else {
//         console.log('getEndingType false');
//     }
// }

// function getParameters(paramName) {
//     // 리턴값을 위한 변수 선언
//     var returnValue

//     // 현재 URL 가져오기
//     var url = location.href

//     // get 파라미터 값을 가져올 수 있는 ? 를 기점으로 slice 한 후 split 으로 나눔
//     var parameters = url.slice(url.indexOf('?') + 1, url.length).split('&')

//     // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
//     for (var i = 0; i < parameters.length; i++) {
//         var varName = parameters[i].split('=')[0]
//         if (varName.toUpperCase() == paramName.toUpperCase()) {
//             returnValue = parameters[i].split('=')[1]
//             return decodeURIComponent(returnValue)
//         }
//     }
// };
// // ======================================================================
// // 20200814 kkh
// // 콘텐츠 처음 실행시 호출 됨.
// // apx=아스펜 자체 객체
// apx.addEventListener('pageBubble', function (Event, gApx) {
//     this._this=gApx;
//     if(!Event.target) {
//         if(Event.type==='Page Run') {
//             if (gApx.getEndingType) {
//                 allgApx = gApx;
//                 setTimeout(hnsApi.endingType('{"type":"한글자","firstYN":"Y","lastYN":"N"}'), 1000);
//             } // end if
//         }
//     }
// });


// **************************
// 20210106 지원 테스트

/**
 * 특정 이벤트 발생 시 데이터 전송 또는 수신
 */
apx.addEventListener('pageBubble', function (Event, gApx) {
    this._this=gApx;
    if(!Event.target) {
        // 페이지 실행
        if(Event.type==='Page Run') {
            if (gApx.testConnect) {
                // console.log('데이터 송신 :', gApx.testConnect().send);
                // console.log('데이터 수신 : math_live');
                // console.log('데이터 :', gApx.testConnect().overlayData);
            }
        } else if ( Event.type == "Custom Event" ) {
            
            try {
                var param = JSON.parse( Event.param );
                if ( param.sendData ) {
                    // 데이터 받기
                    var data = JSON.parse(gApx.sendData())
                    // console.log('컨텐츠 데이터 :', data);

                    // for (var key in data) {
                    //     if (Array.isArray(data[key])) {
                    //         console.log(key, ": ");
                    //         logDepth(data[key], 1);
                    //     } else if (typeof data[key] === 'object') {
                    //         console.log(key, ": ");
                    //         var data2 = data[key];
                    //         for (var key2 in data2) {
                    //             console.log("  "+key2, ": "+data2[key2]);
                    //         }
                    //     } else {
                    //         console.log(key, ": "+data[key]);
                    //     }
                    //     console.log(" ");
                    // }

                }
                var data = JSON.parse(gApx.sendData())
                var nativeItem = JSON.parse(window.msNative.getItem("study_info"))
                
                hsStudy.setDebug(true);
                // ===========================================================
                // 공통 파라메터 Setting
                // hsStudy.set('customerNumber', '1000000001')
                // hsStudy.set('childNumber', '1000000001');
                // hsStudy.set('loginId', 'test01');
                // hsStudy.set('loginType', '아이디');
                // hsStudy.set('loginStatus', '로그인');
                // hsStudy.set('title', '한글놀이터 컨텐츠 1');
                
                hsStudy.set('serviceId', '신기한나라 Live');
                hsStudy.set('screenType', 'Web');
                
                hsStudy.set('title', document.title);
                hsStudy.set('childNumber', nativeItem.childNumber);
                hsStudy.set('customerNumber', nativeItem.customerNumber);
                hsStudy.set('loginId', nativeItem.loginId);
                // ===========================================================
                // 컨텐츠 메타 Setting
                // hsStudy.setStudyMeta('studyContentId', 'C1000000001');
                // hsStudy.setStudyMeta('studyContentDtlId', '1000000001');
                hsStudy.setStudyMeta('studyContentId', nativeItem.studyContentId);
                hsStudy.setStudyMeta('studyContentDtlId', nativeItem.studyContentDtlId);
                hsStudy.setStudyMeta('studyStartTime', Date.now());
                hsStudy.setStudyMeta('studyEndTime', Date.now());
                hsStudy.setStudyMeta('studyTime', 1);
                hsStudy.setStudyMeta('studyResult', 65);
                
                // ===========================================================
                // 이벤트 공통 데이터 Setting
                hsStudy.setEventCommon('type', data.commonInfo.type);
                hsStudy.setEventCommon('round', data.commonInfo.round);
                if (data.commonInfo.startTime == undefined) 
                    hsStudy.setEventCommon('startTime', 0);
                else
                    hsStudy.setEventCommon('startTime', data.commonInfo.startTime);
                    
                if (data.commonInfo.stopTime == undefined) 
                    hsStudy.setEventCommon('stopTime', 0);
                else
                    hsStudy.setEventCommon('stopTime', data.commonInfo.stopTime);
                // hsStudy.setEventCommon('stopTime', data.commonInfo.startTime);
                // hsStudy.setEventCommon('stopTime', data.commonInfo.stopTime);
                hsStudy.setEventCommon('finishTime', data.commonInfo.finishTime);
                hsStudy.setEventCommon('isFinish', data.commonInfo.isFinish);
                hsStudy.setEventCommon('roundRandom', data.commonInfo.roundRandom);
                hsStudy.setEventCommon('dragAllCount', data.commonInfo.dragAllCount);
                hsStudy.setEventCommon('touchAllCount', data.commonInfo.touchAllCount);
                hsStudy.setEventCommon('successAllCount', data.commonInfo.successAllCount);
                hsStudy.setEventCommon('failAllCount', data.commonInfo.failAllCount);
            
                // ===========================================================
                // 이벤트 데이터 Setting
                for (var k in data.roundInfo) {
                    hsStudy.setEvent({
                        'roundNumber': Number(data.roundInfo[k].roundNumber),
                        'subType': data.roundInfo[k].subType,
                        'OKbutton': data.roundInfo[k].OKbutton,
                        'Qbutton': data.roundInfo[k].Qbutton,
                        'touchCount': data.roundInfo[k].touchCount,
                        'touchPath': data.roundInfo[k].touchPath,
                        'dragCount': data.roundInfo[k].dragCount,
                        'dragPath': data.roundInfo[k].dragPath,
                        'successCount': data.roundInfo[k].successCount,
                        'failCount': data.roundInfo[k].failCount,
                        'questionCount': data.roundInfo[k].questionCount,
                        'playTime': data.roundInfo[k].playTime,
                        'lineCount': data.roundInfo[k].lineCount,
                        'targetRandom': data.roundInfo[k].targetRandom,
                        'targetMove': data.roundInfo[k].targetMove,
                        'roundColor': data.roundInfo[k].roundColor,
                        'stickerCount': data.roundInfo[k].stickerCount
                    });
                };
                
                console.log('hsStudy : ', hsStudy)
                // 학습데이터 전송
                // console.log("학습데이터 전송");
                hsStudy.send();
                console.log('send 완료!')
                
            } catch(e) {}
        }
    } 
}, {accept: [
    'Page Run', 'Tap Start', 'Custom Event'
]});

/**
 * overlay로 전송할 데이터 설정
 */
hnsApi.setDataLive = function() {
    var liveData = {
        send : 'math_live',
        math_data : 'math_live.js data'
    }

    return liveData
}

function logDepth(obj, n) {
    var blank = '  '.repeat(n);
    for (var i=0; i<obj.length; i++) {
        if (Array.isArray(obj[i])) {
            var log = "";
            for (var j=0; j<obj[i].length; j++) {
                for(var k in obj[i][j]) {
                    if (k == 'x') {
                        log += "{" + k + ':' + obj[i][j][k];
                        log += ', ';
                    } else {
                        log += k + ':' + obj[i][j][k] + "} ";
                    }
                }
            }
            console.log(blank + log);
        } else {
            var log = "";
            for(var k in obj[i]) {
                if (k == 'x') {
                    log += "{" + k + ':' + obj[i][k] + ', ';
                } else if (k == 'y') {
                    log += k + ':' + obj[i][k] + "}";
                    console.log(blank + log);
                } else {
                    if (Array.isArray(obj[i][k])) {
                        console.log(blank+k, ': ');
                        logDepth(obj[i][k], n+1);
                    } else {
                        console.log(blank+k, ': '+obj[i][k]);
                    }
                }
            }
            
        }
    }
}
// **************************