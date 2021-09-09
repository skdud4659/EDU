function solution(numbers, hand) {
    var answer = '';
    let left = 10;
    let right = 12;
    for(let i = 0; i<numbers.length; i++) {
        let N = numbers[i]
        if (numbers[i] === 0) {
            N = 11
        }
        if (N === 1 || N === 4 || N === 7) {
            answer+='L'
            left = N
        } else if (N === 3 || N === 6 || N === 9) {
            answer+='R'
            right = N
        } else {
            let leftDistance = Math.abs(N-left)%3 === 0 ? Math.abs(N-left)/3 : Math.abs(((N-1)-left)/3)+1;
            let rightDistance = Math.abs(N-right)%3 === 0 ? Math.abs(N-right)/3 : Math.abs(((N+1)-right)/3)+1; 
            if (leftDistance<rightDistance) {
                answer+='L'
                left = N
            } else if (leftDistance===rightDistance) {
                if(hand === 'right') {
                    answer+='R'
                    right = N
                } else {
                    answer+='L'
                    left = N
                }
            } else {
                answer+='R'
                right = N
            }
        }
    }
    return answer
}

//let result = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],'right')
//let result = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],'left')
 let result = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],'right')
console.log(result)