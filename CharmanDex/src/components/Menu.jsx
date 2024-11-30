import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Menu = () => {
    const [activeTab, setActiveTab] = useState('');
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [borderStyle, setBorderStyle] = useState({});

    const buttonRefs = useRef({});
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = useMemo(() => [
        { name: 'Home', path: '/', ref: 'homeRef' },
        { name: 'Pokedex', path: '/pokedex', ref: 'pokedexRef' },
        { name: 'Catch', path: '/catch', ref: 'catchRef' },
        { name: 'Info', path: '/info', ref: 'infoRef' }
    ], []);

    useEffect(() => {
        const currentPath = location.pathname;
        const tab = tabs.find(t =>
            currentPath === t.path ||
            (t.name === 'Pokedex' && /^\/pokedex\/\d+$/.test(currentPath))
        );
        setActiveTab(tab ? tab.name : 'Home');
    }, [location, tabs]);

    useEffect(() => {
        const activeButton = buttonRefs.current[activeTab] || buttonRefs.current.Home;

        if (activeButton) {
            const timeout = setTimeout(() => {
                setIndicatorStyle({
                    width: `${activeButton.offsetWidth}px`,
                    transform: `translateX(${activeButton.offsetLeft}px)`
                });

                setBorderStyle({
                    width: `${activeButton.offsetWidth / 2}px`,
                    transform: `translateX(${activeButton.offsetLeft + activeButton.offsetWidth / 4}px)`
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

                {tabs.map(({ name, path }) => (
                    <button
                        key={name}
                        ref={link => buttonRefs.current[name] = link}
                        onClick={() => handleNavigation(name, path)}
                        className={`relative px-6 py-1.5 focus:outline-none z-10 rounded-full text-white text-3xl`}
                    >
                        {name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Menu;
