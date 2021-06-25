$(function(){
    //儲存目前作答到第幾題
    var currentQuiz = null;
    var score=0;
    //當按鈕按下後，要做的事情
    $("#startButton").on("click",function(){
        //如果還沒開始作答就從這裡開始
        if(currentQuiz==null){
            //設定目前作答從第0題開始
            currentQuiz=0;
            //顯示題目
            $("#question").text(questions[0].question);
            //將選項區清空
            $("#options").empty();
            //將選項逐個加入
            score=questions[0].answers.forEach(function(element,index,array){
                $("#options").append(`<input name='options' type='radio'
                value='${index}'><label>${element[0]}</label><br><br>`);
            });
            //將按鈕上的文字換成Next
            $("#startButton").attr("value","Next");
        }else{
            //已經開始作答從這邊繼續
            //巡訪哪一個選項有被選取
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    if(currentQuiz==9){
                        //通往最終結果
                        var finalResult = questions[currentQuiz].answers[i][1];
                        if(score<=20){
                            finalResult=0;
                        }else if(score>20&&score<=30){
                            finalResult=1;
                        }else if(score>30&&score<=40){
                            finalResult=2;
                        }else if(score>40&&score<=50){
                            finalResult=3;
                        }else if(score>50&&score<=60){
                            finalResult=4;
                        }else if(score>60){
                            finalResult=5;
                        }
                        //顯示最終結果的標題
                        $("#question").text(finalAnswers[finalResult][0]);
                        //將選項區域清空
                        $("#options").empty();
                        //顯示最終結果內容
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }else{
                        //指定下一題，原始資料從1開始，所以要-1
                        //currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        currentQuiz=currentQuiz+1;
                        //顯示新的題目
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        score=score+questions[currentQuiz].answers.forEach(function(element,index,array){
                        $("#options").append(`<input name='options' type='radio' value='${index
                        }'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false; //跳離迴圈的方式
                }
            });
        }
    });
});