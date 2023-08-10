import { styled } from "styled-components";

export const Wrapper = styled.div`
  border-radius: 2px;
  width: ${({ width }) => width || "100%"};
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(39, 40, 49, 0.03);
  padding: 10px 20px;
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
  border-radius: 3px;
  position: relative;
  padding: 20px 25px;
  width: 100%;

  margin-top: 30px;
  display: ${({ withIcon }) => (withIcon ? "flex" : "block")};
  gap: 1rem;
  text-align: left;

  &:after {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    background: ${({ isGreen }) => (isGreen ? "#27AE60" : "#2d9cdb")};
    opacity: 0.2;
  }

  &:before {
    position: absolute;
    height: 100%;
    border-radius: 20px;
    width: 5px;
    opacity: 0.2;
    background: ${({ isGreen }) => (isGreen ? "#27AE60" : "#2d9cdb")};
    ${({ withIcon }) => (withIcon ? "" : `content:"";`)}
    left: 0;
    top: 0;
  }

  h5 {
    color: ${({ isGreen }) => (isGreen ? "#27AE60" : "#2d9cdb")};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  span {
    color: #9193a9;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin-top: 5px;
    line-height: normal;
  }
`;
