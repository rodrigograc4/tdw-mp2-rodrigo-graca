import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen p-4">
            <div className="bg-white p-20 text-center rounded-xl border-2 border-black">
                <h1 className="text-4xl font-bold mb-12">Erro 404 - Página näo encontrada</h1>
                <p className="text-xl font-bold mb-4">Desculpe, mas a página que procura näo foi encontrada.</p>
                <p className="text-xl underline underline-offset-4 font-bold">
                    <Link to="/">Voltar à página inicial</Link>
                </p>
            </div>
        </div>
    );
}
