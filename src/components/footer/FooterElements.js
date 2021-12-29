import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #0F172A;
  padding: 3rem 1.5rem;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-wrap: wrap !important;
  position: relative;
  @media screen and (max-width:768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLeftColumn = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;

  h1{
      font-size: 5rem;
      margin-bottom: 30px;
      font-weight: 600;
  }

  @media screen and (max-width:768px) {
    width: 100% ;
    h1{
      font-size: 2rem;
    }
  }
`;

export const FooterRightColumn = styled.div`
width: 40%;
display: flex;
justify-content: center;
align-items: center;
  p{
      font-size: 1rem;
    };
    h1{
    font-size: 2rem;
    margin-bottom: 15px;
    };

    @media screen and (max-width:768px) {
      width: 100%;
      p{
      font-size: 0.5rem;
      };
    h1{
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
  }
`;

export const FooterIconsContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
    justify-content: space-evenly;
  }
`;

export const LinkMenu = styled(Link)`
  padding: 3px;
`;

export const FooterIcons = styled.div`
  padding: 0.6rem;
  font-size: 1.5rem;
  color: #ca8a04;

`;