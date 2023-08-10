import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 66px;
`;

export const Tab = styled.div`
  color: ${({ active }) => (active ? "#FD5359" : "#9193a9")};
  text-align: center;
  border-bottom: ${({ active }) => (active ? "2px solid #FD5359" : "0px")};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 7px;
  cursor: pointer;
`;
