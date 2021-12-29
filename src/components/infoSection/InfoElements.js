import styled from "styled-components";

export const InfoContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "")};
  flex-wrap: wrap !important;
  padding: 2rem;
  padding-top: 90px;
`;

export const InfoLeftColumn = styled.div`
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

export const InfoRightColumn = styled.div`
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