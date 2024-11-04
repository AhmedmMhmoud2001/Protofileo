import styled from 'styled-components';
import { Btn } from '../GlobalStyled';
import { motion } from 'framer-motion';
export const Work = styled.div`
  padding: 0 48px;
  display: flex;
  height:90vh;
  margin-top: 64px;
    @media (max-width: 480px) {
          flex-direction: column;
          height: 60rem; 
          padding: 0;
          gap:5rem;
      }
`;
export const WorkAwesome = styled.div`
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
   left:-14rem;
   top:10rem;
  }
  &:nth-of-type(3){
 background:var(--purple);
   top:17rem;
   left:-25rem;
  }
  `;
export const WorkCircle = styled.div`
    position:relative;
      @media (max-width: 480px) {
            display: flex;
            align-items: flex-start;
            justify-content: start;
            transform: scale(0.7);
      }
  `;
export const MainCircle = styled(motion.div)`
    position: relative;
    left: 350px;
    width: 350px;
    height: 350px;
    border-radius:100%;
    box-shadow: var(--boxShadow);
    top: 2rem;
    background: white;
      @media (max-width: 480px) {
            position: static;
      }
  `;
export const PrimCircle = styled.div`
    position: absolute;
    width:8rem;
    height:8rem;
    border-radius: 100%;
    border: 5px solid #ebebeb ;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    background:white;
    box-shadow:var(--smboxshadow);
    &:nth-of-type(1){
      top:-3rem;
      left:8rem;
    }
    &:nth-of-type(2){
      top: 7rem;
      left:-3rem;
    }
    &:nth-of-type(3){
       top: 7rem;
      left:7rem;
    }
    &:nth-of-type(4){
      top: 7rem;
      left:17rem;
    }
    &:nth-of-type(5){
      top: 18rem;
      left:8rem;
    }
          @media (max-width: 480px) {
            width: 5rem;
            height: 5rem;
            margin: -2rem;
            margin-top:0;   
           &:nth-of-type(2){
            left:-1rem;
           }
          }
  `;
export const ImageCircle = styled.img`
    transform: scale(0.6)
  `;
export const CircleBack = styled.div`
    position: absolute;
    height: 15rem;
    width: 15rem;
    border-radius:100%;
    z-index: -1;
    background:#1949b8;
    left: 36rem;
    top: -1rem;
    &:nth-of-type(2){
      background: #f5c32c;
      left: 36rem;
      top: 14rem;
    }
      @media (max-width: 480px) {
            left:10rem !important;
            transform: scale(0.8);
                &:nth-of-type(2){
                  top:12rem !important;
                }
      }
  `;