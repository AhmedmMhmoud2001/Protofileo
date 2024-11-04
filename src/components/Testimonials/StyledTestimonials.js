import styled from 'styled-components';
export const Testimonial = styled.div`
padding: 0 48px ;
height :100vh;
display : flex;
align-items : center;
justify-content : center;
flex-direction :column;
gap: 32px;
margin-top: 112px;
margin-left: 0px;
position: relative;
`;
export const TestimonialHeading = styled.div`
  align-self: flex-start;
`;
export const HeadingText = styled.span`
  font-size: 32px;
  font-weight:bold;
  &:nth-of-type(2){
    color: var(--orange);
  }
`;
export const Blur = styled.div`
  position: absolute;
  width: 500px;
  height: 280px;
  z-index: -9;
  left: 65rem;
 top: 25rem;
  border-radius:50%;
  filter: blur(72px);
  &:nth-of-type(2){
   background: skyblue;
   left: 1rem;
   top: 17rem;
  }
  &:nth-of-type(1){
 background:var(--purple);
  }
  `;
export const TWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding:2rem ;
    width: 30rem;
    height: 17rem;
    background: rgba(255, 255, 255,0.26);
    border-radius: 20px;
    border: 7px solid var(--blueCard);
     box-shadow:var(--shadow-box);
     
  `;
export const ImgClint = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
  `;
export const ReviewClint = styled.span`
    color: var(--gray);
  `;
