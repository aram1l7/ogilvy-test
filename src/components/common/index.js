import { styled } from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 45px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: ${({ align }) => align || "start"};
  gap: ${({ gap }) => gap || "0px"};
`;
