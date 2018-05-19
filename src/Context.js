import React from 'react';

// Display document title
export function withTitle(Component, title) {
    const DEFAULT_TITLE = "Jean-Charles Moussé";

    return class extends React.Component {
        componentWillMount() {
            document.title = (title ? title + " | " : "") + DEFAULT_TITLE;
        }
    
        render() {
            return <Component titlePage={title} {...this.props} />;
        }
    };
}

export default {withTitle}