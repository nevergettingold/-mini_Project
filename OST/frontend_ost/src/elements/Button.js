import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _click } = props;

  return <Btn onClick={_click}>{text}</Btn>;
};
const Btn = styled.button``;

export default Button;
