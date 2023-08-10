import { styled } from "styled-components";

export const Wrapper = styled.div`
  & > .skill-bar {
    height: 8px;
    width: 100%;
    display: flex;
    border-radius: 6px;
    margin-top: 6px;
    background: rgba(0, 0, 0, 0.1);
  }

  .skill-bar .skill-per {
    position: relative;
    display: block;
    height: 100%;
    width: 90%;
    border-radius: 6px;
    background: #fd5359;
    animation: progress 0.4s ease-in-out forwards;
    opacity: 0;
    margin-top: 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  color: ${({ isGray }) => (isGray ? "#D6D7E1" : " #fd5359")};

  h4 {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
