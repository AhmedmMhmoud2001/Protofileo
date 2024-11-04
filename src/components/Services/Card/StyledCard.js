import styled from 'styled-components';

export const Carde = styled.div`
  width: 250px;
  height: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.26);
  border: var(--orangeCard) 7px solid;
  box-shadow:var(--boxShadow);
  border-radius: 20px;
  padding:0 26px 32px 26px;
`;
export const ImgCard = styled.img`
  transform: scale(0.6);
  margin-bottom: -32px;
`;
export const Heading = styled.span`
  font-weight: bold;
  font-size:20px;
`;
export const Details = styled.span`
  color: var(--gray);
  font-size:16px;
  line-height: 1.5;
`;
export const BtnService = styled.button`
  background: #ffffff;
  box-shadow: 0px 19px 60px rgba(0, 0,0, 0.08);
  border-radius:7px;
  border: none;
  padding:10px;
  color: #5290fd;
`;