# scss 문법 정리
- 전처리기 : 자신만의 특별한 문법을 통해 css를 생성하는 프로그램
  - css로 컴파일을 거친 뒤 실행이 가능.
- Sass의 모든 기능을 지원
  - Sass : 중괄호가 아닌 들여쓰기를 사용
  - scss : css처럼 {}와 ;를 사용

## 데이터 타입
- 다양한 데이터 타입을 정의하고 있어 이를 변수처럼 활용할 수 있다.

|  |  |  |
| ------------ | ------------- | ------------- |
| Numbers | 숫자 | 	1, .82, 20px, 2em… |
| Strings | 문자  | bold, relative, "/images/a.png", "dotum" |
| Colors | 색상 표현 | red, blue, #FFFF00, rgba(255,0,0,.5) |
| Booleans| 논리 | true, false |
| Nulls | 아무것도 없음 | null |
| Lists | 공백이나 ,로 구분된 값의 목록 | (apple, orange, banana), apple orange |
| Maps | Lists와 유사하나 값이 Key: Value 형태 | (apple: a, orange: o, banana: b) |

```scss
$boolean: true;
$string: hello;
$color: red;
$number: 720;
$list: red, orange, yellow, green, blue;
$map: (
  l: light,
  d: dark,
);
```

## 중첩
- 상위 선택자의 반복을 줄일 수 있다.
```scss
/* SCSS */
#guide{
  .guide-wrap{
    padding: 30px;
    .guide-header{
      img{
        width:160px;
      }
      h2{
        margin-left:0;
        padding:10px 3px 7px 10px;
        border-radius: 8px;
      }
    }
  }
}

/* Compile to CSS */
#guide .guide-wrap{padding: 30px;}
#guide .guide-wrap .guide-header img{width:160px;}
#guide .guide-wrap .guide-header h2{margin-left:0;padding:10px 3px 7px 10px;border-radius: 8px;}
```

## 상위 선택자 참조(&)
- 중첩 내부에서 & 키워드는 상위 선택자로 치환된다.
```scss
/* SCSS */
.menu-list{
  overflow-y:auto;
  &::-webkit-scrollbar{
    display:none;
  }
}

/* Compile to CSS */
.menu-list{overflow-y:auto;}
.menu-list::-webkit-scrollbar{display:none;}


/* 응용 */

/* SCSS */
.fs {
  &-small {
    font-size: 12px;
  }
  &-medium {
    font-size: 14px;
  }
  &-large {
    font-size: 16px;
  }
}

/* Compile to CSS */
.fs-small {
  font-size: 12px;
}

.fs-medium {
  font-size: 14px;
}

.fs-large {
  font-size: 16px;
}
```

## 변수($)
- 반복적으로 사용되거나 관리하고 싶은 값을 변수로 지정할 수 있다.
```scss
/* SCSS */
$color-black:#000000;

.bg{
  background: $color-black;
}

/* Compile to CSS */
.bg{
  background: #000000;
}
```
> 변수는 선언된 블록 내에서만 스코프를 가진다!
```scss
/* SCSS */
.bg1{
  $color-black:#000000;
  background: $color-black;
}

.bg2{
  background: $color-black; // error
}
```
### 템플릿 리터럴처럼 사용하기
```scss
/* SCSS */
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");

/* Compile to CSS */
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```

## 연산
|  |  |  |
| ------------ | ------------- | ------------- |
| + | 더하기 | |
| - | 빼기  | |
| * | 곱하기 | 하나 이상의 값이 반드시 숫자(Number) |
| / | 나누기 | 오른쪽 값이 반드시 숫자(Number) |
| % | 나머지 | |
```scss
.operation {
  width: 500px + 500px;
  height: 300px - 100px;
  margin: 10px * 2;
  padding: (10px / 2);
  font-size: (4px + 20px) / 2;
}
```

## 재활용(@mixin)
- 재활용할 css 스타일 정의
- 사용할 때는 @include로 불러서 사용
```scss
/* SCSS */
@mixin type-13{font-size:1.083rem;line-height:1.583rem}
@mixin type-14{font-size:1.167rem;line-height:1.667rem}
@mixin type-15{font-size:1.25rem;line-height:1.833rem}

.text{
  @include type-13;
}

/* Compile to CSS */
.text{
  font-size:1.083rem;
  line-height:1.583rem
}
```

## 함수(@function)
- 계산된 특정 값을 @return 지시어를 통해 반환
```scss
$max-width: 980px;

@function columns($number: 1, $columns: 12) {
  @return $max-width * ($number / $columns);
}
.box_group {
  width: $max-width;
  .box1 {
    width: columns(); // 1
  }
  .box2 {
    width: columns(8);
  }
  .box3 {
    width: columns(3);
  }
}

/* Compile to CSS */
.box_group {
  /* 총 너비 */
  width: 980px;
}
.box_group .box1 {
  /* 총 너비의 약 8.3% */
  width: 81.66667px;
}
.box_group .box2 {
  /* 총 너비의 약 66.7% */
  width: 653.33333px;
}
.box_group .box3 {
  /* 총 너비의 25% */
  width: 245px;
}
```

## 내장 함수
- 다양한 내장 함수가 제공되어 필요에 따라 찾아보기
```scss
.item:nth-child(2) {
  background-color: lighten($color, 20%);
}
.item:nth-child(3) {
  color: white;
  background-color: darken($color, 20%);
}
.item:nth-child(4) {
  background-color: grayscale($color);
}
.item:nth-child(5) {
  background-color: rgba($color, 0.3);
}
.item:nth-child(6) {
  background-color: invert($color);
}
```
