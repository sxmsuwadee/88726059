//
var POSSIBLE_WORDS = ["obdurate","verisimilitude","defenestrate","obsequious","dissonant","toady","idempotent"];//POSSIBLE_WORDS เก็บคำที่เราจะสุ่ม
var MAX_GUESSES = 6;//กำหนดค่า MAX_GUESSES ให้เท่ากับ 6 คือเดาสูงสุดได้ 6 ครั้ง

var word = "?";//สร้างตัวแปร word ให้เท่ากับ ?
var guesses = "";//สร้างตัวแปร guesses เป็นค่าว่าง
var guessCount = MAX_GUESSES; //ให้guessCount มีค่าเท่ากับ MAX_GUESSES

function  newGame(){ // ฟังก์ชั่น เริ่มเกมใหม่

    var randomIndex =parseInt(Math.random()* POSSIBLE_WORDS.length);// สุ่ม index ของตำแหน่งคำใน POSSIBLE_WORDS  
    word = POSSIBLE_WORDS[randomIndex];//ให้ word เท่ากับ POSSIBLE_WORDS ในตำแหน่งนั้นๆ
    guessCount = MAX_GUESSES;//ให้guessCount เท่ากับ MAX_GUESSES
    guesses = "";//guesses เป็นค่าว่าง
    updatePage();//อัพเดตขึ้นหน้าเพจ
}


function guessLetter(){//ฟังก์ชั่นที่ให้ผู้เล่นใส่อักษร
    var input = document.getElementById("guess");//input  เพื่อให้อิงไปยังตัวแปรที่อยู่ใน .html
    var clue = document.getElementById("clue");//clue เพื่อให้อิงไปยังตัวแปรที่อยู่ใน .html
    var letter = input.value;//letter เท่ากับ input.value ค่าของตัวแปร input
    if(guessCount == 0 || clue.innerHTML.indexOf("_")< 0 || guesses.indexOf(letter) >= 0){//ถ้า guessCount == 0 หรือ clue.innerHTML.indexOf("_")< 0 หรือguesses.indexOf(letter) >= 0 เพื่อแสดงถึงจบเกม
        return;//
    }
    guesses += letter;// guessesบวกเท่ากับคำที่ใส่
    if(word.indexOf(letter)< 0){//ถ้าคำตำแหน่ง letter น้อยกว่า 0
        guessCount--;//ให้ guessCount -1
    }
    updatePage();//อัพเดตลงหน้าเพจ
}

function updatePage(){ //ฟังก์ชั่นอัพเดตหน้าเพจ

    var clueString = "";//ให้clueString เท่ากับ ค่าว่าง
    for( var i=0 ;i<word.length;i++){//ให้ ร น้อยกว่าความยาวของคำ
        var letter = word.charAt(i);//letter เท่ากับ ตัวแรก จนถึง ตัวสุดท้ายตามลำดับ ทีละตัว
        if(guesses.indexOf(letter)>=0){//ถ้าแต่ละตัว มากกว่าหรือเท่ากับ 0
            clueString += letter + " ";//ให้clueString บวกกับตัวนั้นๆแล้วเว้นวรรค
        }else{ //ถ้าแต่ละตัว ไม่มากกว่าหรือไม่เท่ากับ 0
            clueString += "_ ";//ให้clueString เท่ากับ _
        }
        
    }
    var clue = document.getElementById("clue");//สร้าง clue เพื่อให้อิงไปยังตัวแปรที่อยู่ใน .html
    clue.innerHTML = clueString;// ให้clue.innerHTML เท่ากับ clueString


    var guessArea = document.getElementById("guesses");//สร้าง guessArea เพื่อให้อิงไปยังตัวแปรที่อยู่ใน .html
    if(guessCount == 0){//ถ้าguessCount เท่ากับ 0
        guessArea.innerHTML = " You lose."; //แสดงว่าแพ้ You lose.
    }else if(clueString.indexOf("_")<0){//แต่ถ้ามี _ น้อยกว่า 0
        guessArea.innerHTML = " You win!!!";//แสดงว่าชนะ You win!!!

    }else{//ถ้าguessCount ไม่เท่ากับ 0 และ ถ้ามี _ ไม่น้อยกว่า 0
        guessArea.innerHTML = "Guesses: " + guesses;// แสดง Guesses: +อักษรที่ใส่ 
    }


    var image = document.getElementById("hangmanpic");//สร้างimage เพื่อให้อิงไปยังตัวแปรที่อยู่ใน .html
    image.src ="img/hangman"+ guessCount +".gif"; // เป็นการแสดงรูปตาม guessCount เมื่อ guessCount เปลี่ยนแปลง รูปก็จะเปลี่ยนตามไปด้วย
}
