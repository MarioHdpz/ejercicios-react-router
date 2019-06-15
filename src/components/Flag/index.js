import React from "react";

const Flag = props => {
    /** Recuerda que por el hecho de ser llamado por el router este elemento ya
     * recibe las propiedades: match, location y history
     * 
     * Debes usar una de ellas para modificar el texto en la variable src
     * 
    */ 
    const src = `https://www.countryflags.io/mx/flat/64.png`
    return (
        <div className="main">
            <img src={src} alt="" />
        </div>
    )
};

export default Flag;
