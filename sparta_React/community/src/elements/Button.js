import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {text, is_float, children, _onClick, margin, width, padding, mini} = props

  const styles = {
    margin:margin,
    width: width,
    padding:padding,
  }

  if(mini) {
    return(
      <React.Fragment>
        <MiniBtn {...styles} onClick={_onClick}>{text ? text: children}</MiniBtn>
      </React.Fragment>
    )
  }

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Btn {...styles} onClick={_onClick}>{text ? text: children}</Btn>
    </React.Fragment>
  );

}

Button.defaultProps = {
  text: false,
  is_float: false,
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
  width: ${(props) => props.width};
  height: 30px;
  background-color: grey;
  color: white;
  font-weight: bold;
  line-height: 5px;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const FloatButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: gray;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 20px;
  right: 10px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
`;

export default Button;