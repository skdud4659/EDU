import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {text, children, _onClick, margin, width, padding, mini} = props

  const styles = {
    margin:margin,
    width: width,
    padding:padding,
  }

  if(mini) {
    return(
      <React.Fragment>
        <MiniBtn onClick={_onClick}>{text ? text: children}</MiniBtn>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Btn {...styles} onClick={_onClick}>{text ? text: children}</Btn>
    </React.Fragment>
  );
}

Button.defaultProps = {
  text: false,
  children:null,
  _onClick: () => {},
  margin: false,
  width: '100%',
  padding: "12px 0px",
  mini: false,
}

const Btn = styled.button`
  width: ${(props) => props.width};
  background-color: #212121;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const MiniBtn = styled.button`
  width: 50px;
  height: 30px;
  background-color: grey;
  color: white;
  font-weight: bold;
  line-height: 5px;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
`;

export default Button;