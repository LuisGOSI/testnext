import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto">
      {/* Encabezado */}
      <header className="my-8">
        <h1 className="text-4xl font-bold">Pagina hecha con Next</h1>
      </header>

      {/* Barra de navegación */}
      <nav className="my-4">
        <ul className="flex">
          <li className="mr-4">
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pages/test">
              Test
            </Link>
          </li>
        </ul>
      </nav>

      <main className="my-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Publicaciones Recientes</h2>
          Pagina pendiente de terminar
        </section>

      </main>

      {/* Pie de página */}
      <footer className="py-4 border-t">
        <p>&copy; 2024 Luis Ignacio Gonzalez Silva</p>
      </footer>
    </div>
  );
}
