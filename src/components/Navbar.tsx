import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/profile">Perfil</Link>
      <Link to="/settings">Configuraciones</Link>
    </nav>
  </header>
);

export default Header;
