import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function Homepage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex">
                <Button
                    onClick={() => navigate('/pokedex')}
                    imageSrc="../botao1.svg"
                    label="Pokedex"
                />
                <Button
                    onClick={() => navigate('/catch')}
                    imageSrc="../botao2.png"
                    label="Catch"
                />
                <Button
                    onClick={() => navigate('/info')}
                    imageSrc="../botao3.svg"
                    label="Info"
                />
            </div>
        </div>
    );
}

export default Homepage;
