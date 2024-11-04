import React, { useRef, useState, useContext } from 'react';
import { themeContext } from '../../Context';
import { AwesomeContent, AwesomeText, Blur, Contac, ContactArea, ContactAwesome, ContactEmail, ContactForm, ContactSubmit, ContactText, Form, Thanks } from './StyledContact'
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
const Contact = () => {
    const [done, setDone] = useState(false);
    const form = useRef();
    // context
    const { t} = useTranslation();
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xqq26l8', 'template_2q9ewus', form.current, '6KXbMH5-idYmo-wVd')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Contac id='Contact'>
            <ContactAwesome>
                <AwesomeContent>
                    <AwesomeText
                        style={{ color: darkMode ? 'white' : '', }}
                    > {t('Get in Touch')}</AwesomeText>
                    <AwesomeText> {t('Contact me')} </AwesomeText>
                </AwesomeContent>
                {/* <Blur /> */}
            </ContactAwesome>
            <ContactForm>
                <Form ref={form} onSubmit={sendEmail} >
                    <ContactText
                        type="text"
                        name='user_name'
                        placeholder={t('Name')}
                        className='input'
                        Required
                    />
                    <ContactEmail
                        type="email"
                        name='user_email'
                        placeholder={t('Email')}
                        className='input'
                        Required
                    />
                    <ContactArea
                        name='message'
                        placeholder={t('Message')}
                        className='input'
                        Required
                    />
                    <ContactSubmit
                        type="submit"
                        value={t('Send')}
                    />
                    <Thanks>
                        {
                            done && t('Thanks for Contact me !')
                        }
                    </Thanks>
                </Form>
                <Blur />
            </ContactForm>
        </Contac>
    )
}

export default Contact