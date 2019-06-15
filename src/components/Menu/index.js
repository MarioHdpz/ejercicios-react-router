import React from 'react';
import countries from './countries';
import { Link, withRouter } from 'react-router-dom';

const Menu = props => (
  <div className="menu">
    {
      countries.map(country => {
        const code = country.code.toLowerCase()
        const isSamePath = props.location.pathname === `/${code}`;

        return (
          <Link to={`/${code}`} key={code}>
            <div className={`menu-item ${isSamePath ? 'active' : ''}`}>
              {country.name}
            </div>
          </Link>
        )
      })
    }
  </div>
);

export default withRouter(Menu);
