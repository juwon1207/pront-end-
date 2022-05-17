<h3>Javascript</h3>

<h5>자바스크립트는 크로스 플랫폼(cross platform), 객체지향 스크립트 언어로 웹페이지의 동작을 담당한다.
자바스크립트는 브랜든 아이크가 개발하였다. 1995년에 근무하면서 자바스크립트의 개념을 만들었다. 처음에 자바스크립트가 아닌 '모카(Mocha)'라는 이름을 붙였다. 다시 라이브스크립트(LiveScript)로 바뀌었는데 당시에 자바가 큰 인기를 끌어 마케팅 효과를 이용해 이름을 현재의 자바스크립트 (JavaScript)(Js)로 바뀌었다. 현재의 개발자들이 가장 관심 많이 가지는 언어로 뽑히고 있다.</h5>

> 자바스크립트의 장점은 컴파일 과정이 없기 때문에 다른 언어와 비교 했을 때 빠른 시간 안에 슼크립트 코드를 작성할 수 있게 도와준다. 기존 C언어나 자바언어와 달리 굉장히 단순한 구조와 원칙을 가지고 있기 때문에 초보 개발자들이 쉽게 배우고 이해할 수 있다.

> 단점은 성능이나 보안 측면이다. 일부 내부에서 제공되는 기능이 제한적이고,  관련된 개발도구도 적은 편이다 또한 자바스크립트는 HTML 소스코드에 함께 작성 되면서 소스코드가 외부로 공개되는데, 이 과정에서 보안이 취약하다.

<h2> 자바스크립트의 기본 문법 </h2>



<h3> 1. 변수 </h3>

<h5>자바스크립트에는 변수형(int, double, string)이 존재하지 않는다. var 이라는 가변형 변수만 존재하여 초기화 할때 형태에 따라서 알아서 할당된다.최신 js에선 let이라는 가변형 블럭 지역 변수와 const라는 불변현 블럭 지역 변수가 추가되었다.</h5>

```js
var i;
var x = 123;
var y = "123";
var z = false;
var w = null;
<!-- 구분 -->
let x = 123;
x = "123";

const y = false;
y = null; // error
```

<h3> 2. 연산자 </h3>

<h5> +, -, *, /, %, ++, --와 같은 증감 연산자도 사용할 수 있다. c언어랑은 달리 a = a + 1 과 같은 식은 쓰지 못하고 a += 1 은 식은 쓸 수 있다. </h5>

```js
a = a + 1 (x)
a += 1 (o)
<!-- 구분 -->
var s = "String1" + "String2";
console.log(s);
```

<h3> 3. 조건문 </h3>

<h5> c언어와 같은 ==, !=, &&, ||, >, <, if, else if, else 등의 조건문을 쓸 수 있다.</h5>

```js
a==b
a!=b
a==b && a==c
a==b || a==c
a > b
<!-- 구분 -->
if (a > b) {
    console.log("a is more than b.")
} else if (a == b) {
    console.log("a is the same as b.")
} else {
    console.log("a is less than b.")
}
```

<h3> 4. 함수 </h3>

<h5> js의 함수는 굉장히 다채롭게 선언할 수 있다. 또한 최신 문법에는 화살표 함수라는 개념이 도입 되었다.

```js
function notify(message) {
    console.log('# NOTIFICAION : ' + message);
}

notify('say something');
<!-- 구분 -->
# NOTIFITAION : say something
<!-- 구분 -->
var notify = function (message) {
    console.log('# NOTIFICAION : ' + message);
}

notify('say something');
<!-- 구분 -->
var notify = () => {
    console.log('# NOTIFICAION : ' + message);
}

notify('say something');
<!-- 구분 -->
var add = (value1, value2) => value1 + value2;

console.log(add(10, 20));
```

<h3> 5. 배열 </h3>



```js
배열의 선언
var arr = new Array();
var arr = [];
```

###### 배열에 값 삽입

초기화시 값 삽입

