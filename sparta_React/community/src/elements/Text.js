import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const {children, bold, color, size, margin} = props

  const styles = {
    bold:bold,
    color:color,
    size:size,
    margin: margin,
  }

  return (
    <React.Fragment>
      <P {...styles}>
        {children}
      </P>
    </React.Fragment>
  );
}

Text.defaultProps = {
  children: null,
  bold: false,
  color: "black",
  size: "14px",
  margin: false,
}

const P = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.bold ? "600" : "400"};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
`;

export default Text;