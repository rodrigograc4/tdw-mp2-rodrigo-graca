import React from 'react';
import Menu from './Menu';

const Navbar = () => {

    return (
        <nav className="w-3/4 fixed top-0 left-1/2 transform -translate-x-1/2 flex items-center lg:justify-between justify-center py-7 mb-20 z-10">
            {/* Logo à esquerda */}
            <div className="hidden lg:flex items-center space-x-3 px-6 py-2.5 rounded-full text-white text-3xl bg-menu-green">
                <img src="../logo.png" alt="User profile" className="h-7 w-7 rounded-full" />
                <span className="hidden sm:block">Poke Apollo</span> {/* Exibe somente em telas maiores */}
            </div>

            {/* Menu à direita (sempre visível) */}
            <Menu />
        </nav>
    );
};

export default Navbar;
