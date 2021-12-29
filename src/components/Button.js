import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  background: ${({ isDrop }) => isDrop ? "#64748b" : "transparent"};
  color: ${({ isDrop }) => isDrop ? "#fff" : "palevioletred"};
  font-size: ${({ isDrop }) => isDrop ? "19px" : ""};
  border: ${({ isDrop }) => isDrop ? "none" : "2px solid palevioletred"};
  border-radius: 4px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  transition: 0.2s all ease-in-out;
  width: ${({ big }) => big ? `300px` : 'auto'};

  &:hover{
  transform: translateY(-5px);
}
  
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}

  ${props => props.responsive && css`
  @media screen and (max-width:768px) {
      display: none;
  }
  `}

`;
