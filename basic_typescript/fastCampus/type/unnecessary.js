function getInfoText(name, age, language) {
    return "name : " + name + ", age : " + age + ", language : " + language;
}
console.log(getInfoText('나영', 10, 'ENG'));
// 필수 매개 변수는 선택 매개 변수 뒤에 올 수 없다.
function errGetInfoText(name, age, language) {
    return "name : " + name + ", age : " + age + ", language : " + language;
}
// union type으로 해결하기
function resolveGetInfoText(name, age, language) {
    return "name : " + name + ", age : " + age + ", language : " + language;
}
