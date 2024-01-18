import Image from "next/image";
import styles from '@/styles/styles.module.css';

export default function Page() {
    return (
        <Image className={styles.gif}
            src="/connection.gif"
            width={350}
            height={350}
            alt="Animated gif"
        />
    )
}