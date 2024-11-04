import React, { useContext } from 'react';
import FlootingDiv from './flootingdiv/FlootingDiv';
import { Heroo, HeroLeft, HeroName, HeroRight, NameText, BtnHero, IconHero, IconImg, Links, Img, Flooting1, Flooting2, Imoje, Blur } from './StyledHero'
// img icon social media  import 
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
// img img social media  import 
import Boy from '../../img/boy.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Thumbup from '../../img/thumbup.png';
import Glassesimoji from '../../img/glassesimoji.png';
import Crown from '../../img/crown.png';
import { themeContext } from '../../Context';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    // context
    const { t} = useTranslation();
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = { duration: 2, type: 'spring' };
    return (
        <Heroo>
            <HeroLeft>
                <HeroName>
                    <NameText
                        style={{ color: darkMode ? 'white' : '' }}
                    >{t('Hi! I Am')}</NameText>
                    <NameText> {t('Ahmad El-Santawy')}</NameText>
                    <NameText
                        style={{ color: darkMode ? 'silver' : '' }}
                    > {t('I am a professional web developer offering custom development services using Node.js and React.js.')} 
                     <br/>
                     {t('I aim to provide solutions that meet client needs and improve website visibility in search engines (SEO).')}
                     </NameText>
                </HeroName>
                <BtnHero> {t('Hire me')}</BtnHero>
                <IconHero>
                    <Links href="https://github.com/AhmedmMhmoud2001">
                        <IconImg src={Github} alt="github" />
                    </Links>
                    <Links href="https://www.linkedin.com/in/ahmed-mahmoud-mohammed-mohammed/">
                        <IconImg src={LinkedIn} alt="LinkedIn" />
                    </Links>
                    <Links href="https://www.linkedin.com/in/ahmed-mahmoud-mohammed-mohammed/">
                        <IconImg src={Instagram} alt="instagram" />
                    </Links>
                </IconHero>
            </HeroLeft>
            <HeroRight>
                <Img src={Vector1} alt="Vector1" />
                <Img src={Vector2} alt="Vector2" />
                <Img src={Boy} alt="Boy" />
                <Flooting1
                    initial={{ top: '-4%', left: '78%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                >
                    <FlootingDiv Img={Crown} text1="web" text2="Developer" />
                </Flooting1>
                <Flooting2
                    initial={{ top: '62.5%', left: '-2%' }}
                    whileInView={{ left: '' }}
                    transition={transition}
                >
                    <FlootingDiv Img={Thumbup} text1="Best " text2="Design" />
                </Flooting2>
                <Imoje src={Glassesimoji}
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                />
                <Blur>
                    <Blur></Blur>
                </Blur>
            </HeroRight>
        </Heroo>
    )
}

export default Hero