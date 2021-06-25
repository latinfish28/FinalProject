let questions = [
    {
        "question":"一天當中，通常什麼時候你的心情是最好的？",
        "answers":[
            ["早上",2],
            ["下午及傍晚",4],
            ["夜裡",6]
        ]
    },
    {
        "question":"你平常走路的速度？",
        "answers":[
            ["步伐很大、頻率較快",6],
            ["步伐很小、頻率較快",4],
            ["走的不快、頭往上看",7],
            ["走的不快、頭往下看",2],
            ["很慢",1]

        ]
    },
    {
        "question":"和別人交談時，你的姿態通常是？",
        "answers":[
            ["雙手交疊站立",4],
            ["雙手緊握",2],
            ["一支手或雙手放在臀部",5],
            ["觸碰與你交談的對象",7],
            ["不自覺摸著耳朵、下巴或是整理頭髮",6]
        ]
    },
    {
        "question":"睡覺之前，通常你的床上姿勢為何？",
        "answers":[
            ["仰躺、伸直",7],
            ["俯躺、伸直",6],
            ["側躺、微捲",4],
            ["頭睡在一側手臂上",2],
            ["被子蓋過頭",1]
        ]
    },
    {
        "question":"做夢時的你，常常遇見什麼？",
        "answers":[
            ["落下",4],
            ["打架或掙扎",2],
            ["找東西找人",3],
            ["飛或漂浮",5],
            ["平常不太做夢",6],
            ["做夢都是愉快的夢",1]
        ]
    },
    {
        "question":"當你坐著休息時，你的姿態通常是？",
        "answers":[
            ["膝蓋併攏",4],
            ["雙腿交叉",6],
            ["雙推伸直",2],
            ["單腿盤在椅子上",1]
        ]
    },
    {
        "question":"下列顏色中，你較喜歡哪色？",
        "answers":[
            ["紅或橘色",6],
            ["黑色",7],
            ["黃色或淺藍色",5],
            ["綠色",4],
            ["紫色或深藍色",3],
            ["白色",2],
            ["棕色或灰色",1]
        ]
    },
    {
        "question":"當你專心在做某件事，但被人打斷了，你通常會怎麼做？",
        "answers":[
            ["歡迎他，與他對話",6],
            ["非常厭惡",2],
            ["在上述兩者之間",4]
        ]
    },
    {
        "question":"當你出席公司派對或是朋友KTV聚會等場所，你通常以什麼形式入場？",
        "answers":[
            ["很大聲入場，引起大家注意",6],
            ["安靜入場，找你認識的人",4],
            ["極安靜入場，盡量不引起注意",2]
        ]
    },
    {
        "question":"當你遇到開心的事情時，你的笑聲通常是？",
        "answers":[
            ["類似欣賞的大笑",6],
            ["笑著、聲音不大",4],
            ["輕聲呵呵笑",3],
            ["羞怯的微笑",5]
        ]
    }    
];

let finalAnswers={
        "0":["總分低於21分：內向的悲觀者","人們認為你是一個害羞的、神經質的、優柔寡斷的人，是需人照顧、永遠要別人為你做決定、不想與任何事或任何人有關的人。他們認為你是一個杞人憂天者，一個永遠看到不存在的問題的人。有些人認為你令人乏味，只有那些深知你的人知道你不是這樣的人。"],
        "1":["21分到30分：缺乏信心的挑剔者","你的朋友認為你勤勉刻苦、很挑剔。他們認為你是一個謹慎的、十分小心的人，一個緩慢而穩定辛勤工作的人。如果你做任何衝動的事或無準備的事。你會令他們大吃一驚。他們認為你會從各個角度仔細地檢查一切之後仍經常決定不做。他們認為這種反應一部分是因為你的小心的天性所引起的。"],
        "2":["31分到40分：以牙還牙的自我保護者","別人認為你是一個明智、謹慎、註重實效的人。也認為你是一個伶俐、有天賦有才幹且謙虛的人。你不會很快、很容易和人成為朋友，但是是一個對朋友非常忠誠的人，同時要求朋友對你也有忠誠的回報。那些真正有機會瞭解你的人會知道要動搖你對朋友的信任是很難的，但相等的，一旦這信任被破壞，會使你很難熬過。"],
        "3":["41分到50分：平衡的中道者","別人認為你是一個新鮮的、有活力的、有魅力的、好玩的、講究實際的、而永遠有趣的人；一個經常是群眾註意力的焦點，但是你是一個足夠平衡的人，不至於因此而昏了頭。他們也認為你親切、和藹、體貼、能諒解人；一個永遠會使人高興起來並會幫助別人的人。"],
        "4":["51分到60分：吸引人的冒險家","別人認為你是一個令人興奮的、高度活潑的、相當易衝動的個性；你是一個天生的領袖、一個做決定會很快的人，雖然你的決定不總是對的。他們認為你是大膽的和冒險的，會願意試做任何事至少一次；是一個願意嘗試機會而欣賞冒險的人。因為你散髮的刺激，他們喜歡跟你在一起。"],
        "5":["60分以上：傲慢的孤獨者","別人認為對你必須“小心處理”。在別人的眼中，你是自負的、自我中心的、是個極端有支配欲、統治欲的。別人可能欽佩你，希望能多像你一點，但不會永遠相信你，會對與你更深人的來往有所躊躇及猶豫。世界本來就是層層嵌套，周而複始，不以任何的意志而改變。"]
};