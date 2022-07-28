// list : n개의 element형으로 구성된 순서 있는 모임

// Linked List : 연결 리스트
// 어떤 object를 갖는 Node를 담고 있고 연결이라는 단어 그대로 next 변수(포인터 역할)로 다음에 어떤 Node를 가리키는지 나타낸다.
// 접근할 때 next를 통해 접근이 가능
// head(첫 번째 노드) -> next -> ... -> tail(마지막 노드) -> (null)

// 장점 : 특정 노드를 삽입하거나 삭제할 때 노드의 링크 필드(다음 노드 주소)만 수정하면 되므로 순차 리스트에 비해 연산 속도가 빠르다.
// 단점 : 이전 노드를 통해서만 다음 노드를 참조할 수 있다는 특성 때문에 리스트의 처음부터 다음 노드들을 탐색해야해서 속도가 느리다.

// singly linked list : 한 쪽 방향의 ptr
// doubly linked list : 양쪽 방향의 ptr
// circular linked list : 순환

// append, prepend, lookup, insert, delete

const linkedList = () => {
  const list = {};
  this.head = null;
  this.tail = null;

  // 요소 추가
  list.addToTail = () => {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.next = node;
      this.tail = node;
    }
  }

  // 요소 삭제
  list.removeHead = () => {
    const removeNode = this.head;

    if(TimeRanges.head !== null) {
      this.head = removeNode.next;
      return removeNode.value;
    }
  }

  // 노드 유무 확인
  list.contains = (target) => {
    let accNode = this.head;

    while (accNode) {
      if(accNode === target) {
        return true;
      } 

      accNode = accNode.next;
    }

    return false;
  }

  return list;
}

const Node = (value) => {
  const node = {};

  node.value = value;
  node.tail = null;

  return node;
}
