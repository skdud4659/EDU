#연결 리스트
#떨어진 곳에 존재하는 데이터를 화살표로 연결하여 관리하는 데이터 구조
#노드 : 데이터 저장 단위(데이터값, 포인터)로 구성(화물칸) / 포인터 : 각 노드 안에서 다음이나 이전의 오드와의 연결 정보를 가지고 있는 공간(연결고리)
#장점 : 미리 데이터 공간을 할당하지 않아도 됨(리스트는 크기가 정해지지 않은 데이터의 공간으로 연결 고리로 이어주기만 하면 자유자재로 늘어남) > 화물 열차
#      원소를 중간에 삽입/삭제 하기 위해서는 앞 뒤 포인터만 변경하면 된다. > 원소 삽입/삭제를 O(1)의 시간 복잡도 안에 할 수 있다.
#단점 : 연결을 위한 별도의 데이터 공간이 필요하여 저장공간 효율이 높지 않음 /
#      연결 정보를 찾아야해서 접근 속도가 느림 (최악의 경우 모든 화물 칸을 탐색해야하기 때문에 O(N)의 시간 복잡도를 가진다.) /
#      중간에 데이터 삭제 시 앞뒤 데이터 연결을 재구성해야함

#####################################################
#클래스 : 같은 속성과 기능을 가진 객체를 총칭
class person:
    #생성자 : 생성시 호출되는 함수
    #__init__은 생성자 함수 
    #self : 객체 자기 자신
    #param_name : 객체의 name 이라는 변수에 저장됨
    def __init__(self, param_name):
        print('i am created!',self)
        #name값 정의
        self.name = param_name

    def talk(self):
        print('안녕하세요 제 이름은',self.name,'입니다.')

person_1 = person("유재석")    #i am created! <__main__.person object at 0x7fbb001b2370>
print(person_1.name)          #유재석
print(person_1)               #<__main__.person object at 0x7fbb001b2370>
person_1.talk()               #안녕하세요 제 이름은 유재석 입니다.
person_2 = person("박명수")
print(person_2.name)
print(person_2)
person_2.talk()         

#####################################################
#LinkedList
#1) head node만 가지고 있기 때문에 self.head에 시작하는 노드를 저장한다.
#2) 다음 노드를 보기 위해서는 각 노드의 next를 조회해서 찾아간다.

#[3] -> [4]
#data, next
class node :
    def __init__(self, data):
        self.data = data
        self.next = None

Node = node(3)
first = node(4)
#Node에 다음 순서로 first를 줘서 [3] -> [4]로 가게끔
Node.next = first

print(Node.next.data)  #4

#위 생성자를 linkedlist로 표현하자면
class linkedlist:
    def __init__(self,data):
        #linkedlist는 head만 가지고 있으니까 head만 지정
        self.head = node(data)

    def append(self,data):
        self.head.next = node(data)
        cur.next = node(data)

Linkedlist = linkedlist(3)
print(Linkedlist.head.next)  #None > 클래스에서 self.next를 None이라고 지정해줬기 때문

