import React from 'react';
import TextInputOutline from './TextInputOutline';

const TextAreaOutline = (props) => (
    <TextInputOutline {...props} isTextarea="true"/>
);

export default TextAreaOutline;