import React from 'react';
import styled from 'styled-components';

import {useSelector} from 'react-redux';

const Progress = (props) => {

  const quiz_list = useSelector((state) => state.quiz.quiz);
  const answers = useSelector((state) => state.quiz.answers);
  let count = answers.length;

  return (
    <ProgressBar>
      <HighLight width={(count/quiz_list.length)*100 + '%'}/>
      <Light/>
    </ProgressBar>
  );
}


const ProgressBar = styled.div`
  width: 80vw;
  height: 20px;
  background-color: #eee;
  margin: 20px auto 0px auto;
  border-radius: 20px;
  display: flex;
`;

const HighLight = styled.div`
background: #fef5d4;
height: 20px;
border-radius: 20px;
width: ${(props) => props.width};
transition: width 1s;

`;

const Light = styled.div`
  background: white;
  border: 3px solid brown;
  box-sizing: border-box;
  height: 30px;
  border-radius: 50%;
  width: 30px;
  margin: -5px 0px 0px -10px; 
  transition: width 1s;
`;

export default Progress