import React, { useState } from 'react';
import '@/css/App.css';
import FakeStoreComponent from '@/components/FakeStoreComponent';
import PokemonComponent from '@/components/PokemonComponent';
import UsuariosRandom from './components/UsuariosRandom';

function App() {
  const [page, setPage] = useState('fakestore');

  const mostrarPagina = () => {
    switch (page) {
      case 'fakestore':
        return <FakeStoreComponent />;
      case 'usuariosRandom':
        return <UsuariosRandom />;
      case 'pokemon':
        return <PokemonComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        <nav className="Paginas">
          <button
            className={page === 'fakestore' ? 'active' : ''}
            onClick={() => setPage('fakestore')}
          >
            FakeStore API
          </button>
          <button
            className={page === 'usuariosRandom' ? 'active' : ''}
            onClick={() => setPage('usuariosRandom')}
          >
            RandomUser API
          </button>
          <button
            className={page === 'pokemon' ? 'active' : ''}
            onClick={() => setPage('pokemon')}
          >
            PokeAPI
          </button>
        </nav>
      </header>
      <main className="Content">{mostrarPagina()}</main>
    </div>
  );
}

export default App;
