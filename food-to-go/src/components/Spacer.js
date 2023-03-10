import React from "react";
import styled, { useTheme } from "styled-components/native";
const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  bottom: "marginBottom",
  left: "marginLeft",
  right: "marginRight",
};
const getVariant = (position, size, theme) => {
  const sizeIdx = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIdx];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "large",
};

export default Spacer;
