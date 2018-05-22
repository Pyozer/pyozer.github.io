import React from 'react';

const Badge = (props) => (
    <span {...props} className={"badge badge-" + (props.type || "secondary") + " badge-pill " + (props.className || "") }>{props.children}</span>
);

export default Badge;