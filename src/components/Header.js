import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
`;

export const LeftHeader = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  cursor: pointer;
`;

export const InnerLeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > span {
    color: #9193a9;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const ImgWrapper = styled.div`
  width: ${(props) => props.width + "px"};
  height: ${(props) => props.height + "px"};
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: ${({ rounded }) => (rounded ? "100%" : "0")};
  }
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
