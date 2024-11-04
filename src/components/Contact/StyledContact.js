import styled from 'styled-components';
export const Contac = styled.div`
  padding: 0 3rem;
  height: 80vh;
  display: flex;
  margin-top: 10rem;
`;
export const ContactAwesome = styled.div`
flex: 1;
`;
export const AwesomeContent = styled.div`
    display: flex;
  flex-direction: column;
  position: relative;
`;
export const AwesomeText = styled.span`
   &:nth-of-type(1){
    color:var(--black);
    font-size: 60px;
    font-weight: bold;
  }
  &:nth-of-type(2){
    color:var(--orange);
    font-size: 60px;
    font-weight: bold;
  }
`;
export const Blur = styled.div`
  position: absolute;
  width: 500px;
  height: 280px;
  z-index: -9;
  left: 8rem;
 top: 1rem;
  border-radius:50%;
  filter: blur(72px);
  &:nth-of-type(1){
 background:var(--purple) ;
  }

  `;
export const ContactForm = styled.div`
    display: flex;
    flex: 1;
    justify-content:center;
    position: relative;
   
  `;
export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  `;
export const ContactText = styled.input`
    width: 20rem;
    height: 2rem;
    padding: 0 3rem;
    outline: 0;
    border-radius: 8px;
    font-size: 16px;
    border: 2px solid var(--orange);
    padding:1rem 1rem;
    
    `;
export const ContactEmail = styled.input`
    width: 20rem;
    height: 2rem;
    padding: 0 3rem;
    outline: 0;
    border-radius: 8px;
    font-size: 16px;
    border: 2px solid var(--orange);
    padding:1rem 1rem;
    `;
export const ContactArea = styled.textarea`
    width: 20rem;
    height: 4rem;
    padding: 0 3rem;
    outline: 0;
    border-radius: 8px;
    font-size: 16px;
    border: 2px solid var(--orange);
     padding:1rem 1rem;
    `;
export const ContactSubmit = styled.input`
  border-radius: 34px; 
  border:1px solid transparent; 
  color: white;
  font-size: 16px;
   background: linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%);
   box-shadow: 0px 20px 24px 3px rgba(251, 161, 40, 0.42);
   padding: 11px 26px 11px 26px;
   transition: 0.5s all ;  
   &:hover {
    background: white;
    cursor: pointer;
    border: 1px solid var(--orange);
    color: var(--orange);
   }`;
   export const Thanks = styled.span`
     
   `;