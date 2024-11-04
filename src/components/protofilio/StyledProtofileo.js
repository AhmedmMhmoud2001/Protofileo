import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Protofilo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height:70vh;
`;
export const ProtfiloHeading = styled.span`
  &:nth-of-type(1){
    color:var(--black);
    font-size: 32px;
    font-weight: bold;
  }
  &:nth-of-type(2){
    color:var(--orange);
    font-size: 40px;
    font-weight: bold;
  }
`;

export const ProtfiloImage = styled.img`
  width: 22rem;
  filter:drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25));
  border-radius: 19px;
`;