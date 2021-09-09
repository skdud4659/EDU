import React from 'react';
import styled from 'styled-components';

import {useSelector} from 'react-redux';


const Progress = (props) => {

  const bucket_list = useSelector(state => state.bucket.list);
  let count = 0;

  bucket_list.map((l,idx) => {
    if(l.completed){
      count++;
    }
  })

  return (
    <ProgressBar>
      <HighLight width={(count/bucket_list.length)*100 + '%'}/>
      <Light/>
    </ProgressBar>
  );
}

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 20px;
  border-radius:20px;
  display: flex;
`;

const HighLight = styled.div`
  background: purple;
  height: 20px;
  border-radius:20px;
  width: ${props => props.width};
  transition: width 1s;
  // 뭐를 얼마동안
`;

const Light = styled.div`
  background: white;
  border: 3px solid purple;
  box-sizing: border-box;
  height: 30px;
  border-radius: 50%;
  width: 30px;
  margin: -5px 0px 0px -10px; 
  transition: width 1s;
`;

export default Progress