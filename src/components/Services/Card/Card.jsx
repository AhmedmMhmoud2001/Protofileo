import { Carde, Heading, ImgCard, Details, BtnService } from './StyledCard';
// context
import React, { useContext } from 'react';
import { themeContext } from '../../../Context';
import { useTranslation } from 'react-i18next';

const Card = ({ image, heading, details }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { t} = useTranslation();
  
  return (
    <Carde
      style={{ color: darkMode ? 'white' : '', background: 'rgba(100, 100, 0, 0.26)' }}
    >
      <ImgCard src={image} />
      <Heading>
        {heading}
      </Heading>
      <Details
          style={{ color: darkMode ? 'silver' : '', }}
      >
        {details}
      </Details>
      <BtnService 
        style={{ color: darkMode ? 'black' : '', }}
      >
        {t('Learn More')}
      </BtnService>
    </Carde>
  )
}

export default Card