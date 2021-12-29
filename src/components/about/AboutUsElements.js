import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const AboutRectangle = styled.div`
  width: 100%;
  height: 120px;
  position: absolute;
  background-color: #1e3a8a;
  top: 0;
  
  @media screen and (max-width:768px) {
      display: none;
  }
`;

export const AboutRectangle2 = styled.div`
  width: 100%;
  height: 120px;
  position: absolute;
  background-color: #1e3a8a;
  bottom: 0;
  left: 0;

  @media screen and (max-width:768px) {
      display: none;
  }
`;


export const ColumnContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 10%;
  left: 10%;
  z-index: 999;
  width: 90%;

  @media screen and (max-width:768px) {
    left: 4%;
  }
`;

export const AboutLeftColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h1{
    font-size: 35px;
    margin-bottom: 50px;
  };

  p{
    margin-bottom: 22px;
    font-size: 20px;
  };

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
}
`;

export const AboutRightColumn = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
  }
`;