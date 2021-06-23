import React from 'react';
import { 
    H1 as H1Component,     
    Label as LabelComponent,
    Caption as CaptionComponent,
} from '../src';
import { text, select, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Components/Typographies',
};

export const H1 = () => (
    <H1Component                             
        className={text('className', '')}
        bold={boolean('bold', false)}
        color={select('color', colorOptions, 'inherit')} 
        label={text('label', 'H1')}
    />
)

export const Label = () => (
    <LabelComponent                             
        className={text('className', '')}
        variant={select('variant', subtitleOptions, 'subtitle1')} 
        color={select('color', colorOptions, 'inherit')} 
        bold={boolean('bold', false)}
        label={text('label', 'Label')}
    />
)

export const Caption = () => (
    <CaptionComponent                             
        className={text('className', '')}        
        color={select('color', colorOptions, 'inherit')} 
        bold={boolean('bold', false)}
        label={text('label', 'Caption')}
    />
)

const colorOptions = {
    inherit: 'inherit',
    secondary: 'secondary'
}

const subtitleOptions = {
    subtitle1: 'subtitle1',
    subtitle2: 'subtitle2',
}
