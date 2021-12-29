import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FiMenu } from 'react-icons/fi'
import { MdOutlineClose } from 'react-icons/md'

export const Navbar = styled.nav`
    height: 75px;
    background: transparent;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    z-index: 99;
`;

export const NavLogo = styled(Link)`
    font-size:25px;
    font-style: italic;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem;
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:768px) {
      display: none;
  }
`;

export const NavMenuLink = styled(Link)`
  font-size: 19px;
  padding: 1rem;
  color: #fff;
`;

export const NavBars = styled(FiMenu)`
  font-size: 30px;
  color: #fff;
  transform:translateX(-20px);
  display: none;
  cursor: pointer;

  @media screen and (max-width:768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;



