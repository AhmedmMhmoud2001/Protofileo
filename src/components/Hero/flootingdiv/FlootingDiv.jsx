import React from 'react'
import { Flooting, FlootingImg, FlootingText } from './styledFlootingDiv'

const FlootingDiv = ({ Img, text1, text2 }) => {
    return (
        <Flooting>
            <FlootingImg src={Img} />
            <FlootingText>
                {text1}
                <br />
                {text2}
            </FlootingText>
        </Flooting>
    )
}

export default FlootingDiv