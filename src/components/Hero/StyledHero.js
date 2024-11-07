import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Btn } from '../GlobalStyled';
export const Heroo = styled.header`
    display: flex;
    height:77vh;
    padding-top 20vh;
       @media (max-width: 768px) {
                  flex-direction: column;
                  height:130vh;
                                 }
       @media (max-width: 480px) {
                  flex-direction: column;
                  height:120vh;
                                 }
`;
export const HeroLeft = styled.div`
display: flex;
position: relative;
flex: 1;
flex-direction: column;
gap:32px;
`;
export const HeroName = styled.div`
display: flex;
flex-direction: column;
`;
export const NameText = styled.span`
&:nth-of-type(1) {
    color: var(--black);
    font-weight: bold;
 @media (min-width: 1201px) {
  font-size: 48px;
}
     @media (max-width: 1200px) {
  font-size: 48px;
}
  @media (max-width: 1024px) {
  font-size: 42px;
}
  @media (max-width: 768px) {
  font-size: 33px;
}
  @media (max-width: 480px) {
  font-size: 24px;
}
  @media (max-width: 320px) {
  font-size: 24px;
}

}
&:nth-of-type(2) {
    color: var(--orange);
    font-weight: bold;
    @media (min-width: 1201px) {
  font-size: 48px;
}
     @media (max-width: 1200px) {
  font-size: 48px;
}
  @media (max-width: 1024px) {
  font-size: 42px;
}
  @media (max-width: 768px) {
  font-size: 33px;
}
  @media (max-width: 480px) {
  font-size: 24px;
}
  @media (max-width: 320px) {
  font-size: 24px;
}
}
&:nth-of-type(3) {
    color: var(--gray);
    font-weight: 100;
    font-size: 16px;
    margin-top: 10px;
    word-space:1.5;
    @media (max-width: 480px) {
                  font-size: 14px;
                                 }
}
`;
export const BtnHero = styled(Btn)`
height:40px;
width:120px;
`;
export const IconHero = styled.div`
 display: flex;
 gap:0;
`;




export const IconImg = styled.img`

transform: scale(0.5);
&:hover {
  cursor: pointer;
}
    
    `;
export const Links = styled.a`
text-decoration: none;
`;
export const HeroRight = styled.div`
flex: 1;
position: relative;
@media (max-width: 768px) {
    transform: scale(0.7);
    left:-3rem;
    }
@media (max-width: 480px) {
    transform: scale(0.6);
    left:-3rem;
    }
`;
export const Img = styled.img`
position: absolute;
z-index:1 ;
&:nth-of-type(1){
transform: scale(0.69);
left: -15%;
 top: -9%;
}
&:nth-of-type(2){
transform: scale(0.67);
  top: -4.6rem;
  left: -3rem;
}
&:nth-of-type(3){
transform: scale(1.4);
left: 27%;

}
`;
export const Flooting1 = styled(motion.div)`
position: absolute;
z-index:1 ;
top: -4%;
left: 68%;
       @media (max-width: 480px) {
        top: 2.5rem !important;
        left:100% !important;
      }
`;
export const Flooting2 = styled(motion.div)`
position: absolute;
z-index:1 ;
@media (min-width: 1201px) {
  top: 101%!important;
  left: 3rem;
}
  @media (max-width: 1200px) {
  top: 101%!important;
  left: 3rem;
}
  @media (max-width: 1024px) {
  top: 115%!important;
  left: 3rem;
}
  @media (max-width: 768px) {
  top: 125%!important;
  left: 4rem;
  
}
  @media (max-width: 480px) {
  top: 160%!important;
  left: 0rem;
  
}
  @media (max-width: 320px) {
  top: 200%!important;
  left: 0rem;
  
}

`;
export const Imoje = styled(motion.img)`
position: absolute;
transform: scale(0.6);
z-index:1 ;
top:-19%;
left: -24%;
border-radius: 50%;
padding: 0;
`;
export const Blur = styled.div`
  position: absolute;
  width: 352px;
  height: 224px;
  top: 30%;
  left: 35%;
  z-index: -9;
  border-radius:50%;
  background:#edd0ff;
  filter: blur(212px);
  filter: blur(72px);
         @media (max-width: 480px) {
          display: none;
                                   }
&:nth-of-type(1){
  background: rgba(238,210,255);
}
&:nth-of-type(2){
  background: #c1f5ff;
  top: 17rem;
  width: 21rem;
  height:11rem;
  left: -9rem;
}

`;
