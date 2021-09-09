import React from 'react';
import img from './IMG_2165.JPG' ;
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux';
import {addUserName} from './redux/modules/rank'

//함수
const HowKnow = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.quiz.name);

  const input_text = React.useRef(null);
  return(
    <MyStyled className='box'>
      <img src={img}/>
      <h2>랜선 집사는 <span>{name}</span>에 대해 얼마나 알고 있을까?</h2>
      <input
          ref={input_text}
          type="text"
          style={{
            padding: "10px",
            margin: "15px 0px 30px",
            border: "1px solid #dadafc",
            borderRadius: "30px",
            width: "80%",
            // backgroundColor: "#dadafc55",
          }}
          placeholder="내 이름"
        />
      <button type='button' onClick={() => {
        // 이름 저장
        dispatch(addUserName(input_text.current.value));
        // 페이지 이동
        props.history.push("/quiz");
      }}>시작하기</button>
    </MyStyled>
  )
}

const MyStyled = styled.div`
  max-width: 500px;
  height: 80%;
  background-color: white;
  margin:auto;
  padding: 20px;
  text-align: center;

  img {
    width: 250px;
    height: 250px;
    margin-top: 20%;
  }

  h2 {
    margin-top: 15%;
  }

  span {
    background-color: rgb(255, 231, 195);
    padding: 5px 15px;
    border-radius: 20px;
  }

  button {
    background-color: rgb(255, 231, 195);
    width: 100px;
    height: 35px;
    border-radius: 20px;
    border: none;
    font-weight: bold;
    &:hover {
      background-color: #fed78e;
    }
  }
`

  export default HowKnow;