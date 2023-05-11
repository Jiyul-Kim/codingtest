// 코딩테스트 입문 > 짝수 홀수 개수
//정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
    const even = num_list.filter(n => n % 2 === 0).length
    const odd = num_list.filter(n => n % 2 !== 0).length
    return [even, odd] ;
}
solution([1, 2, 3, 4, 5])

// shorthand 하기

function solution(num_list) {
    return [
        num_list.filter(n => n % 2 === 0).length,
        num_list.filter(n => n % 2 !== 0).length
    ] ;
}