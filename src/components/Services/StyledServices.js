import styled from 'styled-components';
import { Btn } from '../GlobalStyled';
import { motion } from 'framer-motion';
export const Service = styled.div`
  padding: 0 48px 0 48px;
  height:90vh;
  display: flex;
  margin-bottom: 126px;
  margin-top:144px ;
    @media (max-width: 480px) {
       margin-top:0 ;
       flex-direction: column;
       gap:5rem;
       height: 66rem;
       padding: 0;
      }
`;
export const ServiceAwesome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const AwesomeText = styled.span`
  &:nth-of-type(1){
    color:var(--black);
    font-size: 40px;
    font-weight: bold;
  }
  &:nth-of-type(2){
    color:var(--orange);
    font-size: 40px;
    font-weight: bold;
  }
  &:nth-of-type(3){
    color:var(--gray);
    font-size: 16px;
    font-weight: normal;
    margin-top:16px;
    white-space: 1.5;
  }
  `;
export const BtnAwesome = styled(Btn)`
  width:150px;
  height: 40px;
  margin-top: 16px;
`;
export const Blur = styled.div`
  position: absolute;
  width: 352px;
  height: 224px;
  z-index: -9;
   left:-14rem;
  top: 15rem;
  border-radius:50%;
  filter: blur(72px);
  &:nth-of-type(1){
    background:#AbF1FF94;
  }
  &:nth-of-type(2){
   background:var(--purple);
   left:14rem;
   top:10rem;
  }
  &:nth-of-type(3){
 background:var(--purple);
   top:17rem;
   left:-18rem;
  }
  `;
export const ServiceCards = styled.div`
    position: relative;
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        gap:20rem;
        
      }
  `;
export const Container = styled(motion.div)`
    position: absolute;
        @media (max-width: 480px) {
            position: static;
      }
    &:nth-of-type(1){
    left: 25rem;
  }
    &:nth-of-type(2){
    top: 12rem;
    left:0rem;
  }
    &:nth-of-type(3){
    left: 20rem;
    top:22rem; 
  }
       
  `;
export const LinksResume = styled.a`
    text-decoration: none;
  `;