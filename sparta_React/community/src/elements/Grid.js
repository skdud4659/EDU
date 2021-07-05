import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {is_between, width, padding, margin, bg, children} = props;

  const styles = {
    is_between:is_between,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
  };

  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
}

Grid.defaultProps = {
  children: null,
  is_between: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%auto;
  box-sizing: border-box;
  ${(props) => props.padding ? `padding: ${props.padding}` : ''}
  ${(props) => props.margin ? `margin: ${props.margin}` : ''}
  ${(props) => props.bg ? `background-color: ${props.bg}` : ''}
  ${(props) => props.is_between ?
  `display: flex; align-items:center; justify-content:space-between;` : ''}
`;

export default Grid;