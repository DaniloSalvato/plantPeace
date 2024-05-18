import React from 'react';

export default function UserLogin() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        {/* Campo de usuário */}
        <input
          type="text"
          placeholder="Nome de usuário"
          className="w-full p-2 border rounded"
        />
        {/* Botão de login */}
        <button className="w-full mt-4 bg-blue-500 text-white p-2 rounded">
          Entrar
        </button>
      </div>
    </div>
  );
}

