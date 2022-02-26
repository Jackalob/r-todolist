// import styled, { css, keyframes } from 'styled-components';

import styled from "styled-components";

// export const Gradient = (g1, g2) =>
//   css`radial-gradient(ellipse farthest-corner at top left, ${g1} 0%, ${g2} 100%)`;

export const getGradient = (theme) => `linear-gradient(
  289.21deg,
  rgb(8, 126, 164) 13.57%,
  ${theme} 98.38%
)`

export const getBlockGradient = (theme) => `linear-gradient(
  289.21deg,
  ${theme}22 0%,
  ${theme}ee 100%
)`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const FullContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const StyledWrapper = styled.div`
  border-radius: ${( size ) => size === 'small' ? '8px': '16px' };
  padding: ${({ size }) => size === 'small' ? '6px 12px': '10px 16px'};
`

export function BlockWrapper(props) {
  return (
    <StyledWrapper {...props}>{props.children}</StyledWrapper>
  );
};
