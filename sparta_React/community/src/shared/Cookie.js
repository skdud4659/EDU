//키값을 기준으로 쿠키에 저장된 값을 가져오는 함수
const getCookie = (name) => {
  //쿠키 값을 가져온다.
  let value = ";" + document.cookie;
  //키 값을 기준으로 파싱
  //aa=xx(; user_id=)aaa
  let parts = value.split(`; ${name}=`);
  //value를 return!
  if(parts.length === 2) {
    return parts.pop().split(';').shift();
  } 
};

//쿠키에 저장하는 함수
const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  //날짜 만들어주기
  date.setTime(date.getTime()+exp*24*60*60*1000);
  //저장
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

//쿠키 삭제
const deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
}

export {getCookie, setCookie, deleteCookie};