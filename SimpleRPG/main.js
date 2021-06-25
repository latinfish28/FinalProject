let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy, imgTreasure,imgCoin,imgMonster;
let scores=0;
let blood=50;
//mapArray - 決定地圖中每個格子的元素
//ctx - HTML5 Canvas用
//currentImgMainX, currentImgMainY - 決定主角所在座標
//imgMountain, imgMain, imgEnemy - 障礙物, 主角, 敵人的圖片物件
const gridLength = 60;
//網頁載入完成後初始化動作
$(function(){
    mapArray=[
        [0,1,1,0,1,3,1,0,5,1],
        [0,0,0,0,1,0,0,0,1,5],
        [3,1,1,0,0,0,0,3,1,0],
        [0,1,0,0,1,1,0,0,0,0],
        [0,1,6,4,1,5,0,0,3,0],
        [0,1,1,1,1,4,0,0,6,4],
        [0,0,0,0,0,1,0,0,1,1],
        [0,1,1,1,0,0,0,0,1,5],
        [0,1,2,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0],
    ];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "SimpleRPG/images/spriteSheet.png";
    currentImgMain = {
        "x":0,
        "y":0
    };

    imgMain.onload = function(){
        ctx.drawImage(imgMain, 0,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    }

    imgMountain = new Image();
    imgMountain.src = "SimpleRPG/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "SimpleRPG/images/Enemy.png";
    imgTreasure=new Image();
    imgTreasure.src="SimpleRPG/images/treasure.png";
    imgCoin=new Image();
    imgCoin.src="SimpleRPG/images/coin.png";
    imgMonster=new Image();
    imgMonster.src="SimpleRPG/images/monster.png";
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            imgTreasure.onload = function(){
                imgCoin.onload = function(){
                    imgMonster.onload = function(){
                        for(var x in mapArray){
                            for(var y in mapArray[x]){
                                if(mapArray[x][y]==1){
                                    ctx.drawImage(imgMountain, 32,65,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                                }else if(mapArray[x][y]==3){
                                    ctx.drawImage(imgEnemy, 7,40,104,135,y*gridLength,x*gridLength,gridLength,gridLength);
                                }else if(mapArray[x][y]==4){
                                    ctx.drawImage(imgTreasure,y*gridLength,x*gridLength,gridLength,gridLength);
                                }else if(mapArray[x][y]==5){
                                    ctx.drawImage(imgCoin,y*gridLength,x*gridLength,gridLength,gridLength);
                                }else if(mapArray[x][y]==6){
                                    ctx.drawImage(imgMonster,y*gridLength,x*gridLength,gridLength,gridLength);
                                }
                            }
                        }        
                    }
                }
    
            }
        }
    }
});

//處理使用者按下按鍵
$(document).on("keydown",function(event){
    let targetImg, targetBlock, cutImagePositionX;
    //cutImagePositionX - 決定主角臉朝向哪個方向
    targetImg = { //主角的目標座標
        "x":-1,
        "y":-1
    };
    targetBlock = { //主角的目標(對應2維陣列)
        "x":-1,
        "y":-1
    }
    event.preventDefault(); 
    //避免鍵盤預設行為發生，如捲動/放大/換頁...
    //判斷使用者按下什麼並推算目標座標
    switch(event.key){
        case "ArrowLeft":
            targetImg.x = currentImgMain.x - gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;//臉朝左
            break;
        case "ArrowUp":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength;
            cutImagePositionX = 355;//臉朝上
            break;
        case "ArrowRight":
            targetImg.x = currentImgMain.x + gridLength;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;//臉朝右
            break;
        case "ArrowDown":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength;
            cutImagePositionX = 0;//臉朝下
            break;
        case "KeyA":
            targetImg.x = currentImgMain.x - gridLength*2;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 175;//臉朝左
            break;
        case "KeyW":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y - gridLength*2;
            cutImagePositionX = 355;//臉朝上
            break;    
        case "KeyD":
            targetImg.x = currentImgMain.x + gridLength*2;
            targetImg.y = currentImgMain.y;
            cutImagePositionX = 540;//臉朝右
            break;    
        case "KeyS":
            targetImg.x = currentImgMain.x;
            targetImg.y = currentImgMain.y + gridLength*2;
            cutImagePositionX = 0;//臉朝下   
            break;
        default://其他按鍵不處理
            return;
    }

    //確認目標位置不會超過地圖
    if(targetImg.x<=540 && targetImg.x>=0 && targetImg.y<=540 && targetImg.y>=0){
        targetBlock.x = targetImg.y / gridLength;
        targetBlock.y = targetImg.x / gridLength;
    }else{
        targetBlock.x = -1;
        targetBlock.y = -1;
    }
    //清空主角原本所在的位置
    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

    if(targetBlock.x!=-1 && targetBlock.y!=-1){
        
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0: // 一般道路(可移動)
                $("#talkBox").text("");
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 1: // 有障礙物(不可移動)
                $("#talkBox").text("有山");
                break;
            case 2: // 終點(可移動)
                $("#talkBox").text("抵達終點 總得分: "+scores+" 剩餘血量: "+blood);
                currentImgMain.x = targetImg.x;
                currentImgMain.y = targetImg.y;
                break;
            case 3: // 敵人(不可移動)
                $("#talkBox").text("注意敵人");
                if(blood>0){
                    blood=blood-2;
                }
                break;
            case 4:
                $("#talkBox").text("找到寶藏");
                scores=scores+2;
                break;
            case 5:
                $("#talkBox").text("找到金幣");
                scores=scores+1;
                break;
            case 6:
                $("#talkBox").text("注意怪獸");
                if(blood>0){
                    blood=blood-3;
                }
                break;
        }
    }else{
        $("#talkBox").text("邊界");
    }
    //重新繪製主角
    ctx.drawImage(imgMain, cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y,gridLength,gridLength);
});