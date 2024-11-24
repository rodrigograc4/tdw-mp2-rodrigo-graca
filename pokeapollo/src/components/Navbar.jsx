import React from 'react';
import Menu from './Menu';

const Navbar = () => {

    return (
        <nav className="w-full fixed top-0 flex items-center justify-between px-60 py-7 mb-20 z-10">
            {/* Logo à esquerda */}
            <div className="flex items-center space-x-3 px-6 py-2.5 rounded-3xl text-white bg-menu-green">
                <img src="logo.png" alt="User profile" className="h-7 w-7 rounded-full" />
                <span>Poke Apollo</span>
            </div>

            {/* Menu à direita */}
            <Menu />
        </nav>
    );
};

export default Navbar;
