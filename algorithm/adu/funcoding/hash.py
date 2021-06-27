#hash table : 딕셔너리

hash_table = list([0 for i in range(8)])

def get_key(data):
    #해쉬 데이터 -숫자로 된 긴 것
    return hash(data)


def hash_func(key):
    #해쉬함수 : 임의의 길이를 갖는 메시지를 입력하여 고정된 길이의 해쉬값을 출력하는 함수
    #키로 얻은 값을 해쉬 함수를 이용하여 위치
    return key % 8

def save_data(data,value):
    #키를 이용한 해쉬 함수를 통해 해당 데이터의 위치를 확인해서 해쉬테이블의 value값으로 넣음
    hash_addres = hash_func(get_key(data))
    hash_table[hash_addres] =value

def read_data(data):
    hash_addres = hash_func(get_key(data))
    #키를 이용한 해쉬 함수를 통해 해당 데이터의 위치를 확인해서 데이터를 읽음
    return hash_table[hash_addres]

print(save_data('dave','3'))
print(save_data('andy','2'))
print(read_data('dave')) #3 : save_data dave의 value값
print(read_data('andy')) #2 : save_data andy의 value값
print(hash_table) #['3', 0, '2', 0, 0, 0, 0, 0]

#####################################################
#해쉬 테이블의 가장 큰 문제는 충돌
#이 문제를 충돌(Collision) 또는 해쉬 충돌(Hash Collision)이라고 부른다.
#1) Chaining : 개방 해슁 또는 Open Hashing 중 하나로 해쉬 테이블 저장공간 외의 공간을 활용 (링크드 리스트로 데이터를 추가로 뒤에 연결)
class linkedtuple:
    def __init__(self):
        self.items = list()
    
    #[("aaaaa", "test")] -> [("bbbbb", "test33")]
    def add(self, key, value):   #.add("aaaaa", "test")
        self.items.append((key, value))  ##[("aaaaa", "test")]

    def get(self, key):
        for k, v in self.items:
            if key == k:
                return v

class lindedDict:
    def __init__(self):
        self.itims = []
        for i in range(8):
            self.items.append(linkedtuple())
            
    def put(self, key, value):
        index = hash(key) % len(self.items)
        self.items[index].add(key,value)
        return

    def get(self, key):
        index = hash(key) % len(self.items)
        return self.items[index].get(key)
        

#2) Linear Probing : 폐쇄 해슁 또는 Close Hashing 중 하나로 해쉬 테이블 저장공간 안에서 충돌 문제를 해결(hash address의 다음 address부터 맨 처음 나오는 빈공간에 저장)