```js
var careers = [
    "Warrior",
    "Archer",
    "Wizard"
];
```

인덱스를 이용하여 삽입

```js
var careers = [];
careers[0] = "Warrior";
careers[1] = "Archer";
careers[2] = "Wizard";
```



<h3> 6. 반복문 </h3>

```js
for (var i=0; i<5; i++) {
    console.log(i);
}
<!-- 구분 -->
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
<!-- 구분 -->
for 변수와 배열
var arr = [10, 20, 30, 40, 50];

for (var i in arr) {
    console.log(i);
}
```

<h3> 7. 문자열 </h3>

문자열은 가장 기본적인 구조인데 이렇게 뒤에 있는 이유는 알아둬야 할 함수가 생각보다 많아서다. 그 중에도 중요한 것만 기록할 예정이다.

```js
var welcome = "ONDE Planet is the most peaceful space in the universe";

console.log(welcome.charAt(0));
// charAt(n) : n번째 문자를 출력한다. 결과는 O

console.log(welcome.charCodeAt(0));
// charCodeAt(n) : n번째 문자의 유니코드를 출력한다. 결과는 79

console.log(welcome.indexOf("x"));
// indexOf("?") : ?라는 글자가 있다면 글자의 인덱스를, 없다면 false(-1)을 출력한다. 결과는 -1

console.log(welcome.includes("space"));
// includes("?") : ?라는 글자가 있다면 true(0), 없다면 false(-1)을 출력한다. 결과는 0

console.log(welcome.replace("peaceful", "nasty"));
// replace("a", "b") : a를 b로 교체한다. 결과는 ONDE Planet is the most nasty space in the universe.

console.log(welcome.search("universe"));
// search("?") : ?라는 글자를 검색하여 첫 문자의 시작 지점을 알려준다. 결과는 46

console.log(welcome.slice(0,4));
// slice(n, n') : n~n'-1 까지의 문자를 가져온다. 결과는 ONDE

console.log(welcome.split(" "));
// split("?") : ?라는 문자를 기준으로 문자열을 분리한다. 결과는 ONDE,Planet,is,the,most,peaceful...

console.log(welcome.trim());
// trim() : 앞, 뒤의 공백을 제거하는 역할을 한다. 이 값에서는 앞뒤에 공백이 없으므로 결과가 본래의 문자열과 동일하다.

console.log(welcome.length);
// length : 문자열의 길이를 반환한다. 결과는 55
```

<h3> 8. 수학연산 </h3> 

Math라는 기능을 이용하여 사용할 수 있는 연산들이다.

```js
Math.abs(-3);
// Math.abs(n) : n을 절댓값으로 바꾼다.

Math.ceil(3.1);
// Math.ceil(n) : n값을 올림한다.

Math.floor(3.9);
// Math.floor(n) : n값을 내림한다.

Math.round(3.5);
// Math.round(n) : n값을 반올림한다.

var a = Math.random();
// Math.random() : 난수를 생성한다.

var b = Math.random()*10+10;
// Math.random()*x+y : y~x+y 범위에서 난수가 생성된다.

var c = Math.floor(Math.random() * (max - min)) + min;
// min 부터 max - 1 까지 범위의 난수
```

<h3> 9. 형변환 </h3>

```js
// Number -> String
var num = 2018;
var str = String(num); // "2018"
var str = num.toString(); // "2018"

// String -> Num
var str = "2018.08";
var mInt = Number(str); // 2018
var mInt = parseInt(str); // 2018
var mFloat = parseFloat(str); // 2018.08

// Object -> String
var user = {
    name: '배진오',
    age: 24,
};
console.log(user); // { name: '배진오', age: 24 }

var strUser = JSON.stringify(user); // 문자열 JSON
console.log(strUser); // "{\"name\":\"배진오\",\"age\":24}"

var strUserToObject = JSON.parse(strUser);
// JSON 형식의 문자열이면 parse를 이용해서 Object로 변환할 수 있음
```











