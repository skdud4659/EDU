// Class

class Person {
  // 클래스 인스턴스를 생성, 초기화
  constructor(region_, gender_) {
    this.region = region_;
    this.gender = gender_;
  }

  greetings(val = '안녕') {
    console.log(val);
  }
}

let korean = new Person('Korea', 'male')
console.log(korean) // Person { region: 'Korea', gender: 'male' }

korean.gender = 'female';
console.log(korean) // Person { region: 'Korea', gender: 'female' }

korean.greetings() // 안녕

// 상속
class American extends Person {
  constructor(region_, gender_, language_) {
    // super로 감싸져있으면 부모 클래스의 초기화 룰을 따르겠다. 
    // 상속받은 자식 클래스에서 추가한 프로퍼티에 대해서만 초기화가 필요
    super(region_, gender_);
    this.language = language_;
  }

  greetings(val = 'hello') {
    console.log(val);
  }
}

let american = new American('Usa', 'male', 'English')
console.log(american); // American { region: 'Usa', gender: 'male', language: 'English' }
// 부모 클래스와 자식 클래스의 메소드 이름이 같으면 부모 클래스의 메소드는 호출되지 않는다.
american.greetings(); // hello