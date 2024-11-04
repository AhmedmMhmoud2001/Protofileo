import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import { ProtfiloHeading, ProtfiloImage, Protofilo } from './StyledProtofileo';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swipe.css';
import 'swiper/css';
// impor image 
import One from '../../img/1.png';
import Two from '../../img/6.png';
import Three from '../../img/7.png';
import Four from '../../img/8.png';
import { useTranslation } from 'react-i18next';
// context
const Protofileo = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { t} = useTranslation();
  return (
    <Protofilo className='portfolio' id='protofileo' >
      <ProtfiloHeading
        style={{ color: darkMode ? 'white' : '', }}
      >{t('Recent Projects')}</ProtfiloHeading>
      <ProtfiloHeading>{t('Protofileo')}</ProtfiloHeading>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide >
          <ProtfiloImage src={One} />
        </SwiperSlide>
        <SwiperSlide>
          <ProtfiloImage src={Two} />
        </SwiperSlide>
        <SwiperSlide>
          <ProtfiloImage src={Three} />
        </SwiperSlide>
        <SwiperSlide>
          <ProtfiloImage src={Four} />
        </SwiperSlide>
      </Swiper>
    </Protofilo>
  )
}
export default Protofileo