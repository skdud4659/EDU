#1부터 n번째 값까지 모든 수 구하기
input =[1,2,3,4,5,6,7,8,9,10]

# 첫번째 풀이

# def sum_all(n):
#     total=0
#     for sum in n:
#         total+=sum
#     return total

# result = sum_all(input)
# print(result)

#두번째 풀이(요게 시간 복잡도가 더 적은 것!)

def sum_all(n):
    return int(n*(n+1)/2)

result = sum_all(10)
print(result)

###############################################################################

#9,8,7 순서대로 꺼내기
data = [[1,2,3],[4,5,6],[7,8,9]]
print(data[2][2],data[2][1],data[2][0])

###############################################################################

#dataset에서 A이 몇 번 나왔는지 빈도수 출력하기
dataset = ['Apple','Banana','Canada']

def count_a(array):
    #카운팅 수를 셀 기준점
    a_count = 0
    #대입할 전체에서 첫번째 요소부터 반복
    for data in array:
        #data의 전체 문자열을 범위로 두고 index(알파벳)을 반복
        #len : 텍스트 문자열의 문자 수
        for index in range(len(data)):
            #만약 data(n번째 요소)의 index(알파벳) 중 a가 있으면 a_count에 1씩 더해
            if data[index] == 'a':
                a_count += 1
    return a_count

counting = count_a(dataset)
print(counting)

###############################################################################

