import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import { Work, WorkAwesome, AwesomeText, Blur, BtnAwesome, WorkCircle, MainCircle, PrimCircle, ImageCircle, CircleBack } from './StyledWorked'
// import image
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { useTranslation } from 'react-i18next';
const Works = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const { t} = useTranslation();
    return (
        <Work>
            <WorkAwesome>
                <AwesomeText
                    style={{ color: darkMode ? 'white' : '' }}
                >{t('works for All This')}</AwesomeText>
                <AwesomeText>{t('Brand & Client')}</AwesomeText>
                <AwesomeText
                    style={{ color: darkMode ? 'silver' : '' }}
                > {t('Lorem ipsum dolor sit amet.Ut aspernatur ipsam in earum vero est')}<br />
                     {t('quisquam cupiditate sit vitae blanditiis sit enim porro aut')}<br />
                    {t('eaque autem vel ratione saepe.sit vitae blanditiis sit enim porro aut')}<br />
                    {t('quisquam cupiditate sit vitae blanditiis sit enim porro aut')}
                </AwesomeText>
                <Blur />
                <BtnAwesome> {t('Hire me')}</BtnAwesome>
            </WorkAwesome>
            <WorkCircle>
                <MainCircle
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                >
                    <PrimCircle>
                        <ImageCircle src={Upwork} alt />
                    </PrimCircle>
                    <PrimCircle>
                        <ImageCircle src={Fiverr} alt />
                    </PrimCircle>
                    <PrimCircle>
                        <ImageCircle src={Amazon} alt />
                    </PrimCircle>
                    <PrimCircle>
                        <ImageCircle src={Shopify} alt />
                    </PrimCircle>
                    <PrimCircle>
                        <ImageCircle src={Facebook} alt />
                    </PrimCircle>
                </MainCircle>
                <CircleBack />
                <CircleBack />
            </WorkCircle>
        </Work>
    )
}

export default Works