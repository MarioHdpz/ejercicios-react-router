import React from 'react';
import countries from './countries';
// import { Link } from 'react-router-dom'; 

/** 
 * TIP: Debes implementar el elemento Link y agregarle
 * su propiedad "to"
*/

const Menu = () => (
  <div className="menu">
    {
      countries.map(country => {
        // Esta variable es el código de país listo para usarse
        const code = country.code.toLowerCase();

        return (
          <div key={code}>
            <div className="menu-item">
              {country.name}
            </div>
          </div>
        )
      })
    }
  </div>
);

export default Menu;
