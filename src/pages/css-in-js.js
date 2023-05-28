import React from "react";
import styled from "styled-components";

// styled-component makes theme available while creating the styled component. hence we can access the theme directly.
const StyledTitle = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

const CSSINJS = () => {
  return (
    <>
      <StyledTitle>CSSINJS</StyledTitle>
    </>
  );
};

export default CSSINJS;
