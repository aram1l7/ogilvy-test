import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  margin-top: 160px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 54px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  & > h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
  }

  & > span,
  & > p {
    color: #9193a9;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & > p {
    margin-top: 15px;
    max-width: 500px;
    text-align: center;
  }
`;
