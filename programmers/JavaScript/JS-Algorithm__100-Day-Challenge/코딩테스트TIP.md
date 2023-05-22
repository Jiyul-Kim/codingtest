# 하드코딩
## 삼항연산자
> `조건 ? true : false`
> <br> 기존의 if 문을 아주 간결하게 바꿔주는 연산자이다.
> <br> 실행에서 한 줄 이상 나와야하는 조건문이라면 일반 if 문을 쓰는게 효율적이다.
```js
// 기존
if (num1 === num2){
    return 1
}
return -1
```
```js
// 삼항 연산자
num1 === num2 ? 1 : -1
```
# callback 함수
## filter
> 조건에 **맞는 배열 값만** 추려서 보여준다.
### 짝수 찾기
```js
const num = [1,2,3,4];
return num.map(v => v).filter(n => n % 2 === 0);
```
## reduce
```js
배열.reduce((누적값, 현재값, 인덱스, 요소) => {
    return 결과
}, 초기값)
```
### 계속 더한 값 구하기
```js
const num = [1,2,3,4];
num.reduce((ac, cr) => {
    return ac + cr
}, 0)

>>>10
```
## sort
> 오름차순, 내림차순으로 만들어줌.
### 숫자 오름차순
> 주의, 숫자는 앞자리로 sort하기 때문에 별도의 콜백을 넣어줘야한다.
```js
[12,424,123,4367,234, 235436].sort()

>>> [12, 123, 234, 235436, 424, 4367]
```
```js
// 해결방법
[12,424,123,4367,234, 235436].sort((a,b)=>a-b)

>>> [12, 123, 234, 424, 4367, 235436]
```
### 같은 글자인지 판단하기
> 예로 들어 "allpe", "apple" 두 문자가 있다 치면, 글자를 오름차순으로 해서 같은 글자가 되는지만 보면 되는 것임.
### sort를 이용할 때 배열 안 깨트리기
```js
const newArr = [3, 76, 24].slice().sort((a,b) => a-b)
>>> [3, 24, 76]
```
slice()는 특정 범위의 배열을 복제하는 것인데, 딱히 인자를 안넣었으니 전체 배열을 복사한다는 의미

# Math
## ceil (올림)
### 한정된 자원을 나눠 가질 때
> ex. 피자가 7조각이고, 사람은 10명일 때 두 판은 시켜야함. 그러니까 이럴 때 올림이 유용함.

# 문자열
## replaceAll
> 모든 글자를 바꿔주기 때문에 여러모로 유용함.
### 특정 한 문자 없애기
```js
const str = "BCBdbe"
str.replaceAll("B", "")
>>> 'Cdbe'
```
## 문자열은 인덱싱이 가능하다. 잊지 마시오.

## toString() : 문자열 변환
## matchAll()
> 문자열에서 정규표현식과 매치되는 부분을 검색한다.
### 369 게임
> string.matchAll(/[3|6|9]/g)

# 중복된 문자 제거
## Set
```js
const my_stirng = "people"

[...new Set(my_string)].join('')
```
# 원래 배열의 기반한 배열 순위 매기기 
1. 배열 솔팅하기 
```js
const newArr = emergency.slice().sort((a,b) => b-a)
```
2. map으로 배열 복제 후 indexOf로 순위 넣어주기
```js
return emergency.map(v => newArr.indexOf(v)+1)
```
# some && every
every => **모든 조건이** 만족되면 true반환
some => **하나만** 만족되도 true 반환
만일 어떤 배열 중 하나만 만족되면 0을 반환해라! 이런 문제면 some을 쓰면 되고, 모두 만족하는지 확인이 필요하다면 every가 필요하다.

# 변수를 true / false 스위치 시키고 싶다면? -> !변수


```js

```
```js

```
