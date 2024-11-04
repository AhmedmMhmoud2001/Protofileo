import styled from 'styled-components';
export const Btn = styled.button`
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