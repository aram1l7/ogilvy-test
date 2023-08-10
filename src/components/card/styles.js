import { styled } from "styled-components";

export const Wrapper = styled.div`
  border-radius: 2px;
  width: ${({ width }) => width || "fit-content"};
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
`;

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  & > p {
    max-width: 450px;
    text-align: center;
    color: #9193a9;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & > h3 {
    color: #272831;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-top: 40px;
`;

export const HelperWrapper = styled.div`
  background: #f4fafd;
  border-radius: 3px;
  position: relative;
  padding: 20px 25px;
  width: 95%;
  margin-top: 30px;

  &:before {
    position: absolute;
    height: 100%;
    border-radius: 20px;
    width: 5px;
    background: #2d9cdb;
    content: "";
    left: 0;
    top: 0;
  }

  & > h5 {
    color: #2d9cdb;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & > span {
    color: #9193a9;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin-top: 5px;
    line-height: normal;
  }
`;
