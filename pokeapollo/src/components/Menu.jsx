import React, { useState, useRef, useEffect } from 'react';

const Menu = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const [borderStyle, setBorderStyle] = useState({});
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const activeButton =
            activeTab === 'Home' ? homeRef.current :
                activeTab === 'Projects' ? projectsRef.current :
                    infoRef.current;

        setIndicatorStyle({
            width: `${activeButton.offsetWidth}px`,
            transform: `translateX(${activeButton.offsetLeft}px)`,
        });

        setBorderStyle({
            width: `${activeButton.offsetWidth / 2}px`, // half the width of the active button
            transform: `translateX(${activeButton.offsetLeft + activeButton.offsetWidth / 4}px)`, // center the border below the active button
        });
    }, [activeTab]);

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
                        borderBottomLeftRadius: '4px', // Adjust the value as needed
                        borderBottomRightRadius: '4px'
                    }}
                ></div>

                <button
                    ref={homeRef}
                    onClick={() => setActiveTab('Home')}
                    className={`relative px-6 py-1.5 rounded-full focus:outline-none z-10 text-white`}
                >
                    Home
                </button>
                <button
                    ref={projectsRef}
                    onClick={() => setActiveTab('Projects')}
                    className={`relative px-6 py-1.5 rounded-full focus:outline-none z-10 text-white`}
                >
                    Projects
                </button>
                <button
                    ref={infoRef}
                    onClick={() => setActiveTab('Info')}
                    className={`relative px-6 py-1.5 rounded-full focus:outline-none z-10 text-white`}
                >
                    Info
                </button>
            </div>
        </div>
    );
};

export default Menu;
