import { styled } from "styled-components";

export const Wrapper = styled.div`
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background: white;
  padding: 40px 20px;
  padding-top: 100px;

  h3 {
    margin-top: 70px;
    color: #272831;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
  }

  p {
    color: #9193a9;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    // margin-top: 20px;
    font-weight: 500;
    line-height: normal;
  }
`;

export const BtnWrapper = styled.div`
  color: #fd5359;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 65px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
`;
