import styled from "styled-components";
import { MdOutlineClose } from 'react-icons/md'
import { Link } from "react-router-dom";

export const DropContainer = styled.nav`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #cd853f;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  top: ${({ isOpen }) => (isOpen ? 0 : `-1000px`)};
  transition: 0.3s all ease-in-out;
  z-index: 999;
  `;


export const DropClose = styled(MdOutlineClose)`
  font-size: 40px;
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 18px;
`;

export const DropItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const DropLinkMenu = styled(Link)`
  padding: 1rem;
  font-size: 2rem;
  transition: 0.2s all ease-in-out;
  
  &:hover{
      color: #fff;
  }
`;