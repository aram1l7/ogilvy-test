import { styled } from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 45px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  max-width: ${({ maxWidth }) => maxWidth || "unset"};
  align-items: ${({ align }) => align || "start"};
  gap: ${({ gap }) => gap || "0px"};
  justify-content: ${({ justify }) => justify || "start"};
  flex-direction: ${({ direction }) => direction || "row"};
  margin-top: ${({ marginTop }) => marginTop || "0"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0"};

  & > .desc {
    font-weight: 500;
    color: #9193a9;
  }

  & > h3 {
    color: #272831;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }

  & > p {
    color: #9193a9;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }

  textarea {
    resize: none;
    width: 100%;
    border-radius: 3px;
    border: 1px solid var(--d-6-d-7-e-1, #d6d7e1);
    background: #fff;
    min-height: 250px;
    &:focus {
      outline: none;
      border: none;
    }

    &::-webkit-input-placeholder {
      padding-top: 10px;
      padding-left: 15px;
    }
  }
`;
