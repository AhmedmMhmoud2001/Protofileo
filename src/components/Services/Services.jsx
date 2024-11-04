import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import { AwesomeText, Blur, BtnAwesome, Service, ServiceAwesome, ServiceCards, Container, LinksResume } from './StyledServices';
import Card from './Card/Card';
// import resume
import Resume from '../../resume/Ahmed_Mahmoud Mohamed_Resume.pdf'
// import images
import heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { useTranslation } from 'react-i18next';
const Services = () => {
  // context
  const { t} = useTranslation();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: 'spring' };
  return (
    <Service id='Services'>
      <ServiceAwesome>
        <AwesomeText
          style={{ color: darkMode ? 'white' : '' }}
        > {t('My Awesome')}</AwesomeText>
        <AwesomeText>{t('Services')}</AwesomeText>
        <AwesomeText>
        {t('I create tailored web solutions to meet your unique business needs.')}<br/> 
        {t('Utilizing Node.js and React.js,')}<br/>
         {t('I build responsive and efficient websites that enhance user engagement and drive results.')}
        </AwesomeText>
       
        
        <Blur />
        <LinksResume href={Resume} download >
          <BtnAwesome> {t('Download Cv')}</BtnAwesome>
        </LinksResume>
      </ServiceAwesome>
      <ServiceCards>
        <Container
          initial={{ left: '30rem' }}
          whileInView={{ left: '25rem' }}
          transition={transition}
        >
          <Card image={heartemoji}
            heading={t('Web Development')}
            details={t('Full web development with Node.js and React.js.')}
           />
        </Container>
        <Container
          initial={{ left: '-5rem' }}
          whileInView={{ top: '12rem', left: '0rem' }}
          transition={transition}
        >
          <Card image={Glasses}
            heading={t('Custom Website Creation')}
            details={t('Tailored websites for restaurants and real estate')}
          />
        </Container>
        <Container
          initial={{ top: '25rem' }}
          whileInView={{ top: '20rem', left: '22rem' }}
          transition={transition}
        >
          <Card image={Humble}
            heading={t('Search Engine Optimization (SEO)')}
            details= {t('Strategies to enhance search visibility and drive traffic.')}
            />
        </Container>
        <Blur />
        <Blur />
      </ServiceCards>
    </Service>
  )
}

export default Services