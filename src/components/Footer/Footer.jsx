import React from 'react'
import { ContentFooter, EmailFooter,Links, Footers, IconFooter } from './StyledFooter'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Face from '@iconscout/react-unicons/icons/uil-facebook';
import Git from '@iconscout/react-unicons/icons/uil-github';
const Footer = () => {
  return (
    <Footers>
      <img src={Wave} alt="Wave" />
      <ContentFooter>
        <EmailFooter>
          <Links href="mailto:ahmedmahmoud2152001@gmail.com">
            ahmedmahmoud2152001@gmail.com
          </Links>
        </EmailFooter>
        <IconFooter>
        <Links href="https://www.linkedin.com/in/ahmed-mahmoud-mohammed-mohammed/">
          <Insta color='white' size='3rem' />
        </Links>
          <Links href="https://www.facebook.com/profile.php?id=61568018520463">
           <Face color='white' size='3rem' />
          </Links>
          <Links href="https://github.com/AhmedmMhmoud2001">
           <Git color='white' size='3rem' />
          </Links>
        </IconFooter>
      </ContentFooter>
    </Footers>
  )
}

export default Footer