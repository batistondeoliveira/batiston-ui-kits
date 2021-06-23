import React from 'react';
import { Link as LinkComponent } from '../src';
import { BrowserRouter as Router } from 'react-router-dom';
import { text, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Components/Links',
    components: LinkComponent
};

export const Link = () => (
    <Router>
        <LinkComponent                  
            classNameContainer={text('classNameContainer', '')}
            className={text('className', '')}
            dropDown={boolean('dropDown', false)}
            to={text('to', '/')}
            label={text('label', 'Link')}
        />
    </Router>
)
