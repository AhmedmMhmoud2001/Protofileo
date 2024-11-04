import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import { clients } from './Clinet'
import { Blur, HeadingText, ImgClint, ReviewClint, Testimonial, TestimonialHeading, TWrap } from './StyledTestimonials'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "./swipe.css";
import 'swiper/css/pagination';
import 'swiper/css';
import { useTranslation } from 'react-i18next';
const Testimonials = () => {
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const { t} = useTranslation();
    return (
        <Testimonial id='testimonial' >
            <TestimonialHeading>
                <HeadingText> {t('Client always get')}</HeadingText>
                <HeadingText> {t('Exceptional work')}</HeadingText>
                <HeadingText> {t('For me...')}</HeadingText>
                <Blur />
                <Blur />
            </TestimonialHeading>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <TWrap>
                                <ImgClint src={client.img} />
                                <ReviewClint
                                    style={{ color: darkMode ? 'white`' : '', }}
                                >{client.review}</ReviewClint>
                            </TWrap>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Testimonial>
    )
}

export default Testimonials