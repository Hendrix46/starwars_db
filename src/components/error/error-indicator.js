import React from "react";
import './error-indicator.css'

const ErrorIndicator = ()=>{
    return (
        <div className="error-indicator mx-auto">
            <span>BOOM</span>
            <span>something has gone wrong</span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    )
};

export default ErrorIndicator;