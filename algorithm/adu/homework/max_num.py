#대입할 것들
input = [3, 5, 6, 1, 2, 4]   

def find_max_num(array):
    #array의 0번째값을 기준으로 max_num이라는 최대값을 정해줌
    max_num = array[0]
    #array에서 num(숫자)들을 반복
    for num in array:
        #만약 반복되고있는 숫자가 현재 최대값보다 크면 최대값을 해당 숫자로 바꿔주고 또 다시 반복문이 돌아감
        if num > max_num:
            max_num = num

    return max_num

result = find_max_num(input)
print(result)