import styles from '@/styles/styles.module.css';
import Gif from '@/components/Gif';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={styles.content}>
      {/* Contenido principal */}
        <h1 className={styles.h1Pri}>Development with Next</h1>

        <Gif/>

      {/* Footer */}
      <Footer />
    </div>
  )
}

