import styled from 'styled-components';
// import { Swiper, SwiperSlide } from 'swiper/react';

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
  &:nth-of-type(2){
    color:var(--orange);
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

`;

export const ProtfiloImage = styled.img`
  width: 22rem;
  padding-right:30px;
  filter:drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25));
  border-radius: 19px;
`;