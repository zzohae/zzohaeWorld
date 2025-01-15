import styled from "styled-components";
import { Link } from "react-router-dom";
import RightArrow from '../assets/common/arrow_right.svg';
import ExtLink from '../assets/common/external_link.svg'

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
  [color-theme="dark"] & {
    background-color: var(--main3, #002F87);
  }
  &:hover {
    background-color: var(--main1, #002F87);
  }
  @media (min-width: 991px){
    width: 60px;
    height: 60px;
  }
`;

export const MoreBtnA = styled.a`
  width: 190px;
  height: 50px;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: var(--br-full, 100px);
  background-color: var(--point, #FFBB00);
  cursor: pointer;
  font-size: var(--fs-14, 0.875rem);
  font-family: "Rubik Mono One", serif;
  font-weight: 400;
  color: var(--white-alter, #FEFEFE);
  background-image: url(${ExtLink});
  background-position: calc(100% - 20px) 50%;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  transition: color 0.3s, background-color 0.3s;
  flex-shrink: 0;
  [color-theme="dark"] & {
    background-color: var(--main3, #002F87);
    color: var(--text-default, #FEFEFE);
  }
  &:hover {
    background-color: var(--main1, #002F87);
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
  [color-theme="dark"] & {
    color: var(--text-default, #FEFEFE);
  }
  &:hover {
    color: var(--point, #FFBB00);
    svg path {
      color: var(--point, #FFBB00);
    }
  }
  @media (min-width: 991px){
    font-size: var(--fs-18, 1.125rem);
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

export const WebWorkLink = styled.a.withConfig({
  shouldForwardProp: (prop) => prop !== 'disabled',
})`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--br-full, 100px);
  cursor: pointer;
  font-size: var(--fs-18, 0.875rem);
  font-family: "Pretendard Variable", serif;
  font-weight: 300;
  text-align: center;
  color: var(--text-default, #333);
  background-position: calc(100% - 20px) 50%;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  transition: color 0.3s, background-color 0.3s;
  flex-shrink: 0;
  [color-theme="dark"] & {
    color: var(--text-default, #FEFEFE);
  }
  &:hover {
    background-color: var(--sub1, #F24E07);
    color: var(--white-alter, #FEFEFE);
  }
  ${(props) => props.disabled && `
    opacity: 0.3;
    cursor: default;
    &:hover {
    background-color: unset;
    color: unset;
  }
  `}
`;