import React from 'react';

const Loader = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui large text loader">{props.message}</div>
        </div>
    );
};

// Default Propeties 
Loader.defaultProps = {
    message: "Loading..."
}

export default Loader;