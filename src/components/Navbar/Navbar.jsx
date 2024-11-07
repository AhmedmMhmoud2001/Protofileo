import React, { useContext,useState }  from 'react';
import { useTranslation } from 'react-i18next';
import Togel from '../Togel/Togel';
import { Link } from 'react-scroll';
import { Nav, NavLeft, NavRight,Navminu, NavName, NavList, UnList, ListItem, BtnContact ,NavRightminu,NavListminu,UnListminu,BtnContactminu} from './StyledNavbar';
import { themeContext } from '../../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// import { motion } from 'framer-motion';
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Nav 
    style={{ backgroundColor: darkMode ? 'black' : 'white' }}
    >
      <NavLeft>
        <NavName>
          {t('El-Santawy')}
        </NavName>
        <Togel />
      </NavLeft>
      <NavRight>
        <NavList>
          <UnList
          >
            <Link spy={true} smooth={true} to='Heroo' activeClass='activeClass'
            >
              <ListItem >
                {t('Home')}
              </ListItem>
            </Link>
            <Link spy={true} smooth={true} to='Services' activeClass='activeClass' >
              <ListItem>
                {t('Services')}
              </ListItem>
            </Link>
            <Link spy={true} smooth={true} to='Experiences' activeClass='activeClass' >
              <ListItem>
                {t('Experiences')}
              </ListItem>
            </Link>
            <Link spy={true} smooth={true} to='protofileo' activeClass='activeClass' >
              <ListItem>
                {t('protofileo')}
              </ListItem>
            </Link>
            <Link spy={true} smooth={true} to='testimonial' activeClass='activeClass' >
              <ListItem>
                {t('testimonial')}
              </ListItem>
            </Link>
          </UnList>
        </NavList>
        {/* <Link spy={true} smooth={true} to='Contact' activeClass='activeClass'> */}
        {
          i18n.language === 'en' ? (
            <BtnContact
              onClick={() => {
                i18n.changeLanguage('ar');
              }}
            >
              عربي
            </BtnContact>) : (
            <BtnContact
              onClick={() => {
                i18n.changeLanguage('en');
              }}
            >
              English
            </BtnContact>
          )
        }
        {/* </Link> */}
      </NavRight>
      <Navminu>
      <FontAwesomeIcon icon={faBars}size="2x" onClick={toggleMenu} style={{ cursor: 'pointer' }} />
      
      </Navminu>
      {isMenuOpen && (
        <NavRightminu style={{ backgroundColor: darkMode ? 'black' : 'white' }}>
        <NavListminu>
          <UnListminu
          >
            <Link spy={true} smooth={true} to='Heroo' activeClass='activeClass'>
              <ListItem >
                {t('Home')}
              </ListItem>
            </Link>
            <Link spy={true} smooth={true} to='Services' activeClass='activeClass' >
              <ListItem>
                {t('Services')}
              </ListItem>
            </Link>
            <Link spy={true} smooth={true} to='Experiences' activeClass='activeClass' >
              <ListItem>
                {t('Experiences')}
              </ListItem>
            </Link>
            <Link spy={true} smooth={true} to='protofileo' activeClass='activeClass' >
              <ListItem>
                {t('protofileo')}
              </ListItem>
            </Link>
            <Link spy={true} smooth={true} to='testimonial' activeClass='activeClass' >
              <ListItem>
                {t('testimonial')}
              </ListItem>
            </Link>
          </UnListminu>
        </NavListminu>
        {/* <Link spy={true} smooth={true} to='Contact' activeClass='activeClass'> */}
        {
          i18n.language === 'en' ? (
            <BtnContactminu
              onClick={() => {
                i18n.changeLanguage('ar');
              }}
            >
              عربي
            </BtnContactminu>) : (
            <BtnContactminu
              onClick={() => {
                i18n.changeLanguage('en');
              }}
            >
              English
            </BtnContactminu>
          )
        }
        {/* </Link> */}
      </NavRightminu>
      )}
      
    </Nav>
  )
}

export default Navbar