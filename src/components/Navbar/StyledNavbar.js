import styled from "styled-components";
import { Btn } from '../GlobalStyled';
import {motion} from 'framer-motion';
export const Nav = styled.nav`
height:10vh;
display:flex;
justify-content:space-between;
`;
export const NavLeft = styled.div`
flex:1;
align-items: center;
display: flex;
gap: 32px;
`;
export const NavRight = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-items: center;
font-weight: 400;
@media (max-width: 480px) {
  display: none;
  }
`;
export const NavName = styled.div`
font-size: 20px;
font-weight: bold;
`;
export const NavList = styled.span`
flex: 10;
  @media (max-width: 480px) {
  display: none;
  }
`;
export const UnList = styled.ul`
display: flex;
gap: 32px;
margin-right: 64px;

`;
export const ListItem = styled.li`
    list-style: none;
     transition: 0.3s all ;  
 &:hover  {
       cursor: pointer;
       color: var(--orange);
  }
`;
export const BtnContact = styled(Btn)`
  flex: 2;
    @media (max-width: 480px) {
  display: none;
  }
`;

