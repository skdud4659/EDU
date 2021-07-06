import React from 'react';
import styled from 'styled-components';
import {Grid, Text} from './index'

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value } = props;
  
  if(multiLine){
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px;">{label}</Text>
        <InputBox placeholder={placeholder} type={type} onChange={_onChange}/>
      </Grid>
    </React.Fragment>
  );
}

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;


const InputBox = styled.input`
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;



export default Input;