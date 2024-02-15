import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Welcome");
  const navItems = [
    { id: 1, title: "Work", name: "Work" },
    { id: 4, title: "About", name: "About" },
    { id: 6, title: "Contact", name: "Contact" },
  ];

  return (
    <nav className="NavBar">
      <ul className="NavigationMenus">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelectedNavItem(item.name)}
            className={selectedNavItem === item.name ? 'activeNavItem' : ''}
          >
            <Link to={`/${item.name}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
