import styled from "styled-components";
import RightArrow from '../assets/common/arrow_right.svg';

export const MoreBtn = styled.button.withConfig({
  shouldForwardProp: (prop) => !['version', 'page'].includes(prop),
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
  &:hover {
    background-color: var(--main1, #002F87);
  }
  
  ${(props) => props.version === 'mobile' && `
    width: 45px;
    height: 45px;
  `}

  ${(props) => props.version === 'pc' && `
    width: 80px;
    height: 80px;
  `}
`;