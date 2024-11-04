import React from 'react';
import { useTranslation } from 'react-i18next';
import Togel from '../Togel/Togel';
import { Link } from 'react-scroll';
import { Nav, NavLeft, NavRight, NavName, NavList, UnList, ListItem, BtnContact } from './StyledNavbar';
// import { motion } from 'framer-motion';
const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <Nav>
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
            <Link spy={true} smooth={true} to='Navbar' activeClass='activeClass'
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
              Ar
            </BtnContact>) : (
            <BtnContact
              onClick={() => {
                i18n.changeLanguage('en');
              }}
            >
              En
            </BtnContact>
          )
        }
        {/* </Link> */}
      </NavRight>
    </Nav>
  )
}

export default Navbar