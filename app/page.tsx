import Link from 'next/link';
// import Head from 'next/head';
import styles from '@/styles/styles.module.css';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Mi página Web</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=devide-width, initial-scale=1, shrink-to-fit=no" />
      </Head> */}

      {/* Navbar */}  
      <nav className={styles.navbar}>
        <Link href="/" className={styles.navbarBrand}>Home</Link>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <Link href="/pages/ayuda" className={styles.navLink}>Ayuda</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/pages/contacto" className={styles.navLink}>Contacto</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/pages/sesion" className={styles.navLink}>Sesion</Link>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className={styles.content}>
        <h1 className={styles.h1Pri}>Development with Next</h1>
      </div>
        
        {/* Footer */}
        <Footer/>
    </div>
  )
}


// <div className="container mx-auto">
//   {/* Encabezado */}
//   <header className="my-8">
//     <h1 className="text-4xl font-bold">Pagina hecha con Next</h1>
//   </header>

//   {/* Barra de navegación */}
//   <nav className="my-4">
//     <ul className="flex">
//       <li className="mr-4">
//         <Link href="/">
//           Home
//         </Link>
//       </li>
//       <li>
//         <Link href="/pages/test">
//           Test
//         </Link>
//       </li>
//     </ul>
//   </nav>

//   <main className="my-8">
//     <section>
//       <h2 className="text-2xl font-bold mb-4">Publicaciones Recientes</h2>
//       Pagina pendiente de terminar
//     </section>

//   </main>

//   {/* Pie de página */}
//   <footer className="py-4 border-t">
//     <p>&copy; 2024 Luis Ignacio Gonzalez Silva</p>
//   </footer>
// </div>