import styled from "styled-components";
import { Link } from "react-router-dom";
import RightArrow from '../assets/common/arrow_right.svg';

export const MoreBtn = styled(Link).withConfig({
  shouldForwardProp: (prop) => !['page'].includes(prop),
})`
  width: 45px;
  height: 45px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--br-full, 100px);
  background-color: var(--point, #FFBB00);
  cursor: pointer;
  transition: color 0.3s, background-color 0.3s;
  background-image: url(${RightArrow});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 54%;
  flex-shrink: 0;
  &:hover {
    background-color: var(--main1, #002F87);
  }
  @media (min-width: 991px){
    width: 60px;
    height: 60px;
  }
`;

export const MyLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--white-alter, #FEFEFE);
  font-size: var(--fs-14, .875rem);
  font-weight: 600;
  line-height: normal;
  &:hover {
    color: var(--point, #FFBB00);
    svg path {
      color: var(--point, #FFBB00);
    }
  }
  @media (min-width: 991px){
    font-size: var(--fs-20, 1.25rem);
  }
  ${(props) => props.page === 'main' && `
    font-size: var(--fs-18, 1.125rem);
    font-weight: 600;
    color: var(--text-minor-1, #888);
    height: 20px;
    gap: 8px;
    &:hover {
      color: var(--sub1, #F24E07);
      svg path {
        color: var(--sub1, #F24E07);
      }
    }
    @media (min-width: 991px){
      font-size: var(--fs-24, 1.5rem);
    }
  `}
`;