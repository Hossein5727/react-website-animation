import styled, { css } from 'styled-components';
import { FcNext, FcPrevious } from 'react-icons/fc'

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden !important;
`;

export const HeroWrapper = styled.div`
position: relative; 
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
  transition: 0.4s all ease !important;
`;

export const HeroSlides = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s all ease !important;

  
  &::before{
      content: '';
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      bottom: 0vh;
      overflow: hidden;
      opacity: 1;
      background:linear-gradient(
          0deg,
          rgba(0, 0, 0 ,0.2)0%,
          rgba(0, 0, 0, 0.2)20%,
          rgba(0, 0, 0, 0.6)100%
      );
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  transition: 1s all ease !important;

`;

export const HeroContent = styled.div`
    /* height: 100%;
    width: 100%; */
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  padding: 5px;
  position: relative;
  z-index: 10;
  max-width: 1600px;
  color: #fff;
  transform: translate(-170px,100px);

  h1{
      font-size: 5rem;
      font-weight: 400;
      text-transform: uppercase;
      text-shadow: 0 0 20px rgba(0,0,0,0.4);
      text-align: left;
      max-width: 700px;
  };

  p{
      color: #ccc;
      font-size: 2rem;
      margin-left: 20px;
  };

  @media screen and (max-width:768px) {
    transform: translate(0,50px);
        h1{
          max-width: 400px;
        font-size: 3rem;
    };
    p{
        font-size: 1.5rem;
    }
  }

`;

export const NextSlide = styled(FcNext)`
  position: absolute;
  top: 80%;
  right: 50px;
  font-size: 4px !important;
  background-color: #fca5a5;
  padding: 5px 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 20;
  transition: 0.2s all ease;

  &:hover{
      transform: scale(1.1);
  }

`;

export const PrevSlide = styled(FcPrevious)`
 position: absolute;
  top: 80%;
  right: 150px;
  font-size: 4px !important;
  background-color: #fca5a5;
  padding: 5px 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 20;
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover{
      transform: scale(1.1);
  }

  @media screen and (max-width:768px) {
    right: 110px;
  }
`;