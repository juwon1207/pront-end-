let random; // 랜덤으로 나올 수 
let count; // 시도한 횟수 카운트

function guess() {
    let num1 = document.getElementById("user").value;
    if (num1 == "") {
        alert('숫자를 입력하십시오');
    }

    else if (num1 == random) {
        let area = document.getElementById("area");
        area.innerHTML = "정답입니다!";
    }
    
    else {
        if (ran > num1) {
            document.getElementById("result").value = (num1 + "보다 큽니다.");
        }
        
        else {
            document.getElementById("result").value = (num1 + "보다 작습니다.");
        }
    }
    document.getElementById("guesses").value = ("시도한 횟수는" + (count++) + "번 입니다.");
}

function Resetgame() {
    ran = Math.floor(Math.random() * 100 + 1); // 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환 함
    count = 1;
    document.getElementById("area").innerHTML = "";
    document.getElementById("result").value = "";
    document.getElementById("guesses").value = "";
    document.getElementById("user").value = "";
}

window.onload = function () {
    document.getElementById("resetbtn").addEventListener('click', function () {
        Resetgame();
    });
    Restgame();
}



// value
// document.getElementById("user").value; = 적은 숫자 - user 라는 id에 적혀있는 값

//innerHTML
// var area = document.getElementById("area");
//area.innerHTML = "정답입니다";

// Math.random = 숫자를 입력한 만큼 랜덤한 숫자
// floor 넣은 이유는 랜덤 수를 넣으면 소수 까지 나옴,, =+1
