#Tree : Node와 Branch를 이용해서 사이클을 이루지 않도록 구성한 데이터 구조
# > 이진트리의 형태로 탐색(검색) 알고리즘 구현을 위해 많이 사용된다.
#####################################################
#Node : 트리에서 데티러를 저장하는 기본 요소
#Root Node : 트리 맨 위에 있는 노드
#Level : 최상위 노드를 Level0으로 하였을 때, 하위 Branch로 연결된 노드의 깊이
#Parent Node : 어떤 노드의 다음 레벨에 연결된 노드
#Child Node : 어떤 노드의 상위 레벨에 연결된 노드
#Leaf Node : Child Node가 하나도 없는 노드
#Sibling : 동일한 Parent Node를 가진 노드
#Depth : 트리에서 Node가 가질 수 있는 최대 Level
#####################################################
#이진 트리 : 노드의 최대 브랜치가 2인 트리
#이진 탐색 트리 : 이진 트리에 다음과 같은 추가적인 조건이 있는 트리(왼쪽 노드는 해당 노드보다 작은 값, 오른쪽은 큰 값을 가지고 있음)
#주요 용도 : 데이터 검색(탐색) > 탐색 속도를 개선할 수 있음

class node:
    def __init__(self,value):
        self.value = value
        self.left, self.right = None, None # 한번에 여러 변수 초기화

class nodeMgmt:
    #linkedlist는 head만 가지고 있으니까 head를 지정
    def __init__(self,head):
        self.head = head
    
    def insert(self,value):
        self.current_node = self.head
        while True:
            if value < self.current_node.value:
                if self.current_node.left !=None:
                    self.current_node = self.current_node.left

                else: self.current_node.left = node(value)
                break
            else:
                if self.current_node.right !=None:
                    self.current_node = self.current_node.right
                else:
                    self.current_node.right = node(value)
                break

    def search(self, value):
        self.current_node=self.head
        while self.current_node:
            if self.current_node.value == value:
                return True
            elif value < self.current_node.value:
                self.current_node = self.current_node.left
            else:
                self.current_node = self.current_node.right
        return False

head = node(1)
binary_tree = nodeMgmt(head)
print(binary_tree.insert(2))
print(binary_tree.insert(0))
print(binary_tree.insert(4))
print(binary_tree.insert(8))
print(binary_tree.insert(-2))

print(binary_tree.search(8))

#####################################################
# TODO - 삭제 
#1)leaf Node: child Node가 없음(제일 아랫단) > 삭제할 Node의 Parent Node가 삭제할 Node를 가리키지 않도록
#2)Child Node가 하나인 Node 삭제 > 삭제할 Node의 Parent Node가 삭제할 Node의 Chile Node를 가리키도록
#3)Child Node가 두 개인 Node 삭제 > 삭제할 Node의 오른쪽 자식 중 가장 작은 값을 삭제할 Node의 Parent Node가 가리키도록
#4)삭제할 Node가 없는 경우 False를 리턴하고 함수 종료

