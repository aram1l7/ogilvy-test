import { styled } from "styled-components";

export const Button = styled.button`
  outline: 0;
  border: 0;
  background: ${({ primary }) => (primary ? "#FE5459" : "black")};
  color: white;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 2px;
  padding: 7px 15px;
  cursor: pointer;
`;
