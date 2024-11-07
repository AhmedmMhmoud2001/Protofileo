import styled from 'styled-components';
export const Footers = styled.div`
  display: flex;
  align-items: center;
  margin: -0.5rem -3.5rem ;
  position: relative;
  margin-top:-7rem; 
  height: 60vh;
`;
export const Img = styled.img`
  width: '100%';

`;
export const ContentFooter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;       
  width: 100%;
  margin-top: 8rem;
  gap: 4rem;
  color: white;
  font-size: 24px;
  @media (max-width: 480px) {
                  font-size: 20px;
                  }
`;
export const EmailFooter = styled.div`
  
`;
export const IconFooter = styled.div`
  display: flex;
  gap: 2rem;
`;
export const Links = styled.a`
text-decoration: none;
color: white;
`;