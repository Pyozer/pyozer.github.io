import React from "react";
import Link from "react-router-dom/Link";

const UrlContent = ({children, url}) => (
    url && url.length > 0 ? (
        <Link to={url}>
            { children }
        </Link>
    ) : (
        children
    )
)

export default UrlContent;