import React from 'react'
import { Achievement, Circle, Expirinc, ExpirincText } from './StyledExpirince';
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const { t} = useTranslation();
    return (
        < Expirinc id='Experiences'>
            <Achievement>
                <Circle>
                    3+
                </Circle>
                <ExpirincText> {t('Year')}</ExpirincText>
                <ExpirincText> {t('Experience')}</ExpirincText>
            </Achievement>
            <Achievement>
                <Circle>
                    15+
                </Circle>
                <ExpirincText>{t('Completed')}</ExpirincText>
                <ExpirincText>{t('Projects')}</ExpirincText>
            </Achievement>
            <Achievement>
                <Circle>
                    2+
                </Circle>
                <ExpirincText>{t('companies')}</ExpirincText>
                <ExpirincText> {t('Work')}</ExpirincText>

            </Achievement>
        </Expirinc>
    )
}

export default Experience