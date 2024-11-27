import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Menu = () => {
    const [activeTab, setActiveTab] = useState('');
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [borderStyle, setBorderStyle] = useState({});
    const homeRef = useRef(null);
    const pokedexRef = useRef(null);
    const catchRef = useRef(null);
    const infoRef = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === '/') {
            setActiveTab('Home');
        } else if (currentPath === '/pokedex') {
            setActiveTab('Pokedex');
        } else if (currentPath === '/catch') {
            setActiveTab('Catch');
        } else if (currentPath === '/info') {
            setActiveTab('Info');
        }
    }, [location]);

    useEffect(() => {
        const activeButton =
            activeTab === 'Home' ? homeRef.current :
                activeTab === 'Pokedex' ? pokedexRef.current :
                    activeTab === 'Catch' ? catchRef.current :
                        infoRef.current;

        if (activeButton) {
            const timeout = setTimeout(() => {
                setIndicatorStyle({
                    width: `${activeButton.offsetWidth}px`,
                    transform: `translateX(${activeButton.offsetLeft}px)`,
                });

                setBorderStyle({
                    width: `${activeButton.offsetWidth / 2}px`,
                    transform: `translateX(${activeButton.offsetLeft + activeButton.offsetWidth / 4}px)`,
                });
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [activeTab]);

    const handleNavigation = (tab, path) => {
        setActiveTab(tab);
        navigate(path);
    };

    return (
        <div className="rounded-full bg-menu-green">
            <div className="relative flex items-center justify-center m-1.5">
                {/* Background indicator */}
                <div
                    className="absolute top-0 left-0 h-full bg-menu-yellow rounded-full transition-all duration-300 ease-in-out"
                    style={indicatorStyle}
                ></div>

                {/* Independent Border-bottom line with delay */}
                <div
                    className="absolute bottom-[-9px] left-0 h-[3px] bg-menu-yellow transition-all duration-[400ms] ease-in-out"
                    style={{
                        ...borderStyle,
                        borderBottomLeftRadius: '4px',
                        borderBottomRightRadius: '4px'
                    }}
                ></div>

                <button
                    ref={homeRef}
                    onClick={() => handleNavigation('Home', '/')}
                    className={`relative px-6 py-1.5 focus:outline-none z-10 rounded-full text-white text-3xl`}
                >
                    Home
                </button>
                <button
                    ref={pokedexRef}
                    onClick={() => handleNavigation('Pokedex', '/pokedex')}
                    className={`relative px-6 py-1.5 focus:outline-none z-10 rounded-full text-white text-3xl`}
                >
                    Pokedex
                </button>
                <button
                    ref={catchRef}
                    onClick={() => handleNavigation('Catch', '/catch')}
                    className={`relative px-6 py-1.5 focus:outline-none z-10 rounded-full text-white text-3xl`}
                >
                    Catch
                </button>
                <button
                    ref={infoRef}
                    onClick={() => handleNavigation('Info', '/info')}
                    className={`relative px-6 py-1.5 focus:outline-none z-10 rounded-full text-white text-3xl`}
                >
                    Info
                </button>
            </div>
        </div>
    );
};

export default Menu;
