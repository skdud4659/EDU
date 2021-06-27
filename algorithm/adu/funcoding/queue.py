import queue
#FIFO(First-In, First-Out), LILO(Last-In, Last-Out)
#입구가 두 개인 건물에 들어간 순서대로 나오고 마지막에 들어가면 마지막에 나온다.
#Enqueue : 큐에 데이터를 넣는 것 / Dequeue : 큐에서 데이터를 빼는 것
#Queue() : 일반적인 큐 자료 구조
#LifoQueue() : 나중에 입력된 데이터가 먼저 출력(=스택)
#PriorityQueue() : 우선순위를 주고 순위가 높은 순으로 출력

#####################################################

#빈 리스트
queue_list = list()

def enqueue(data):
    #리스트에 입력값을 넣는다.
    queue_list.append(data)

#범위를 10까지의 수로 주고
for index in range(10):
    #enqueue 함수를 작동! > 빈 리스트에 값을 append
    enqueue(index)

result = queue_list

print(result)
#[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
#len(queue_list) = 10

#####################################################

def dequeue():
    #data는 지우고 싶은 값의 자리
    data = queue_list[0]
    #지운다
    del queue_list[0]
    #data값으로 반환!
    return data

print(dequeue())
#0



