import React from 'react';
import styled from 'styled-components'
import img from '../img/16FA865C-8278-4FEE-8791-D7E3A2C7C6A6.jpeg'

const Image = (props) => {
  const {shape, src, size} = props;

  const styles = {
    src:src,
    shape: shape,
    size: size,
  }

  if(shape === 'circle'){
    return (
      <ImageCircle {...styles}></ImageCircle>
    )
  }

  if(shape === 'rectangle') {
    return (
      <Outter>
        <Inner {...styles}></Inner>
      </Outter>
    )
  }

  return (
    <React.Fragment>
        <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  )
}

Image.defaultProps = {
  shape: 'circle',
  src: img,
  size: 36,
}

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

const Outter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const Inner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Image;