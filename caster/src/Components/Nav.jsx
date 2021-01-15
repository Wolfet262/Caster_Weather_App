import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div className="navlinks">
            <Link to="/">Caster</Link>
            <Link to="/main">Main</Link>
            <h1>Nav Working</h1>
        </div>
    );
}

export default Nav;