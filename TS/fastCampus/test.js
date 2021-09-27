"use strict";
// 값을 할당받으면 임의로 특정 타입을 지정해둠
// String으로 할당되었기 때문에 a는 String으로 지정되어 a=39에 컴파일 오류가 난다.
var a = 'Mark';
a = 39;
// Type Annotation : 특정한 객체 등의 타입을 지정하는 일
var b;
b = 'ariel';
b = 10;
function hello(c) {
}
hello(39);
// 매개변수 c의 타입을 number로 주었기 때문에 문자인 hello는 오류
hello('hello');
