import React, { useContext } from 'react'
import { BtnTogel, Toggel } from './StyledTogel'
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { themeContext } from '../../Context';
const Togel = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const changeTheme= () => {
        theme.dispatch({ type: 'toggle'})
    }
    return (
        <Toggel >
            <Moon />
            <Sun />
            <BtnTogel
            onClick={changeTheme}
                style={darkMode ? { left: '2px' } : { right: '2px' }}
            >
            </BtnTogel>
        </Toggel>
    )
}

export default Togel