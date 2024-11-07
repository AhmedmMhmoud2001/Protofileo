import styled from "styled-components";
import { Btn } from '../GlobalStyled';
// import {motion} from 'framer-motion';

export const Nav = styled.nav`
position: fixed;
top: 0;
right: 0;
height:10vh;
width: 100%; 
padding: 10px 20px;
z-index: 1000;
box-shadow: 0px 1px 5px 1px rgba(251, 161, 40, 0.42);
display:flex;
justify-content:space-between;
align-items: center;

`;

export const NavLeft = styled.div`
flex:1;
align-items: center;
display: flex;


@media (min-width: 1201px) {
  gap: 35px;
}
  @media (max-width: 1200px) {
  gap: 30px;
}
  @media (max-width: 1024px) {
  gap: 25px;
}
  @media (max-width: 768px) {
  gap: 20px;
}
  @media (max-width: 480px) {
  gap: 15px;
}
  @media (max-width: 320px) {
  gap: 10px;
}

`;
export const NavName = styled.div`

font-weight: bold;
 
@media (min-width: 1201px) {
  font-size:30px
}
  @media (max-width: 1200px) {
  font-size:28px
}
  @media (max-width: 1024px) {
  font-size:26px
}
  @media (max-width: 768px) {
  font-size:24px
}
  @media (max-width: 480px) {
  font-size:22px
}
  @media (max-width: 320px) {
  font-size:20px
}
`;
export const NavRight = styled.div`
display: flex;
align-items: center;
justify-content:space-between;
font-weight: 400;
@media (max-width: 768px) {
  display: none;
  }
`;


export const NavList = styled.span`

`;
export const UnList = styled.ul`
display: flex;
margin-right: 64px;

@media (min-width: 1201px) {
  gap: 35px;
}
  @media (max-width: 1200px) {
  gap: 30px;
}
  @media (max-width: 1024px) {
  gap: 20px;
}
  @media (max-width: 768px) {
  gap: 10px;
}
  


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



export const Navminu= styled.div`
position: relative;
  @media (min-width: 1201px) {
  display: none;
}
  @media (max-width: 1200px) {
  display: none;
}
  @media (max-width: 1024px) {
  display: none;
}
  @media (max-width: 768px) {
  display: block;
}

`;
export const NavRightminu = styled.div`

position: absolute;
top:9vh;
right:10px;
width: 200px;
box-shadow: 0px 1px 5px 1px rgba(251, 161, 40, 0.42);
border-radius: 5px ; 
display: flex;
flex-direction: column;
align-items: center;
gap:20px;
padding:20px;
`;
export const NavListminu = styled.span`

  }
`;
export const UnListminu = styled.ul`

display: flex;
flex-direction: column;
gap: 20px;


`;
export const BtnContactminu = styled(Btn)`
  border-radius: 34px;
  width:100px;
  height:40px;
  }
`;




