import styled from 'styled-components';
export const Expirinc = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap:80px;
      height:30vh;
      margin-bottom: 8rem;
        @media (max-width: 480px) {
            flex-direction: column;
            height: 60rem;
            padding: 0;
      }
    `;
export const Achievement = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
export const Circle = styled.div`
      width: 100px;
      height: 100px;
      background-color: white;
      border-radius: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 35px;
      font-weight: bold;
      margin-bottom:32px;
      color: #000;
      &::before{
          content:'';
        border-radius:100%;
        background-image: linear-gradient(to bottom,#87e6fb 0%,#ffc05c 100%);
        position:absolute;
        z-index: -1;
        top: -8px;
        left: -8px;
        bottom: -8px;
        right: -8px;
        box-shadow: var(--boxShadow);
      }

    `;
export const ExpirincText = styled.span`
        font-size: 24px;
        &:nth-of-type(2){
            color: var(--orange);
        }
      
    `;