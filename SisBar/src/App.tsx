function App() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">La Familia</h1>
        <ul className="flex gap-6">
          <li><a href="#" className="hover:text-yellow-300 transition">Inicio</a></li>
          <li><a href="#" className="hover:text-yellow-300 transition">Contacto</a></li>
          <li><a href="#" className="hover:text-yellow-300 transition">Sobre nosotros</a></li>
          <li><a href="#" className="hover:text-yellow-300 transition">Nuestros productos</a></li>
          <li><a href="#" className="hover:text-yellow-300 transition">Nuestros servicios</a></li>
          <li><a href="#" className="hover:text-yellow-300 transition">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
