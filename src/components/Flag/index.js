import React from "react";

const Flag = props => {
    const src = `https://www.countryflags.io/${props.match.params.id}/flat/64.png`
    return (
        <div className="main">
            <img src={src} alt="" />
        </div>
    )
};

export default Flag;
